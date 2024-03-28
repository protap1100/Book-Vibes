import { Link } from 'react-router-dom';
import image from '../../src/assets/images/BannerBook.png'
 
const Banner = () => {
    return (
            <div className="hero py-32 bg-base-200 mt-5 rounded-3xl">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                    <div>
                        <img src={image} className=" rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex justify-center gap-10 items-start flex-col px-10 lg:px-32'>
                        <h1 className="text-2xl lg:text-6xl font-bold">Books to freshen up your bookshelf </h1>
                        <Link to="/listedBooks"> <button className="btn bg-[#23BE0A] text-white">View The List</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Banner;