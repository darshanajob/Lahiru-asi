import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Home = () => {

    const contacts = useSelector(state=>state);

    return (
        <div className="container">
           <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to='/add' className='btn btn-outline-dark'> 
                      Add Link
                    </Link>
                </div>  
                <div className="col-md-6 mx-auto">
                     <table className="table table-horver">
                        <thead className="text-white bg-dark text-center">
                           <tr>
                                <th scope="col"> #</th>
                                <th scope="col"> Name</th>
                                <th scope="col"> Email</th>
                                <th scope="col"> Number</th>
                                <th scope="col"> Action</th>
                           </tr>     
                        </thead>
                        <tbody>
                            {
                             contacts.map((contacts, id) => (
                                <tr key="{id}">
                                    <td>{id + 1} </td>
                                    <td>{contacts.name} </td>
                                    <td>{contacts.email} </td>
                                    <td>{contacts.number} </td>
                                    <td> 
                                        <Link to={`/edit/${contacts.id}`} className="btn btn-small
                                         btn-primary">Edit</Link>
                                         <button type="button" className="btn btn-small
                                         btn-danger">Delete</button>
                                    </td>
                                </tr>    
                              ) )
                            }
                        </tbody>    
                     </table>    
                </div>      
           </div>     
        </div>
    );
}

export default Home
