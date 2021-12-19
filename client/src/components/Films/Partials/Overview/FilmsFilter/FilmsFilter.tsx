import React, { useState } from 'react'
import'./FilmsFilter.scss'
import SelectTag from'../SelectTag/SelectTag'

FilmsFilter.propTypes = {
    
};

function FilmsFilter(props: any) {

    const [filterCountry] = useState(['Country','Vietnam', 'Thailand', 'USA', 'China', 'Korea'])
    const [filterYear] = useState(['Year','2015', '2016', '2017', '2018', '2019', '2020', '2021'])
    const [filterCategories] = useState(['Categories', 'Horror', 'Comedy', 'Romance', 'Action', 'Drama', 'Adventure', 'Cartoon'])
    const [filterSort] = useState(['Sort', 'Date', 'Alphabet', 'View', 'Purchases'])
    const [filterTime] = useState(['Time', ' < 90m', ' >= 90m', ' < 180m', ' >= 180m'])


    return (
        <div className='films-filter'>
            <div className='select-filter'>
                <SelectTag option_select={filterCountry} default_value={filterCountry[0]}/>
                <SelectTag option_select={filterYear} default_value={filterYear[0]}/>
                <SelectTag option_select={filterCategories} default_value={filterCategories[0]}/>
                <SelectTag option_select={filterSort} default_value={filterSort[0]}/>
                <SelectTag option_select={filterTime} default_value={filterTime[0]}/>
            </div>
            <button>Search</button>
        </div>
    )
}

export default FilmsFilter