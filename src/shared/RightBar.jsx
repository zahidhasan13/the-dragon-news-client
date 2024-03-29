import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import bg from '../assets/bg.png';
import qZone1 from '../assets/qZone1.png';
import qZone2 from '../assets/qZone2.png';
import qZone3 from '../assets/qZone3.png';
import { AuthContext } from '../context/AuthProvider';


const RightBar = () => {
    const {googleSignIn, githubSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn()
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("Google signed in");
        })
        .catch((err) => {
            toast.error("Google signed in failed");
        });
    }

    const handleGithubSignIn = (e) => {
        e.preventDefault();
        githubSignIn()
       .then((result) => {
            const user = result.user;
            toast.success("Github signed in");
        })
       .catch((err) => {
            toast.error("Github signed in failed");
        });
    }
    return (
        <div className='mx-4 lg:mx-0'>
            <div className='mb-8'>
            <h3 className='text-xl font-bold mb-4'>Login With</h3>
            <button onClick={handleGoogleSignIn} className='w-full flex justify-center items-center border-2 border-blue-500 rounded text-blue-500 py-1'><FaGoogle /><span className='ml-2 font-medium'>Login with Google</span></button>
            <button onClick={handleGithubSignIn} className='w-full flex justify-center items-center border-2 border-gray-500 rounded text-gray-500-500 py-1 mt-2'><FaGithub /><span className='ml-2 font-medium'>Login with Github</span></button>
            </div>
            <div>
            <h3 className='text-xl font-bold mb-4'>Find Us On</h3>
            <div className='border-2 border-gray-300 rounded'>
                <a href="#" className='block flex items-center px-8 py-4 text-blue-700 text-xl font-medium'><FaFacebook/><span className='ml-2 text-gray-600'>Facebook</span></a>
                <hr className='border-gray-300'/>
                <a href="#" className='block flex items-center px-8 py-4 text-blue-500 text-xl font-medium'><FaTwitter/><span className='ml-2 text-gray-600'>Twitter</span></a>
                <hr className='border-gray-300'/>
                <a href="#" className='block flex items-center px-8 py-4 text-red-500 text-xl font-medium'><FaInstagram/><span className='ml-2 text-gray-600'>Instagram</span></a>
            </div>
            </div>
            <div className='bg-gray-200 my-8 p-4'>
                <h3 className='text-2xl text-gray-700 font-bold mb-4'>Q-Zone</h3>
                <div className='space-y-8'>
                <img src={qZone1} alt="" className='w-full'/>
                <img src={qZone2} alt="" className='w-full'/>
                <img src={qZone3} alt="" className='w-full'/>
                </div>
            </div>
            <div>
                <div className='relative'>
                <img src={bg} alt="" className='w-full lg:h-auto h-[400px]'/>
                <div className='absolute top-0 left-0 text-white py-12 px-10 text-center'>
                    <h2 className='text-3xl font-extrabold leading-[50px]'>Create an Amazing Newspaper</h2>
                    <p className='text-xl my-8 leading-[30px]'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='bg-pink-600 p-4 text-2xl font-bold'>Learn More</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;