import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './category.css'
import LeftBottomContent from "./LeftBottomContent";
import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
const LeftSideNavbar = () => {
    const [caterogyes,setCategoryes] = useState([]);
    useEffect(() => {
        fetch('/public/categories.json')
        .then(res => res.json())
        .then(data => setCategoryes (data))
        .catch(erorr => console.log(erorr) )
    },[])
    return (
        <div>
            <h2 className="text-3xl">All Caterogy</h2>
            <div className="p-5 space-y-3 text-lg font-semibold">
                {
                   caterogyes?.map((category) => <NavLink to ={`/categoryDetails/${category.id}`} className="block text-[#9F9F9F]  px-2 py-2 category-link focus:text-black" key={category.id}>{category.name}</NavLink> ) 
                }
            </div>
            <div>
                <LeftBottomContent img = {image1}></LeftBottomContent>
                <LeftBottomContent img = {image2}></LeftBottomContent>
                <LeftBottomContent img = {image3}></LeftBottomContent>
            </div>
        </div>
    );
};

export default LeftSideNavbar;