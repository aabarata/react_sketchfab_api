import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
    previewPage() {

    }
    nextPage() {

    }
    render() {
        return (
            <div className="col s12 m2 l2 push-m7 push-l7 pagination">
                <span className={this.props.models.previous === null ? 'disabled' : ''} onClick={this.props.changePage.bind(this, 'previous')}><i className="material-icons">chevron_left</i> Previous</span>
                <span className={this.props.models.next === null ? 'disabled' : ''} onClick={this.props.changePage.bind(this, 'next')}>Next <i className="material-icons">chevron_right</i></span>
            </div>
        );
    }
}

export default Pagination;