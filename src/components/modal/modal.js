import React, { Component } from 'react';
import { getFormattedDate } from '../../helpers/tools';
import M from "materialize-css";
import './modal.css';

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            instance: undefined
        };
    }
    componentDidMount() {
        const options = {
            onCloseEnd: () => {
                this.props.close();
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.8,
            dismissible: true,
        };
        M.Modal.init(this.Modal, options);
        this.setState({
            instance: M.Modal.getInstance(this.Modal)
        });
    }
    componentWillReceiveProps(nProps) {
        if (nProps.open) {
            this.state.instance.open();
        }
    }
    render() {
        const date = getFormattedDate(this.props.model.createdAt);
        return (
            <div>
                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="modal1"
                    className="modal"
                >
                    <div className="modal-content">
                        <h4>{this.props.model.name}</h4>
                        <iframe
                            src={this.props.model.embedUrl}
                            title={this.props.model.name + '3DModel'}
                            frameBorder="0"
                        />
                        <div className="model_info">
                            <p><label>Created at: </label>{date}</p>
                            <p><label>Created by: </label><a
                                href={this.props.model.user ? this.props.model.user.profileUrl : ''}
                                target="_blank"
                                rel="noopener noreferrer">
                                {this.props.model.user ? this.props.model.user.displayName : ''}
                            </a></p>
                            <p><label>Views: </label>{this.props.model.viewCount}</p>
                            <div className="model_tags">
                                {
                                    this.props.model.tags
                                        ? this.props.model.tags.map(tag => (
                                            <span key={tag.uri} className="new badge" data-badge-caption="">{tag.name}</span>
                                        ))
                                        : ''
                                }
                            </div>
                            <p>{this.props.model.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;