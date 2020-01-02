import React, { Component } from 'react';
import { allModels, myModels, myFavoriteModels, searchOnAllModels, searchOnMyModels, fetchNewPage } from './services/apiService';
import { debounce } from './helpers/tools'
import ModelList from './components/modelList/modelList';
import Navigation from './components/navigation/navigation';
import Pagination from './components/pagination/pagination';
import Search from './components/search/search'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentAPI: 'mine',
            searchQuery: '',
            isLoaded: false,
            models: {
                cursors: {},
                next: undefined,
                previous: null,
                results: []
            }
        };
    }
    componentDidMount() {
        this.onMyModelsClick();
    }
    onMyModelsClick() {
        this.setState({
            currentAPI: 'mine',
            searchQuery: '',
            isLoaded: false,
        });
        myModels()
            .then((myModelsResponse) => {
                this.setState({
                    isLoaded: true,
                    models: myModelsResponse
                });
            })
    }
    onMyFavoriteModelsClick() {
        this.setState({
            currentAPI: 'favorite',
            searchQuery: '',
            isLoaded: false,
        });
        myFavoriteModels()
            .then((myFavoritesResponse) => {
                this.setState({
                    isLoaded: true,
                    models: myFavoritesResponse
                });
            })
    }
    onAllModelsClick() {
        this.setState({
            currentAPI: 'all',
            searchQuery: '',
            isLoaded: false,
        });
        allModels()
            .then((searchResponse) => {
                this.setState({
                    isLoaded: true,
                    models: searchResponse
                });
            });
    }
    modelsSearch(apiMethod, searchQuery) {
        this.setState({
            isLoaded: false,
        });
        apiMethod(searchQuery)
            .then((searchResponse) => {
                this.setState({
                    isLoaded: true,
                    models: searchResponse
                });
            });
    }
    changePage(direction) {
        this.setState({
            isLoaded: false,
        });
        fetchNewPage(this.state.models[direction])
            .then((newPageResponse) => {
            this.setState({
                isLoaded: true,
                models: newPageResponse
            });
        });
    }
    search(event) {
        this.setState({
            searchQuery: event.target.value
        });
        let apiMethod;
        if (this.state.currentAPI === 'mine') {
            apiMethod = searchOnMyModels;
        } else {
            apiMethod = searchOnAllModels;
        }
        // TODO: add a debounce time of 500ms
        this.modelsSearch(apiMethod, event.target.value);
    }
    render() {
        const { currentAPI, searchQuery, isLoaded, models } = this.state;
        return (
            <div className="app-container">
                <Navigation
                    currentAPI={ currentAPI }
                    onAllModelsClick={this.onAllModelsClick.bind(this)}
                    onMyModelsClick={this.onMyModelsClick.bind(this)}
                    onFavoriteClick={this.onMyFavoriteModelsClick.bind(this)}
                ></Navigation>
                <div className="divider"></div>
                <div className="row">
                    <Search currentAPI={currentAPI} searchQuery={searchQuery} search={this.search.bind(this)}></Search>
                    <Pagination models={models} changePage={this.changePage.bind(this)}></Pagination>
                </div>
                <ModelList isLoaded = { isLoaded } models = { models.results }></ModelList>
            </div>
        );
    }
}

export default App;
