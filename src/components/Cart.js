import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, deleteCart, minusCart } from '../redux/cartSlice';

function Cart() {
  const itemCart = useSelector(state => state.items)
  const dispatch = useDispatch();
  const handerDelete = (e) => {
    const action = deleteCart(e);
    dispatch(action);
  }
  const handerIncre = (e) => {
    const action = addCart(e)
    dispatch(action)
  }
  const handerMinus = (e) => {
    const action = minusCart(e)
    dispatch(action)
  }
  return (
    <div className='container my-5'>
        {itemCart.length === 0 ? <h1>Your cart is empty</h1> : itemCart.map( (item, index) => (
          <div className='row' key={index}>
            <div className='col-sm-12 col-md-6'>
              <img src={item.image} width='100%' alt='picture1'/>
            </div>
            <div className='col-sm-12 col-md-6 d-flex flex-column justify-content-center'>
              <h3 className='mb-5'>{item.title}</h3>
              <h3>{item.qty} X ${item.price} = ${item.qty * item.price}</h3>
              <div className='buttons my-3'>
                <button className={`btn btn-outline-dark ${item.qty === 1 && 'disabled'}`}
                        onClick={() => handerMinus(item)}>
                          <i className="fa fa-minus"></i>
                        </button>
                <button className='btn btn-outline-dark ms-3'
                        onClick={() =>  handerIncre(item)}>
                          <i className="fa fa-plus"></i>
                        </button>
                <button className='btn btn-danger ms-3' onClick={() => handerDelete(index)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>

            </div>
          </div>
        )
        )}
    </div>
  )
}

export default Cart