import React from 'react'
import "../styles/RegisterStyles.css"; 
import {useDispatch} from 'react-redux';
import {showLoading,hideLoading} from "../redux/features/alertSlice";
import { Form, Input,message } from 'antd';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Register = () => { 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async(values) => {
    try{
      dispatch(showLoading());
      const res = await axios.post('/api/v1/user/register', values);
      dispatch(hideLoading());
      if(res.data.success){
        message.success('Register Successfully');
        navigate("/login");
      }else{
        message.error(res.data.message);
      }
    }catch(error){
      dispatch(hideLoading());
      console.log(error)
      message.error('Something went wrong');
    }
  }
  return (
    <>
    <div className='form-container'>
      <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>

        <h3>Register Form</h3>

        <Form.Item label="Name" name="name">
          <Input type="text" required/>
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input type="text" required/>
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="text" required/>
        </Form.Item>

        <Link to="/login" className='ms-2'>Already user login here</Link>

        <button>Register</button>

      </Form>

    </div>
    </>
  )
}

export default Register;