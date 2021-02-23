import React from 'react'
import BookList from '../../components/BookList/BookList'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Home = () => {
    return (
        <>
            {/* Header  */}
            <Header />
            {/* BookList */}
            <BookList />
            {/* Footer */}
            <Footer />
        </>
    )
}

export default Home
