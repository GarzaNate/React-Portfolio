import React, { useState } from "react";
import validateEmail from '../utils/helpers';

function Contact() {
    
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { email, name, message} = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState)
        }
    };
    
    const handleChange = (event) => {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
              setErrorMessage('Your email is invalid.');
            } else {
              setErrorMessage('');
            }
          } else {
            if (!event.target.value.length) {
              setErrorMessage(`${event.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
            console.log('Handle Form', formState);
          }
    }
    
    
    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleFormControlInput1" defaultValue={name}>Name</label>
                    <input onBlur={handleChange} type="name" className="form-control" id="exampleFormControlInput1" placeholder="John Doe"></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1" defaultValue={email}>Email address</label>
                    <input onBlur={handleChange}type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Leave a message!</label>
                    <textarea onBlur={handleChange}className="form-control" id="exampleFormControlTextarea1" rows="3" defaultValue={message}></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}


export default Contact;
