import React from 'react'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="card bg-dark text-white border-0">
                <img src="assets/bg.jpg" className="card-img" alt="background" height='550px'/>
                    <div className="card-img-overlay  d-flex flex-column justify-content-center">
                        <div className='container'>
                            <h5 className="card-title fw-bold display-3 mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TREND</p>
                        </div>
                    </div>
            </div>
            <Product />
        </div>
    )
}

export default Home