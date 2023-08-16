import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import logo from "../assets/logo.png";
import Navbar from "../components/NavBar/Navbar";

const Header = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto text-center">
        <img src={logo} alt="" className="inline-block" />
        <p className="text-gray-600 font-medium">
          Journalism without fear or favour
        </p>
        <p className="text-2xl mt-4">{moment().format("dddd, MMMM D, YYYY")}</p>
        <div className="bg-gray-500 px-2 py-1 flex text-white my-6">
          <button className="bg-red-500 px-6 text-white">Latest</button>
          <Marquee>
            I can be a React component, multiple React components, or just some
            text....  I can be a React component, multiple React components, or just some
            text....  I can be a React component, multiple React components, or just some
            text....
          </Marquee>
        </div>
        <Navbar/>
      </div>
    </>
  );
};

export default Header;
