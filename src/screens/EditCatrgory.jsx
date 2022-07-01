import React from 'react'
import axios from "axios"
const EditCatrgory = () => {
    const edit = () =>{
        axios.post(`https://crud-backend-code.herokuapp.com/api/edit-category/}`)
    }
  return (
    <div className='container col-md-4 mx-auto mt-5'>
        <h1 className='text-center mt-5 mb-5'>Edit Category</h1>
        <label>category</label>
        <input className='mx-auto w-100' type="text"/>
        <button onClick={edit}>Edit Category</button>
    </div>
  )
}

export default EditCatrgory