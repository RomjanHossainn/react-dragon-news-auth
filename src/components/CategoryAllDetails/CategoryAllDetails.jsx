import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryAllDetails = ({category}) => {
    const [isSlice,setIsSlice] = useState(true);
    const {image_url,author,title,details,_id} = category || {}

    
    return (
        <Link to ={`/newsDetail/${_id}`}>

        <div className='mb-12 border p-3 rounded-lg'>
            <div className='flex gap-2 items-center mb-5'>
                <img src={author.img} className='w-10 rounded-full' alt="" />
                <h4>{author.name}</h4>
            </div>
            <h3 className='text-xl font-bold mb-5'>{title}</h3>
            <img src={image_url} />
            <p className='mt-5'>{isSlice ? details.slice(0,600) +'...' : details}</p>
            <button onClick={() => setIsSlice(!isSlice)} className=' text-orange-400 text-lg py-2'>Read More</button>
        </div>
        
        </Link>
    );
};

CategoryAllDetails.propTypes = {
    category:PropTypes.object,
}

export default CategoryAllDetails;