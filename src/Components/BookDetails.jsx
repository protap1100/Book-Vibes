import { useLoaderData, useParams } from "react-router-dom";
import {saveBooks,getStoredBooks, getWishlistBooks, saveWishlistBooks} from '../LocalStorage/LocalStorage';
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
        const storedBooks = getStoredBooks();
        const isBookAlreadyAdded = storedBooks.find(savedBook => savedBook.bookId === book.bookId);
        if (isBookAlreadyAdded) {
            toast.error("You Have Already Readed This Books");
        } else {
            saveBooks(book);
            toast.success('You Have Added This Book To Your Readed Book List Successfully');
        }
    }

    const handleWishListBooks = () => {
        const storedBooks = getWishlistBooks();
        const isBookAlreadyAdded = storedBooks.find(savedBook => savedBook.bookId === book.bookId);
        const storedBooks2 = getStoredBooks();
        const isBookAlreadyAdded2 = storedBooks2.find(savedBook => savedBook.bookId === book.bookId);

        if(isBookAlreadyAdded2){
                 toast.warn('You Already Readed This Book Can t Add this to Wishlist ')
        }else{
            if (isBookAlreadyAdded) {
                toast.error("This Book Already Exist in Your Wishlist");
            } else {
                saveWishlistBooks(book);
                toast.success('You Have Added This Book To Your Wishlist Successfully');
            }
        }
 
    }
    


    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
           <div className="bg-gray-200 rounded-3xl px-5 lg:px-0 flex items-center justify-center">
                <img className="w-1/2 rounded-2xl  h-full" src={image} alt="" />
            </div>
            <div className="px-5 lg:px-0">
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
                    <button className="btn font-extrabold border-2 border-gray-400" onClick={handleAddBooks}>Read</button>
                    <button className="btn bg-[#50B1C9] font-bold text-white" onClick={handleWishListBooks}  >Wishlist</button>
                </div>
            </div> 
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;
