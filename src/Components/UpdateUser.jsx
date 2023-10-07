import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FetchUserObj, FunctionUpdateUser } from '../Redux/Action';

const UpdateUser = () => {

  const [formData, setFormData] = useState({
    id:"",
    name: "",
    email: "",
    phone: "",
    role: "admin",
  });
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const [id , setId] = useState(0);
  const {code} = useParams();

  const userobj= useSelector((state)=>state.user.userobj)
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
     e.preventDefault()
       const object = (formData)
       dispatch(FunctionUpdateUser(object,id));
       navigate('/user')
       setFormData(formData);
       console.log(formData);
    }
   
    useEffect(()=>{
      dispatch(FetchUserObj(code))
    },[])
    useEffect(()=>{
      if(userobj){
        setId(userobj.id);
        setFormData({
          ...formData,
          name: userobj.name,
          email: userobj.email,
          phone: userobj.phone,
          role: userobj.role,
        });
      }
    },[userobj])
  


  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
              <div className="form-group">
                  <label>id</label>
                  <input  value={id ||""} disabled  className="form-control" />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name ||""} onChange={handleInputChange} className="form-control" />
                </div>
               
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email ||""} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="phone" name="phone" value={formData.phone ||""} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <select className="form-control" value={formData ||""} onChange={handleInputChange} >
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <Link to={"/user"}>Back</Link>
          </div>
        </div>
      </form>
    </div>
  );
  
}


export default UpdateUser