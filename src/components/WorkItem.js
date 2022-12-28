import React, { Component } from 'react';

export default class WorkItem extends Component {
    handleClick = () => {
        this.props.viewItem(this.props.item.id);
    };

    render() {
        const { name, desc } = this.props.item;

        return (
            <div className='col col-4'>
                <div className='work-item'>
                    <div className='work-item__desc-container'>
                        <h2 className='work-item__title'>{name}</h2>
                        <p className='work-item__desc'>{desc}</p>
                    </div>
                    <button
                        className='work-item__btn btn btn-accent'
                        onClick={this.handleClick}
                    >
                        Read more
                    </button>
                </div>
            </div>
        );
    }
}
