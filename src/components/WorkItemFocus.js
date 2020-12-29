import React, { Component } from 'react';

export default class WorkItemFocus extends Component {

    handleClear = () => {
        this.props.clear();
    }

    render() {
        if (this.props.activeItemId === '') {
            return (
                <div>
                    <p>Please select an item below to view more details.</p>
                </div>
            )
        } else {
            const { name, description, tags } = this.props.activeItem;
            return (
                <div className="text-center">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="work-item-focus__clear">
                        <button className="clear" onClick={this.handleClear}>Clear</button>
                    </div>
                </div>
            )
        }
    }
}
