import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {

    const contacts = useSelector(state => state)

    const dispatch = useDispatch()
    

    const deleteContact =(id) => {
        dispatch({type:"DELETE_CONTACT", payload:id})
        toast.success("Deleted Contact successfully !!")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 d-flex justify-content-end">
                    <Link to="/add" className="btn btn-outline-dark">
                        Add Contact
                    </Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {contacts.map((contact , id ) => (
                                <tr kry={id}>
                                    <td>{contact.id +1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to={`/edit/${id}`} className='btn btn-primary  btn-sm mx-2' >Edit</Link>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteContact(contact.id)} >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
