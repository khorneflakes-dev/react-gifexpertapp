import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (

        <div className='main-container'>
            
            <h3 className='category' > {category} </h3>
            
            {loading && <p>Loading</p> }

            {
                data.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }

        </div>
    )
}

export default GifGrid;