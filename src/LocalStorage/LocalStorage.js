export const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

export const saveBooks = book => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === book);
    if(!exists){
        storedBooks.push(book);
        localStorage.setItem('books', JSON.stringify(storedBooks))
    }
}


export const getWishlistBooks = () => {   
    const storedBooks = localStorage.getItem('wishList');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

export const saveWishlistBooks = book => {
    const storedBooks = getWishlistBooks(); 
    const exists = storedBooks.find(savedBook => savedBook.bookId === book.bookId); 
    if (!exists) {
        storedBooks.push(book);
        localStorage.setItem('wishList', JSON.stringify(storedBooks));
    }
}
