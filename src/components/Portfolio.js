import React, { useEffect, useState } from 'react';
import Data from '../data/portfolio.json';
import WorkItem from './WorkItem';
import WorkItemFocus from './WorkItemFocus';

function Portfolio() {
    const [allFilters, setAllFilters] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);
    const [filteredPortfolio, setFilteredPortfolio] = useState(Data);
    const [viewItem, setViewItem] = useState(null);

    function updateFilters(item, e) {
        const itemIndex = activeFilters.indexOf(item);

        e.target.classList.toggle('active');

        if (itemIndex === -1) {
            return setActiveFilters([...activeFilters, item]);
        }

        const filterItem = activeFilters.filter(
            (filterItem) => filterItem !== item
        );

        return setActiveFilters(filterItem);
    }

    useEffect(() => {
        const filters = Data.reduce((acc, item) => {
            const tagsToArray = item.tags.split(',');
            tagsToArray.forEach((tag) => {
                acc.push(tag);
            });
            return [...new Set(acc)]; // removes duplicate values
        }, []);

        setAllFilters(filters);
    }, []);

    useEffect(() => {
        if (activeFilters.length) {
            const dataFiltered = Data.reduce((acc, item) => {
                activeFilters.forEach((filter) => {
                    if (item.tags.indexOf(filter) > -1) {
                        acc.push(item);
                    }
                });
                return [...new Set(acc)]; // removes duplicate values
            }, []);

            setFilteredPortfolio(dataFiltered);
        } else {
            setFilteredPortfolio(Data);
        }
    }, [activeFilters]);

    return (
        <section className='portfolio'>
            <h1 className='portfolio__title title text-center'>
                Software Developer
                <br />
                with Experience in:
            </h1>
            <div className='portfolio__filters'>
                <ul>
                    {allFilters.map((item, i) => (
                        <li key={i} onClick={(e) => updateFilters(item, e)}>
                            {item}
                        </li>
                    ))}
                    <li onClick={() => setActiveFilters([])}>Clear All</li>
                </ul>
            </div>
            <div className='portfolio__view-item'>
                {viewItem && (
                    <WorkItemFocus
                        item={viewItem}
                        handleClear={() => setViewItem(null)}
                    />
                )}
            </div>
            <div className='portfolio__items'>
                {filteredPortfolio.map((item) => (
                    <WorkItem
                        key={item.id}
                        item={item}
                        handleClick={() => setViewItem(item)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
