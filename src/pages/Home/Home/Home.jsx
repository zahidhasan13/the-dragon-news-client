import LeftBar from "../../../shared/LeftBar";
import RightBar from "../../../shared/RightBar";

const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-4 mt-4">
           <div className="col-span-1">
            <LeftBar></LeftBar>
           </div>
           <div className="col-span-2">Home Coming............</div>
           <div className="col-span-1">
            <RightBar></RightBar>
           </div>
        </div>
    );
};

export default Home;