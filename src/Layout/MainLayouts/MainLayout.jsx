import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="container mx-auto px-12">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;