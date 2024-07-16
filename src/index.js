import React from 'react';
import ReactDOM from 'react-dom/client'; 

import './index.css'; //import css

const book1 = {
    author: "J. D. Vance",
    image:  "https://images-na.ssl-images-amazon.com/images/I/81ytGlIkLoL._AC_UL600_SR600,400_.jpg",
    title: "Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
    id: 1
}

const book2 = {
    author: "Rebecca Yarros",
    image:  "https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg",
    title: "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)",
    id: 2
}

const book3 = {
    author: "Amelia Hepworth",
    image:  "https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg",
    title: "I Love You to the Moon and Back",
    id: 3
}

const listOfBooks = [book1, book2, book3]

const eachBook = listOfBooks.map((book) => {

    return <Book {...book} key={book.id}/>
    
})

const BookList = () => {
  return (
    <section className='booklist'>

        <EventExample></EventExample>

        {eachBook}

        <Book title={book1.title} image={book1.image} author={book1.author}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorum qui sequi excepturi voluptatem corporis. Dolore, deleniti beatae quaerat ab excepturi architecto pariatur repellendus. Odio explicabo accusantium velit nesciunt autem.</p>
            <button>Click Here</button>
        </Book>

    </section>
  )
}

export const EventExample = () => {
  return (
    <section>
        <form>
            <h2>Typical Form</h2>
            <input type='text' name='example' style={{margin: '1rem 0'}}/>
        </form>
    </section>
  )
}

function Book(props) {
    const {image, title, author, children} = props
  return (
    <article className='book'>
        <img src={image} alt={title}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
