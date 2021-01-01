import React, { Component } from 'react';

export default class WorkItemFocus extends Component {

    handleClear = () => {
        this.props.clear();
    }

    render() {
        if (this.props.activeItemId === '') {
            return (
                <div className="text-center">
                    <p>Please select an item below to view more details.</p>
                </div>
            )
        } else {
            const { name, description, tags, img_code, web_link, github_link } = this.props.activeItem;
            return (
                <div className="work-item-focus">
                    <div className="row">
                        <div className="col col-4">
                            <img 
                                src={require(`../assets/img/${img_code}`).default}
                                alt={name}
                            />
                        </div>
                        <div className="col col-8">
                            <h1 className="work-item-focus__title">{name}</h1>
                            <h2 className="work-item-focus__subtitle">Project Description:</h2>
                            <div className="work-item-focus__description" dangerouslySetInnerHTML={{__html: description}} />
                            <p className="work-item-focus__technologies-title">Technologies used:</p>
                            <div className="work-item-focus__tags">
                                {tags}
                            </div>
                            <div className="work-item-focus__links">
                                { github_link &&
                                    <a href={github_link} className="work-item-focus__link text-link" target="_blank" rel="noreferrer">
                                        View on Github
                                    </a>
                                }
                                { web_link &&
                                    <a href={web_link} className="work-item-focus__link text-link" target="_blank" rel="noreferrer">
                                        View in browser
                                    </a>
                                }
                            </div>
                            <div className="work-item-focus__clear">
                                <button className="work-item-focus__clear btn" onClick={this.handleClear}>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
