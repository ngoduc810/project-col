import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const {user, logOut} = useUserAuth()
    const itemCart = useSelector(state => state.items)
    const handerLogOut =async () => {
        try {
            await logOut();
        }catch(err) {
            console.log(err.message)
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            {toggle &&  
            <div className='overlay'>
                <div className='buttons-responsive'>
                    <div className='d-flex justify-content-end p-2'>
                        <button className='btn btn-outline-light rounded-circle'
                                onClick={(e) => setToggle(!toggle)}
                        >X</button>
                    </div>
                    {user ? 
                    <div className='d-flex flex-column'>
                        <div className='logOut d-flex flex-column'>
                            <Link to={'/'} className='btn btn-outline-light ps-0'>
                                {user.photoURL ? <img src={user.photoURL} alt='background' className='mx-2 rounded-circle' width='30px' /> : <i className="fa fa-user mx-1"></i>}
                                {user && user.email.slice(0, user.email.indexOf('@'))}
                            </Link> 
                            <button className='btn-danger logOutItem' 
                                onClick={handerLogOut}
                            >Logout</button>
                        </div>
                        <Link to={'cart'} className='btn btn-outline-dark my-2' onClick={(e) => setToggle(!toggle)}>
                            <i className="fa fa-shopping-cart me-2"></i>Cart ({itemCart.length})
                        </Link>
                    </div>
                    :
                    <div className='d-flex flex-column'>
                        <Link to={'login'} className='btn btn-outline-dark my-2' onClick={(e) => setToggle(!toggle)}>
                            <i className="fa fa-sign-in me-2"></i>Login
                        </Link>
                        <Link to={'signup'} className='btn btn-outline-dark my-2' onClick={(e) => setToggle(!toggle)}>
                            <i className="fa fa-user-plus me-2"></i>Register
                        </Link>
                        <Link to={'cart'} className='btn btn-outline-dark my-2'>
                            <i className="fa fa-shopping-cart me-2"></i>Cart ({itemCart.length})
                        </Link>
                    </div>
                    }

                </div>
            </div>
            }
           
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation"
                        onClick={() => setToggle(!toggle)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>



            
                <Link to={'/'} className="navbar-brand fw-bold fs-4">Shop Colection</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/products"}>Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                <div className='buttons d-flex'>
                    {user ? 
                    <div className='logOut'>
                        <Link to={'/'} className='btn btn-outline-dark ps-0'>
                            {user.photoURL ? <img src={user.photoURL} alt='background' className='mx-2 rounded-circle' width='30px' /> : <i className="fa fa-user mx-1"></i>}
                            {user && user.email.slice(0, user.email.indexOf('@'))}
                        </Link> 
                        <button className='btn-dark logOutItem' 
                            onClick={handerLogOut}
                        >Logout</button>
                    </div>
                    :
                    <>
                    <Link to={'login'} className='btn btn-outline-dark'>
                        <i className="fa fa-sign-in me-2"></i>Login
                    </Link>
                    <Link to={'signup'} className='btn btn-outline-dark ms-2'>
                        <i className="fa fa-user-plus me-2"></i>Register
                    </Link>
                    </>
                    }
                    <Link to={'cart'} className='btn btn-outline-dark ms-2'>
                        <i className="fa fa-shopping-cart me-2"></i>Cart ({itemCart.length})
                    </Link>
                </div>
                </div>
            </div>
        </nav>)
}

export default Navbar