import React, { useEffect } from 'react'
import { FetchUserList, Removeuser } from '../Redux/Action'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import "./UserListing.css"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserListing = (props) => {
    
    useEffect(()=> {
        props.loaduser();
    },[])
    const handleDelect = (code) =>{
        
        if(window.confirm('do yo want remove')){
            props.removeuser(code);
            props.loaduser();
            toast.success('used removed succesfully.')
        }
    }
  return (
    
    props.user.loading?<div><h2>Loading...</h2></div>:
    props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>: 

    <div className='card'>
        <div className='card-header'>
            <Link to={'/useradd'} className='btn btn-success'>Add User </Link>
        </div>
        <div className="table-body " >
            <table className='table table-bordered '>
                <thead className='bg-primary text-white'>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Role</td>
                        <td>action</td>
                       
                    </tr>
                </thead>
                <tbody > 
                    {
                        props.user.userlist && props.user.userlist.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                               
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.role}</td>
                                <td>
                                    <Link to={"/userupdate/"+item.id} className="btn btn-primary">Edit</Link>
                                    <button className="btn btn-danger" onClick={()=> handleDelect(item.id)}>Delete</button>
                                    </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
const mapStateToProps= (state) =>{
    return{
        user:state.user
    }
}
const mapDispatchToProps= (dispatch) =>{
    return{
        loaduser:() =>dispatch(FetchUserList()),
        removeuser:(code)=> dispatch(Removeuser(code))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserListing);