import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { addCart } from '../redux/cartSlice'

function Item() {
    const {id} = useParams()
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const getItem = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`); 
            setItem(await res.json());
            setLoading(false);
        }
        getItem();
    },[id])
    const Loading = () => {
        return (
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-12 col-lg-6'>
                        <Skeleton  height='500px' width='100%'/>
                    </div>
                    <div className='col-md-12 col-lg-6'>
                        <Skeleton  height='500px' width='100%'/>
                    </div>
                </div>
            </div>
        )
    }
    const ShowItem = () => {
        // const navigate = useNavigate();
        const handerSubmit = (e) => {
            const action = addCart(e)
            dispatch(action);
            // navigate('/');
            toast.success("Successfull!")
        }
        return (
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-12 col-lg-6'>
                        <img src={item.image} height='100%' width='100%' alt='picture1'/>
                    </div>
                    <div className='col-md-12 col-lg-6'>
                        <h4 className='text-uppercase'>{item.category}</h4>
                        <h1 className='display-5'>{item.title}</h1>
                        <p className='fw-bold'>Rating {item.rating && item.rating.rate}
                            <i className='fa fa-star'></i>
                        </p>
                        <p className='display-6 fw-bold my-3'>
                            ${item.price}
                        </p>
                        <p className=''>{item.description}</p>
                        <div className='buttons d-flex flex-column col-sm-4'>
                            <button onClick={() =>handerSubmit(item)} className='btn btn-outline-dark my-2'>Add To Cart</button>
                            <Link to={'/cart'} className='btn btn-outline-primary my-2'>Go To Cart</Link>
                            <Link to={'/'} className='btn btn-outline-success my-2'>Go To Home</Link>
                        </div>
                    </div>
                </div>
                <ToastContainer 
                    position='top-center'
                    color='success'/>
            </div>
        )
    }
  return (
    <div>
        {loading ? <Loading /> : <ShowItem />}
    </div>
  )
}

export default Item