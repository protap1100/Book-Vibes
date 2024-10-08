import { useEffect, useState } from "react";
import { getWishlistBooks } from "../LocalStorage/LocalStorage";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
const WishList = () => {

    const [wishListBooks, setWishListBooks] = useState([]);

    // const [books,settingBooks] = useState([]);

    useEffect(() =>{
        const storedBooksId = getWishlistBooks();
        // console.log(storedBooksId)
        setWishListBooks(storedBooksId)
    }, []);

    // console.log(wishListBooks);

    return (
        <div className="mt-5 flex flex-col gap-10">
           {
            wishListBooks.map((showBooks,index)=> 
                <div className="flex flex-col lg:flex-row gap-10 border p-5 bg-green-50 border-gray-500 rounded-xl" key={index}>
                    <div className="flex-grow-0 bg-gray-200 rounded-2xl p-5">
                        <img className="w-40 h-52" src={showBooks.image} alt="" />
                    </div>
                    <div className="flex-grow-1">
                        <h1 className="text-3xl font-bold ">{showBooks.bookName} </h1>
                        <h1 className="mt-5 text-xl font-semibold">By : {showBooks.author} </h1>
                        <div className="mt-5 gap-10 flex flex-col lg:flex-row">
                            <h1 className="font-bold">Tags:</h1>
                            {
                                showBooks.tags.map((tag,index) => <h1 key={index} className="font-bold text-green-600">#{tag}</h1>)
                            }
                            <h1 className="text-2xl"><IoLocationOutline /></h1>
                            <h1 className="">Year Of Publishing : {showBooks.yearOfPublishing}</h1>
                        </div>
                        <div className="flex mt-5 gap-5">
                            <div className="flex gap-3 items-center">
                                <h1 className="text-2xl"> <FaUserFriends /></h1>
                                <h1>Publisher : {showBooks.publisher}</h1>
                            </div>
                            <div className="flex gap-3 items-center">
                                <h1 className="text-2xl"> <FaBookOpen /></h1>
                                <h1> Pages : {showBooks.totalPages} </h1>
                            </div>
                        </div>
                        <div className="my-5 border border-gray-500 "></div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <button className="btn bg-blue-200 text-blue-600 rounded-3xl">Category: {showBooks.categories}</button>
                            <button className="btn bg-orange-100 text-orange-500 rounded-3xl">Rating: {showBooks.rating}</button>
                            <button className="btn bg-[#23BE0A] text-white rounded-3xl">View Details</button>
                        </div>
                    </div>
                </div>
             )
           }
        </div>
    );
};

export default WishList;