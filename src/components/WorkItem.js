import React from 'react';

const WorkItem = ({ item }) => {
    const { name, desc, web_link, github_link, technologies_used } = item;
    return (
        <div className='col col-4'>
            <div className='work-item'>
                <div className='work-item__desc-container'>
                    <h2 className='work-item__title'>{name}</h2>
                    <p className='work-item__desc'>{desc}</p>
                    <p className='work-item__tech'>
                        Technologies Used: {technologies_used}
                    </p>
                </div>
                <div className='work-item__links'>
                    {github_link && (
                        <a
                            className='work-item__link'
                            target='_blank'
                            href={github_link}
                        >
                            View on Github
                        </a>
                    )}
                    {web_link && (
                        <a
                            className='work-item__link ml-auto'
                            target='_blank'
                            href={web_link}
                        >
                            View in Browser
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkItem;

// export default class WorkItem extends Component {
//     handleClick = () => {
//         this.props.viewItem(this.props.item.id);
//     };

//     render() {
//         const { name, desc } = this.props.item;

//         return (
//             <div className='col col-4'>
//                 <div className='work-item'>
//                     <div className='work-item__desc-container'>
//                         <h2 className='work-item__title'>{name}</h2>
//                         <p className='work-item__desc'>{desc}</p>
//                     </div>
//                     <button
//                         className='work-item__btn btn btn-accent'
//                         onClick={this.handleClick}
//                     >
//                         Read more
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }

// export const WorkItem = ({ item }) => {
//     const { name, desc, web_link, github_link, technologies_used } = item;
//     return (
//         <div className='col col-4'>
//             <div className='work-item'>
//                 <div className='work-item__desc-container'>
//                     <h2 className='work-item__title'>{name}</h2>
//                     <p className='work-item__desc'>{desc}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
