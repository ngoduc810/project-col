import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap';
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { logIn, googleSignIn } = useUserAuth();
    const handerSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {   
            await logIn(email, password);
            navigate('/')
        }catch(err) {
            setError(err.message)
        }
    }
    const handerLogInGoogle =async (e) => {
        e.preventDefault();
        try{
            await googleSignIn();
            navigate('/')
        }catch (err) {
            console.log(err.message)
        }
    }
  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
        <div className='p-4 box col-md-5' >
            <h2 className='mb-3'>Firebase Auth Login</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handerSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control 
                        type='email'
                        placeholder='Email address'
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control 
                        type='password'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <div className='d-grid gap-2'>
                    <Button variant='primary' type='submit'>
                        Login
                    </Button>

                </div>
            </Form>
            <div className='my-3 d-flex justify-content-center'>
                <GoogleButton onClick={handerLogInGoogle} className='g-btn' type='dark'/>
            </div>
            <div className='p-4 mt-3 text-center'>
                Don't have an account? <Link to={'/signup'}>Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Login