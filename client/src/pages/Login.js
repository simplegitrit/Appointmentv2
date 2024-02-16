import React from 'react'
import "../styles/RegisterStyles.css"; 
import {useDispatch} from 'react-redux';
import {showLoading,hideLoading} from "../redux/features/alertSlice";
import { Form, Input ,message} from 'antd';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async(values) => {
    try{
      dispatch(showLoading());
      const res = await axios.post('/api/v1/user/login',values);
      window.location.reload();
      dispatch(hideLoading());
      if(res.data.success){
        localStorage.setItem("token" , res.data.token)
        message.success('Login successfully');
        navigate('/')
      }else{
        message.error(res.data.message);
      }

    }catch(error){
      dispatch(hideLoading());
      console.log(error);
      message.error('something went wrong');

    }
  }

  return (
    <>
    <div className='form-container'>
      <Form layout="vertical" onFinish={onFinishHandler} className='register-form'>

        <h3>Login Form</h3>

        

        <Form.Item label="Email" name="email">
          <Input type="text" required/>
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="text" required/>
        </Form.Item>

        <Link to="/register" className='ms-2'>Not a user register here</Link>

        <button>Login</button>

      </Form>

    </div>

    </>
  )
}

export default Login;