import React, { Component } from 'react';
import Card from '../card/card';
import Modal from '../modal/modal';
import './modelList.css';

class ModelList extends Component {
    constructor() {
        super();
        this.state = {
            selectedModel: {},
            isModalOpen: false,
        };
    }
    openModelModal(model) {
        this.setState({
            selectedModel: model,
            isModalOpen: true,
        });
    }
    closeModelModal() {
        this.setState({
            selectedModel: {},
            isModalOpen: false
        });
    }
    render() {
        const { selectedModel, isModalOpen } = this.state;
        return (
            this.props.models.length > 0 && this.props.isLoaded
                ? (
                    <div className="gallery">
                        <div className="card-list row">
                            {this.props.models.map(result => (
                                <Card key={result.uid} model={result} showModelDetails={ this.openModelModal.bind(this) }></Card>
                            ))}
                        </div>
                        <Modal open={isModalOpen} close={this.closeModelModal.bind(this)} model={selectedModel}></Modal>
                    </div>
                )
                : !this.props.isLoaded
                    ? (<div className="loading">Loading...</div>)
                    : (<div className="placeholder">The search didn't returned any model.</div>)
        );
    }
}

export default ModelList;