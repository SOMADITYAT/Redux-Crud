import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  FunctionAddUser } from "../Redux/Action";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "admin",
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(FunctionAddUser(formData));
    navigate('/user')
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "admin",
    })
    console.log(formData);
  }


  
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
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" />
                </div>
               
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <select className="form-control" value={formData} onChange={handleInputChange} >
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
};

export default AddUser;
