import { Outlet } from "react-router-dom";
import LeftBar from "../../../shared/LeftBar";
import RightBar from "../../../shared/RightBar";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-4 lg:gap-4 mt-4 flex flex-col">
           <div className="col-span-1 order-2 lg:order-1">
            <LeftBar></LeftBar>
           </div>
           <div className="col-span-2 order-1 lg:order-2">
            <Outlet/>
           </div>
           <div className="col-span-1 order-3">
            <RightBar></RightBar>
           </div>
        </div>
    );
};

export default Home;