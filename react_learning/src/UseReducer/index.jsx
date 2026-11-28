import React,{useState, useReducer  } from 'react'
import {reducer} from './Reducer';


// books, modalText, ismodalOpen 
//add book - modal Text
// remove book - modal Text


const booksData = [
    {id:1, name:"Pather Panchal"},
    {id:2, name:"Padma Nodir Majhi"},
    {id:3, name:"Srikanta"},
];

const BookList = () => {


    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        modalText:"",
        isModalOpen: false
    });
    const [bookName, setBookName] = useState ("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {id: new Date().getTime().toString(), name:bookName};
        dispatch({type: "Add", payload: newBook})
        setBookName('');
    };

    const Modal = ({ modalText }) => {
        return <p>{modalText}</p>
    }

    const removeBook = (id) => {
        dispatch({type:"Remove", payload:id})
    }


  return (
    <>
        <h5>React Hooks | useReducer </h5>
        <div>
            <h3>Book List</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={bookName} onChange={(e)=> {setBookName(e.target.value)}} />
                <button type="submit">Submit</button>
            </form> 

            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
            
            {bookState.books.map((book) =>{
                const {id, name} = book;
                return <li 
                            key={id}>{name} 
                            <button onClick={()=>{removeBook(id)}}>Remove</button>
                        </li>
            })}
        </div>
        
      
    </>
  )
}

export default BookList;
