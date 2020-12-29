import React, { Component } from 'react'

export default class WorkItem extends Component {
    
    handleClick = () => {
        this.props.viewItem(this.props.item.id);
    }

    render() {

        const { name } = this.props.item;

        return (
            <div className="col-4">
                <div className="work__item">
                    {name}
                    <button onClick={this.handleClick}>Read more</button>
                </div>
            </div>
        )
    }
}





