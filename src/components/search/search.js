import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    render() {
        return (
            <div className={"col s12 m3 l3 search" + (this.props.currentAPI === 'favorite' ? ' disabled' : '')}>
                <input type="text" placeholder="Type here to search" value={this.props.searchQuery} onChange={this.props.search} />
                <i className="material-icons">search</i>
            </div>
        );
    }
}

export default Search;