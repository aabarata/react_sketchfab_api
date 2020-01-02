import React, { Component } from 'react';
import { getBiggerThumbnailUrl } from '../../helpers/tools';
import noImage from './no_image.jpg';
import './card.css';

class Card extends Component {
    addDefaultImage(event) {
        event.target.src = noImage;
    }
    render() {
        const image = getBiggerThumbnailUrl(this.props.model.thumbnails);
        return (
            <div className="col s12 m4 l3">
                <div className="card">
                    <div className="card-image">
                        <img
                            onError={ this.addDefaultImage }
                            src={image ? image : noImage}
                            alt="Model print"></img>
                        <span className="card-title">{this.props.model.name}</span>
                    </div>
                    <div className="card-content">
                        <p>{this.props.model.description}</p>
                    </div>
                    <div className="card-action" onClick={this.props.showModelDetails.bind(this, this.props.model)}>
                        See more
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;