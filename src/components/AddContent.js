import { toast } from 'react-toastify';
import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const AddContent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find (contacts => contacts.email === email && email);
        const checkName = contacts.find (contacts => contacts.name === name && name);
        const checkNumber = contacts.find (contacts => contacts.number === number && number);

        if(!name || !email || !number){
            return toast.warning("Has Error U dumbass")
        }

        if(checkEmail){
            return toast.error("Has Error U dumbass 1")
        }

        if(checkName){
            return toast.error("Has Error U dumbass 2")
        }

        if(checkNumber){
            return toast.error("Has Error U dumbass 3")
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }

       dispatch({type: "ADD_CONTACT", payload: data});
       toast.success("Auction Success")
       history.push('/')
    }
    
    return (
     
        <div className="container">
           <div className="row">
                <h1 className="display-3 text-center">
                    Add Customer
                </h1>  
                <div className="col-md-6 shadow mx-auto p-5">
                     <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type='text' placeholder="Name" className="form-control" value={name} onChange={ e => setName(e.target.value)} /> 
                            
                        </div>  

                        <div className='form-group'>
                            <input type='email' placeholder="Email" className="form-control" value={email} onChange={ e => setEmail(e.target.value)} /> 
                        </div>  

                        <div className='form-group'>
                            <input type='number' placeholder="Phone Number" className="form-control" value={number} onChange={ e => setNumber(e.target.value)} /> 
                        </div>  

                        <div className='form-group'>
                            <input type='submit'  value="Add Student" className="btn btn-block btn-dark" /> 
                        </div>    
                     </form>    
                </div>      
           </div>     
        </div>
    );
}
