import React from 'react'

function Footer() {
  return (
    <div className='border-top py-4'>
        <div className='row'>
            <div className='col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-center'>
                <a href='/#' className='d-flex justify-content-center text-decoration-none'>Home</a>
                <a href='/#' className='d-flex justify-content-center text-decoration-none'>Products</a>
                <a href='/#' className='d-flex justify-content-center text-decoration-none'>About Us</a>
                <a href='/#' className='d-flex justify-content-center text-decoration-none'>Contact</a>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='d-flex justify-content-center'>© 2022 The Shop® Inc.</div>
            </div>
            <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='d-flex justify-content-center'>THE SHOP, INC.</div>
                <div className='d-flex justify-content-center text-align-center'>Enter your social media for Shop updates.</div>
                <div className='d-flex justify-content-evenly'>
                    <div className='fs-4'>
                        <i className="fa fa-facebook"></i>
                    </div>
                    <div className='fs-4'>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div className='fs-4'>
                        <i className="fa fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer