import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { getStoredBooks } from "../LocalStorage/LocalStorage";

const ListedBook = () => {
    const [tab,setTab] = useState(0);
    const [displayBooks, setDisplayBooks] =useState([]);

    useEffect(() =>{
        const storedBooksId = getStoredBooks();
        setDisplayBooks(storedBooksId)
    }, []);

    const handleSortBook = (filter) => {
        if(filter === "All"){
            setDisplayBooks(displayBooks)
        }else if (filter === "Rating"){
            const sorting = displayBooks.sort((a, b) => b.rating - a.rating);
            setDisplayBooks(sorting)
        }else if (filter === "Pages"){
            const sorting = displayBooks.sort((a, b) => b.totalPages - a.totalPages);
            setDisplayBooks(sorting)
        }else if (filter === "Year"){
            const sorting = displayBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            console.log(sorting);
        }

        setDisplayBooks()
    }

    return (
        <div>
            <div className="bg-gray-300 text-center py-10 rounded-xl">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            <div className="py-10 text-center">
                <details className="dropdown">
                <summary className="m-1 btn font-medium px-5 hover:bg-blue-300 bg-[#23BE0A] text-white">Sort By <span> <IoIosArrowDown/> </span>  </summary>
                <ul className="p-5 shadow menu dropdown-content items-center bg-base-100 rounded-box">
                    <li onClick={() => handleSortBook('All')}><a>All</a></li>
                    <li onClick={() => handleSortBook('Rating')}><a>Rating</a></li>
                    <li onClick={() => handleSortBook('Pages')} ><a>Pages</a></li>
                    <li onClick={() => handleSortBook('Year')}><a>Year</a></li>
                </ul>
                </details>
            </div>
           <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap border-b border-black">
                <Link to='' onClick={() => setTab(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b ${tab=== 0 ? "border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900" : "" }`}>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link> 
                <Link
                 to='wishList'
                  onClick={() => setTab(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab=== 1 ? "border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900" : "" } `}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                    <span>Wished List</span>
                </Link>
            </div>
            <Outlet>

            </Outlet>
        </div>
    );
};

export default ListedBook;