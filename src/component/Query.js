import React , { useState }from 'react'
import Axios from 'axios'
function Query({ forwardedRef }) {


const url = 'http://localhost:5000/form'    
const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
})

function handleSubmit(e){
    e.preventDefault();
    Axios.post(url,{
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        message: data.message
    },
    {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res => {
        console.log(res.data);
    })
}

function handleData(e){
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
}
    return (
        <div className="query-container" ref={forwardedRef}>
            <h1>Query Form</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>handleData(e)} type="text" name="firstName" value={data.firstName} placeholder="First Name" required/>
                <input onChange={(e)=>handleData(e)} type="text" name="lastName" value={data.lastName} placeholder="Last Name" required/>
                <input onChange={(e)=>handleData(e)} type="text" name="email" value={data.email} placeholder="Email" required/>
                <textarea onChange={(e)=>handleData(e)} name="message" value={data.message} placeholder="Leave a message..." required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Query
