import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGildItem from './GifGildItem';
// import PropTypes from 'prop-types'

const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs( category ); 
    
    return (
        <>
            <h3>{category}</h3>

            { loading && <p className='animate__animated animate__flash' >Cargando...</p> }
            <div className='card-grid'>
                {
                    images.map( (img) => (
                        <GifGildItem {...img } key={img.id} />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid
