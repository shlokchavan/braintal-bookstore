import React from 'react'
import Book from './Book/Book'
import './BookList.css'

// Setup Vars
const books = [
    {
        title: 'Rich Dad, Poor Dad',
        author: 'Robert Kiyoski',
        img: 'https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg',
        link: 'https://www.amazon.in/Rich-Dad-Poor-Middle-Updates/dp/1612680194/ref=sr_1_3?dchild=1&keywords=Rich+Dad+Poor+Dad&qid=1614088290&s=books&sr=1-3'
    },
    {
        title: 'Our Class is a Family',
        author: 'Shannon Olsen',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL.jpg',
        link: 'https://www.amazon.in/Our-Class-Family-Shannon-Olsen-ebook/dp/B0893ZCG22/ref=sr_1_1?crid=1PMF2RO1YDPJ6&dchild=1&keywords=our+class+is+a+family&qid=1614088310&s=books&sprefix=Our+Class+is+a+Family%2Cstripbooks%2C266&sr=1-1'
    },
    {
        title: 'The Four Winds',
        author: 'Kristin Hannah',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51r9ZiBU6rL._AC_SX184_.jpg',
        link: 'https://www.amazon.in/Four-Winds-Kristin-Hannah/dp/1529054575/ref=sr_1_1?dchild=1&keywords=The+Four+Winds&qid=1614088335&s=books&sr=1-1'
    },
    {
        title: 'Ikigai',
        author: 'Francesc Miralles',
        img: 'https://m.media-amazon.com/images/I/51T8OXMiB5L._SY346_.jpg',
        link: 'https://www.amazon.in/Ikigai-H%C3%A9ctor-Garc%C3%ADa/dp/178633089X/ref=sr_1_2?dchild=1&keywords=Ikigai&qid=1614088352&s=books&sr=1-2'
    },
]
const BookList = () => {
    return (
        <section className='booklist'>
            {
                books.map(({ title, img, author, link }) => (
                    <Book
                        key={title}
                        img={img}
                        title={title}
                        author={author}
                        link={link}
                    />
                ))
            }

        </section>
    );
}

export default BookList
