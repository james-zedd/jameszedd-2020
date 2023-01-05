import React from 'react';
import WorkItem from './WorkItem';
import Data from '../data/portfolio.json';

// function WorkItems(props) {
//     const items = props.items.sort((a, b) => b.id - a.id);

//     return items.map((item) => (
//         <WorkItem key={item.id} item={item} viewItem={props.viewItem} />
//     ));
// }

// function getWorkItem(id) {
//     return Data.find((item) => item.id === id);
// }

// export class Work extends Component {
//     constructor() {
//         super();
//         this.state = {
//             activeItemId: '',
//             activeItem: {},
//         };
//     }

//     viewItem = (id) => {
//         this.setState({
//             activeItemId: id,
//             activeItem: getWorkItem(id),
//         });
//     };

//     clear = () => {
//         this.setState({
//             activeItemId: '',
//             activeItem: {},
//         });
//     };

//     render() {
//         return (
//             <section className='work'>
//                 <h1 className='work__title title text-center'>Work</h1>
//                 <div className='work_item-focus'></div>
//                 <div className='work__items'>
//                     <div className='row'>
//                         <WorkItems items={Data} viewItem={this.viewItem} />
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

// export default Work;

export const Work = () => {
    const items = Data.sort((a, b) => b.id - a.id);
    console.log('data', items);

    return (
        <section className='work'>
            <h2 className='work__title section-title'>Projects</h2>
            <div className='work_item-focus'></div>
            <div className='work__items'>
                <div className='row'>
                    {items.map((item) => (
                        <WorkItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
