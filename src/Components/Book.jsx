import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";

const Book = ({book}) => {

    // console.log(book);

    const {bookId,image,tags,author,bookName,rating} = book;
    // console.log(bookId)
    return (  
        <Link to={`/book/${bookId}`}  className='border border-gray-300 rounded-2xl '>
            <div className='p-5'>
                <div className='bg-gray-200 py-5 flex h-full rounded-2xl justify-center items-center'>
                    <img className='w-60 h-72 rounded-xl' src={image} alt="" />
                </div>
                <div className='mt-5 flex gap-10 '>
                   {
                      tags.map((tag,index) => <h1 key={index} className='text-green-600 font-bold text-xl  '> {tag}</h1>)  
                   } 
                </div>
                <div className='mt-5'>
                    <h1 className='text-2xl font-bold'> {bookName}</h1>
                    <h1 className='mt-2'>{author} </h1>
                </div>
                <div className='my-5 border border-dashed border-gray-600' >

                </div>
                <div className='mt-5 flex items-center justify-between'>
                    <h1 className='text-xl font-bold'>{rating}</h1>
                    <h1 className='text-xl font-bold'><FaRegStar></FaRegStar></h1>
                </div>
            </div>
        </Link>
    );
};

export default Book;