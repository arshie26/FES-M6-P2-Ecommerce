import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <select id="filter" defaultValue="DEFAULT" onChange={(event) => props.filterBooks(event.target.value)}>
                <option value="DEFAULT" disabled>Sort</option>
                <option value="LOW_TO_HIGH">Price, Low to High</option>
                <option value="HIGH_TO_LOW">Price, High to Low</option>
                <option value="RATING">Rating</option>
            </select>
        </div>
    )
}

export default Filter