import React, { Component } from 'react'
import WorkItem from './WorkItem';
import WorkItemFocus from "./WorkItemFocus";
import Data from '../data/portfolio.json';

function WorkItems(props) {
    const items = props.items;
    // console.log('items from work component', items);
    return items.map(item => <WorkItem key={item.id} item={item} viewItem={props.viewItem} />);
}

function getWorkItem(id) {
    return Data.find(item => item.id === id);
}

export class Work extends Component {
    constructor() {
        super();
        this.state = {
            activeItemId: '',
            activeItem: {},
        }
    }

    viewItem = (id) => {
        this.setState({activeItemId: id});
        this.setState({activeItem: getWorkItem(id)});
    }

    clear = () => {
        this.setState({activeItemId: ''});
        this.setState({activeItem: {}});
    }

    render() {
        return (
            <section className="work">
                <h1 className="work__title title text-center">Work</h1>
                <div className="work_item-focus">
                    <WorkItemFocus activeItemId={this.state.activeItemId} activeItem={this.state.activeItem} clear={this.clear} />
                </div>
                <div className="work__items">
                    <div className="row">
                        <WorkItems items={Data} viewItem={this.viewItem} />
                    </div>
                </div>
            </section>
        )
    }
}

export default Work;
