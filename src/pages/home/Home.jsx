import React from 'react'
import "./home.css"
import ProductContainer from '../product/ProductContainer'
import Footer from '../../component/footer/Footer'

const Home = () => {
  return (
    <div>
        <div>
            <ProductContainer/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home
