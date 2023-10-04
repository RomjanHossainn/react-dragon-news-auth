import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RightSideNavbar from "../../ShareComponets/RightSideNavbar/RightSideNavbar";
import Header from "../../ShareComponets/Header/Header";
import { Link } from "react-router-dom";

const NewsDetails = () => {
    const [singleNews,setSingleNews] = useState({})
    const {newsDetailsId} = useParams();
    const allNewsData = useLoaderData();
    useEffect(() => {
        const singleNews = allNewsData.find(item => item._id === newsDetailsId)
        setSingleNews(singleNews)
    },[allNewsData,newsDetailsId])

    const {image_url,title,details,category_id} = singleNews || {};
    
    

    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-7 gap-5 ">
            <div className="md:col-span-4 lg:col-span-5">
                <h5 className="text-xl mb-3">Dragon News</h5>
                <div className="border rounded-lg p-4 space-y-3">
                    <img src={image_url} alt="" className="w-full object-cover" />
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p>{details}</p>
                    <Link to={`/categoryDetails/${category_id}`}><button className=" bg-red-500 text-white px-3 py-1 rounded-md mt-3">All news in this category</button></Link>
                </div>
            </div>
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
                <RightSideNavbar></RightSideNavbar>
            </div>
        </div>
        </div>
    );
};

export default NewsDetails;