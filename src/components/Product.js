import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const btns = [ 'All', "Women's Clothing", "Men's Clothing", "Jewelery", "Electronics"]

function Product() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(0)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await fetch('https://fakestoreapi.com/products');
            
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
        }
        getProduct()
    }, [])
    const Loading = () => {
        return (
           <div className='row'>
               <div className='col-md-3'>
                   <Skeleton height={350}/>
               </div>
               <div className='col-md-3'>
                   <Skeleton height={350}/>
               </div>
               <div className='col-md-3'>
                   <Skeleton height={350}/>
               </div>
               <div className='col-md-3'>
                   <Skeleton height={350}/>
               </div>
           </div>
        )
    }

    const filterProduct = (item, index) => {
        if(index === 0) {
            setFilter(data)
        }else {
            const updateProduct = data.filter((product) => product.category === item)
            setFilter(updateProduct)
        }
        setActive(index)
    }
    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center my-5 row'>
                    {btns.map( (btn, index) => (
                        <button key={index}
                                className={`btn btn-outline-dark ms-2 col-sm-2 ${active === index && 'active'}`}
                                onClick={() => filterProduct(btn.toLowerCase(), index)}
                        >{btn}</button>
                    ))}
                </div>
                {filter.map((product, index) => {
                    return (
                    <div className='col-md-3 col-sm-4 mb-4' key={index}>
                        <div className="card h-100 py-3 text-center">
                            <img src={product.image} className="card-img-top" alt={product.title} height='250px'/>
                            <div className="card-body">
                                <h5 className="card-title">{product.title.substring(0, 12)} ...</h5>
                                <p className="card-text fw-bold">${product.price}</p>
                                <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </>
        )
    }
    return (
        <div className='container py-5 my-5'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center shadow-sm'>
                    <h1>Latest Products</h1>
                </div>
            </div>
            <div className='row'>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Product