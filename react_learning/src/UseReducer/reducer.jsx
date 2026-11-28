export const reducer = (state, action) => {
    //action.type action.payload
    if (action.type === "Add"){
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book is added succesfully"
        };
    };
    if (action.type === "Remove"){
        const filterBooks = state.books.filter((book) => book.id !== action.payload);
        return {
            ...state,
            books: filterBooks,
            isModalOpen: true,
            modalText: "Book removed successfully"
        };
    }
    return state;
}


