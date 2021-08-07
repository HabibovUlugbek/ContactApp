import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddContact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState()

    const contacts = useSelector(state => state)
    const dispatch = useDispatch()

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkemail = contacts.find(contact => contact.email === email && contact)
        const checknumber = contacts.find(contact => contact.number === parseInt(number))
       
        if(!email || !number || !name){
            return toast.warning("Please fill in all fields")
        }
        if(checkemail) return toast.error("This is email already exist!")
        if(checknumber) return toast.error("This is number already exist!")

        const data = {
            id:contacts.length >0 ? contacts[contacts.length -1]?.id +1  :  0 + 1,
        name,
        email,
        number:parseInt(number)
        }

        dispatch({type:"ADD_CONTACT" , payload:data})
        toast.success("Student  added successfully!!")
        history.push('/')
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 text-center">Add Contact</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit} >
                        <div className="input-group">
                            <input 
                            type="text" 
                            placeholder="Name" 
                            className="form-control"  
                            value={name}
                            onChange={(e) => setName(e.target.value)}  />
                        </div>
                        <div className="input-group">
                            <input 
                            type="email" 
                            placeholder="Email" 
                            className="form-control my-3" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <input 
                            type="number" 
                            placeholder="Tel number" 
                            className="form-control" 
                            value={number} 
                            onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div className="input-group d-flex justify-content-end">
                            <input type="submit" value="Add Student" className="btn btn-block btn-dark mt-2" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
