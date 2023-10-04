
import Header from "../../ShareComponets/Header/Header";
import HeaderMarquee from "../../ShareComponets/Header/HeaderMarquee";
import LeftSideNavbar from "../../ShareComponets/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../../ShareComponets/Navbar/Navbar";
import RightSideNavbar from "../../ShareComponets/RightSideNavbar/RightSideNavbar";
import CategoryDetails from "../CategoryDetails/CategoryDetails";

const Home = () => {

    return (
        <div>
            <Header></Header>
            <HeaderMarquee></HeaderMarquee>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 gap-5">
                <div className="">
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className=" lg:col-span-2">
                    <CategoryDetails></CategoryDetails>
                </div>
                <div className="">
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;