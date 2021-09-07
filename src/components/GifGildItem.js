import React from 'react'
// import PropTypes from 'prop-types'

function GifGildItem( {id , title , url}) {
    return (
        <div className='card animate__animated animate__fadeIn'>
           <img src={ url } alt={title} />
           <p>{title}</p>
           
        </div>
    )
}

GifGildItem.propTypes = {

}

export default GifGildItem

