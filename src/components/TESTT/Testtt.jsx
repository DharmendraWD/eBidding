import React, { useEffect } from 'react'
import { STATUS, fetchproducts } from '../../Redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'


function Testtt() {
    const dispatch = useDispatch();
    const {data:products, status} = useSelector(state => state.product)
    useEffect(() => {
        dispatch(fetchproducts())
    }, [])

    console.log(STATUS)
    console.log(products)
  return (
    <div>
      hellow
    </div>
  )
}

export default Testtt
