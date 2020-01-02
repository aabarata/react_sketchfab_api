import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="auth">
                    <i className="small material-icons">person</i>
                    <span>Welcome, aabarata</span>
                </div>
                <button className={"btn waves-effect waves-light" + (this.props.currentAPI === 'all' ? ' active' : '')} onClick={this.props.onAllModelsClick.bind(this, '')}>
                    All models <i className="material-icons right">photo_library</i>
                </button>
                <button className={"btn waves-effect waves-light" + (this.props.currentAPI === 'mine' ? ' active' : '')} onClick={this.props.onMyModelsClick}>
                    My models <i className="material-icons right">personal_video</i>
                </button>
                <button className={"btn waves-effect waves-light" + (this.props.currentAPI === 'favorite' ? ' active' : '')} onClick={this.props.onFavoriteClick}>
                    Favorite models <i className="material-icons right">grade</i>
                </button>
            </div>
        );
    }
}

export default Navigation;