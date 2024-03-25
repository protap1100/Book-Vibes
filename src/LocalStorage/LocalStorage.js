const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}


const saveBooks = id => {
    const storedBooks = getStoredBooks();
    const exists = storedBooks.find(bookId => bookId === id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('books', JSON.stringify(storedBooks))
    }
}

export {getStoredBooks};
export {saveBooks};