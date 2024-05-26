import React from 'react'
import './SignUpForm.css'

const SignUpForm = () => {
    return (
        <>
            <div className="signup-container">
                <h1>Sign Up Your Account !!</h1>
                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='PassWord' />
                    <button>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUpForm