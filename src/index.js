import React from 'react';
import ReactDOM from 'react-dom/client'; 

import './index.css'; //import css

//import listOfBooks from "./books";

import { eachBook } from "./Book";

//console.log(typeof(listOfBooks))

//const booksArray = Object.values(listOfBooks)

//console.log(booksArray)



const BookList = () => {

  
  return (
    <React.Fragment>
      <h1>Best Seller Books</h1>
      
      <section className='booklist'>

        <EventExample></EventExample>

        {eachBook}  

        {/* <Book title={listOfBooks.book1.title} image={listOfBooks.book1.image} author={listOfBooks.book1.author} id={listOfBooks.book1.id}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorum qui sequi excepturi voluptatem corporis. Dolore, deleniti beatae quaerat ab excepturi architecto pariatur repellendus. Odio explicabo accusantium velit nesciunt autem.</p>
          <button>Click Here</button>
        </Book> */}

      </section>
    </React.Fragment>
    
  )
}

//event handling
const EventExample = () => {

  const handleInput = (e) => {
    //console.log(e.target)
    console.log("Input handled")
  }

  const handleClick = () => {
    //alert("Button clicked")
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }

  return (
    <section>
        <form onSubmit={handleFormSubmission}>

            <h2>Typical Form</h2>

            <input type='text' name='example' onChange={handleInput} style={{margin: '1rem 0'}}/>

            <button type='submit' onClick={handleClick}>Click Here to Submit</button>
        </form>

    </section>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);

