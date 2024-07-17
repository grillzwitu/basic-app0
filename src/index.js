import React from 'react';
import ReactDOM from 'react-dom/client'; 

import './index.css'; //import css

import listOfBooks from "./books";

const getBook = (id) => {
  const book = listOfBooks.find((book) => book.id === id)

  console.log(book)
}

console.log(typeof(listOfBooks))

const booksArray = Object.values(listOfBooks)

console.log(booksArray)

const eachBook = booksArray.map((book) => {

    return <Book {...book} key={book.id} getBook={getBook}/>
    
})

const BookList = () => {

  
  return (
    <section className='booklist'>

        <EventExample></EventExample>

        {eachBook}  

        {/* <Book title={listOfBooks.book1.title} image={listOfBooks.book1.image} author={listOfBooks.book1.author} id={listOfBooks.book1.id}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorum qui sequi excepturi voluptatem corporis. Dolore, deleniti beatae quaerat ab excepturi architecto pariatur repellendus. Odio explicabo accusantium velit nesciunt autem.</p>
            <button>Click Here</button>
        </Book> */}

    </section>
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

function Book(props) {
    const {image, title, author, id, children} = props
    //console.log(props)

    const getABook = () => getBook(id)
  return (
    <article className='book'>
        <img src={image} alt={title} onMouseEnter={getABook}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);

