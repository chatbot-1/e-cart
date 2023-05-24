import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className="home section">
        <div className="home-container container">
            <h2 className='home-head'>Welcome to your personal market</h2>
            <section>
                <h3 className='home-title'>Products</h3>
                <Products/>
            </section>
        </div>
    </div>
  )
}

export default Home