import React, { Component } from 'react'

export default class WorkItem extends Component {
    render() {
        const { name } = this.props.item;

        return (
            <div className="col-4">
                <div className="work__item">
                    {name}
                </div>
            </div>
        )
    }
}





