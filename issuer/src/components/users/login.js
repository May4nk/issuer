//components/login
import './users.css';

//hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signIn, signUp } from '../../actions/users.js';

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [ signup, setSignup ] = useState(false);
    const [ signData, setSignData] = useState({ email:'', password:'', confirmpwd:'' });

    
    //handling submit
    const handleSubmit= (e) => {
        e.preventDefault();
        if(signup){
            dispatch(signUp(signData, history));
        } else {
            dispatch(signIn(signData, history));
        }
    }

    //handling change
    const handleChange = (e) => setSignData({ ...signData, [e.target.name]: e.target.value });

    return (
    <div className='box'>
    <div className="row">
       <form onSubmit={ handleSubmit }>
          <div className="input-field center col s12">
              <input id="password" type="text" placeholder='Email' name='email' onChange={ handleChange }/>
          </div>
          <div className="input-field center col s12">
              <input id="password" type="password" placeholder='Password' name='password' onChange={ handleChange }/>
          </div> 
          { signup && (
              <div className="input-field center col s12">
                  <input id="password" type="password" placeholder='Confirm Password' name='confirmpwd' onChange={ handleChange }/>
              </div> 
         )}
         <div className='center'>
            <button id='signup' className="btn waves-effect waves-light grey black-text">
                { signup? 'Sign Up' : 'Sign In' }
            </button>
         </div>
       </form>
       <div className='center switch' onClick={ () => setSignup((prevst) => !prevst) }>
              Make your own Account to Rate & Create here
       </div>
    </div>
    </div>
    );
}

export default Login;
