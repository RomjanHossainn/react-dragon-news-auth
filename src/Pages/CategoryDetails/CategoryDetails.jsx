
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryAllDetails from "../../components/CategoryAllDetails/CategoryAllDetails";

const CategoryDetails = () => {
    const [categoryData,setCategoryData] = useState([])
    const {categoryId} = useParams()
    const allCategoryesData = useLoaderData();

    useEffect(() => {
            const filterCateGory = allCategoryesData.filter(item => item.category_id === categoryId)
            setCategoryData(filterCateGory)
        
    },[categoryId,allCategoryesData])

    
    
    return (
        <div>
            {
              categoryId && categoryId !== '0' ? categoryData.map((category => <CategoryAllDetails key={category._id} category = {category}/> )):allCategoryesData.map((category => <CategoryAllDetails key={category._id} category = {category}/> )) 
            }
        </div>
    );
};

export default CategoryDetails;