import React,{ useState, useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { Link, useParams ,useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {
    const {id} = useParams();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState()

    const history = useHistory()

    const contacts = useSelector(state => state)
    const dispatch = useDispatch()
    const currentContact = contacts.find(contact => contact.id === parseInt(id))

    useEffect(() => {
        if(currentContact){
           setName(currentContact.name);
           setEmail(currentContact.email) ;
           setNumber(currentContact.number)
           
        }
    }, [currentContact])

    const editContact = (e) => {
        e.preventDefault();
        const checkemail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email)
        const checknumber = contacts.find(contact => contact.id !==parseInt(id) && contact.number === number)
       
        if(!email || !number || !name){
            return toast.warning("Please fill in all fields")
        }
        if(checkemail) return toast.error("This is email already exist!")
        if(checknumber) return toast.error("This is number already exist!")

        const data = {
            id:parseInt(id),
        name,
        email,
        number:parseInt(number)
        }

        dispatch({type:"UPDATE_CONTACT" , payload:data})
        toast.success("Student  changed successfully!!")
        history.push('/')
    }

    return (
        <div className="container">
            {
                currentContact ? (
                    <>
                        <div className="row">
                            <h1 className="display-3 text-center">Edit Contact</h1>
                            <div className="col-md-6 shadow mx-auto p-5">
                                <form onSubmit={editContact}>
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
                                        <input type="submit" value="Update Student" className="btn btn-block btn-dark mt-2 rounded" />
                                        <Link to="/" className="btn btn-danger  mt-2 mx-2 rounded " >Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1 className="display-3 my-5 text-center">Student contact with id {id} not found </h1>
                )
            }
            
        </div>
    )
}

export default EditContact
