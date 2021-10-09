import React, {useEffect,useState} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link,useParams } from 'react-router-dom'
import { toast } from 'react-toastify';


function EditContent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const {id} = useParams();

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const currentContact = contacts.find(
        contact => contact.id === parseInt(id)
        );

    useEffect(() => {
        if(currentContact){
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find ((contact) => contacts.id !== parseInt(id) &&  contact.email === email );
        const checkName = contacts.find ( (contact) => contacts.id !== parseInt(id) &&  contact.name === name );
        const checkNumber = contacts.find ((contact) => contacts.id !== parseInt(id) && contact.number === number );

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
            id: parseInt(id),
            name,
            email,
            number
        };

       dispatch({type: "UPDATE_CONTACT", payload: data});
       toast.success("Auction Success")
       history.push('/')
    }

    return (
        <div className="container">
            {currentContact?(
                <>
 <div className="row">
 <h1 className="display-3 text-center">
     Edit Customer {id}
 </h1>  
 <div className="col-md-6 shadow mx-auto p-5">
      <form onSubmit={handleSubmit} >
         <div className='form-group'>
             <input type='text' placeholder="Name" className="form-control" value={name} onChange={ e => setName(e.target.value)}/> 
         </div>  

         <div className='form-group'>
             <input type='email' placeholder="Email" className="form-control" value={email} onChange={ e => setEmail(e.target.value)} /> 
         </div>  

         <div className='form-group'>
             <input type='number' placeholder="Phone Number" className="form-control" value={number} onChange={ e => setNumber(e.target.value)} /> 
         </div>  

         <div className='form-group'>
             <input type='submit'  value="Update Student" className="btn btn-block btn-dark" /> 
             <Link to="/" className="btn btn-danger ml-3">
            Cancel 
         </Link>   
         </div>  

          
      </form>    
 </div>      
</div> 
</>
            ):(
                <h1 className='display-3 text-center'> Cant find the record {id} </h1>
            )}
           
     </div>
    );
}

export default EditContent
