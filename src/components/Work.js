import React from 'react'
import WorkItem from './WorkItem';
import Data from '../data/portfolio.json';

function WorkItems(props) {
    const items = props.items;
    // console.log('items from work component', items);
    return items.map(item => <WorkItem key={item.id} item={item} />);
}

export const Work = () => {
    return (
        <section className="work">
            <h1 className="work__title title text-center">Work</h1>
            <div className="work_item-focus">
                
            </div>
            <div className="work__items">
                <div className="row">
                    <WorkItems items={Data} />
                </div>
            </div>
        </section>
    )
}
