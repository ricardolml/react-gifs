import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () =>{
    //     // const aux= [...categories , 'Full Mental'];
    //     // setCategories(aux);
    //     setCategories( cate => {
    //         return [ ...cate , 'Full Metal' ];
    //     });
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
