import listOfBooks from "./books";

export const getBook = (id) => {
    const book = listOfBooks.find((book) => book.id === id)
  
    console.log(book)
  }

export const Book = (props) => {
    const {image, title, author, id, number, children} = props
    //console.log(props)

    //parsing/using functions for events
    const getABook = () => getBook(id)

  return (
    <article className='book'>
        <img src={image} alt={title} onMouseEnter={getABook}/>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className="number">{`#${number + 1}`}</span>
        {children}
    </article>
  )
}

export const eachBook = listOfBooks.map((book, index) => {

    return <Book {...book} key={book.id} getBook={getBook} number={index}/>
    
})
