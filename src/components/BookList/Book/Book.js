import React from 'react'
import './Book.css'
const Book = ({ img, title, author, link }) => {
    // Destructuring
    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={link} target="_blank">
            <article className='book'>
                <img src={img} alt={title} />
                <h1>{title}</h1>
                <h4>{author}</h4>
            </article>
        </a>
    )
}
export default Book
