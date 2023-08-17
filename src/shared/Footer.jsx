import logo from '../assets/logo.png'
const Footer = () => {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 mt-4">
        <div className="mx-auto max-w-screen-xl text-center border-t-2 border-gray-300 pt-4">
            <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                <img src={logo} alt="" />    
            </a>
            <p className="my-6 text-gray-500 dark:text-gray-400">Journalism without fear or favour</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Carrer</a>
                </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">The Dragon News</a>. All Rights Reserved.</span>
        </div>
      </footer>
    );
};

export default Footer;