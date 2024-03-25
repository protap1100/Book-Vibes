import { useLoaderData } from "react-router-dom";
import Book from "./Book";
import { useState } from "react";

const Books = () => {

    const books = useLoaderData();

    const [showBook, setShowBook] = useState(6);


    // console.log(books)

    return (
        <div> 
            <h1 className="text-4xl font-bold text-center">Books</h1>
            
            <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1">
                {
                    books.slice(0,showBook).map(book=> <Book key={book.bookId} book={book} ></Book>)
                }
            </div>
            <div className={`mt-10 text-center ${showBook === books.length && 'hidden'} `}>
                <button onClick={() => {setShowBook(books.length)}} className="btn bg-[#23BE0A] text-white hover:bg-blue-400" >See All Books</button>
            </div>
            

        </div>
    );
};

export default Books;