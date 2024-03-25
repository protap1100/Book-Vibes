import { useLoaderData, useParams } from "react-router-dom";
import {saveBooks} from '../LocalStorage/LocalStorage';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const singleBook = useLoaderData();
    const {id} = useParams();
    // console.log(id)
    // console.log(singleBook)  
    const book = singleBook.find(book => book.bookId === parseInt(id)); 
    // console.log(book)
    const idInt = parseInt(id);
    console.log(idInt);
    const {image,bookName,categories, tags,totalPages,publisher,yearOfPublishing,rating,author,review} = book;

    const handleAddBooks = () =>{
        saveBooks(idInt);
        toast('You Have Added Book Successfully');
    }

    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
           <div className="bg-gray-200 rounded-3xl flex items-center justify-center">
                <img className="w-1/2  h-full" src={image} alt="" />
            </div>
            <div>
                <h1 className="text-4xl  font-extrabold" > {bookName}</h1>
                <h1 className="text-2xl mt-5"> By,{author ? author : "Not Found"}</h1>
                <div className="border my-5 border-gray-500"></div>
                <h1 className="text-2xl"> {categories ? categories : "Not Found"} </h1>
                <div className="border my-5 border-gray-500"></div>
                <h1> <span className="font-bold">Review:</span>{review} </h1>
                <div className="flex gap-3 mt-5">
                    <h1 className="font-bold ">Tag</h1>
                    {
                        tags.map((tag,index) => 
                            <a href="#" key={index} className="text-green-600 font-bold">#{tag}</a>
                        )
                    }
                </div>
                <div className="border my-5 border-gray-500"></div>
                <div>
                    <table>
                       <tbody>
                       <tr>
                            <td className="font-light text-xl">Number Of Pages:</td>
                            <td className="font-bold text-xl pl-10">{totalPages}</td>
                        </tr>
                        <tr>
                            <td className="font-light text-xl">Publisher:</td>
                            <td  className="font-bold text-xl pl-10">{publisher}</td>
                        </tr>
                        <tr>
                            <td className="font-light text-xl">Year Of Publishing:</td>
                            <td  className="font-bold text-xl pl-10">{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className="font-light text-xl">Rating:</td>
                            <td  className="font-bold text-xl pl-10">{rating}</td>
                        </tr>
                       </tbody>
                    </table>
                </div>
                <div className="mt-10 flex gap-5">
                    <button className="btn font-extrabold border-2 border-gray-400" >Read</button>
                    <button className="btn bg-[#50B1C9] font-bold text-white" onClick={handleAddBooks} >Wishlist</button>
                </div>
            </div> 
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;
