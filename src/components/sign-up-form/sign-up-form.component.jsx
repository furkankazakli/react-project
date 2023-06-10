import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import './sign-up-form.css'

const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword} = formFields;

    // console.log(formFields);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields,[name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Şifre kontrolü
        if (password !== confirmPassword) {
            alert("Şifrenizi kontrol ediniz!");
            return;
        }

        // Firestore'a user'ı kaydetme
        try {

            // Google Authentication
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            // User'ı Firestore'a kaydetme
            await createUserDocumentFromAuth (user,{displayName});            

        } catch (error) {
            if (error.code === "auth/weak-password") {
                alert("Şifreniz en az 6 karakter olmalı");
            }
            if (error.code === "auth/email-already-in-use") {
                alert("Bu kullanıcı adı daha önce kullanılmış");

            }
        }
    }

    return ( 
        <div className="sign-up-container">
            <h1>Kayıt ol</h1>
            <form onSubmit={handleSubmit}>
                <input
                placeholder="Display Name"
                type="text"
                required
                name='displayName'
                value={displayName}
                onChange={handleChange}
                />

               
                <input
                placeholder="E-mail"
                type="text"
                required
                name='email'
                value={email}
                onChange={handleChange}
                />

              
                <input
                placeholder="password"
                type="password"
                required
                name='password'
                value={password}
                onChange={handleChange}
                />

             
                <input
                placeholder="Confirm Password"
                type="password"
                required
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                />

                <button id="btn-login" type="submit">Kayıt ol</button>
            </form>
        </div>
     );
}
 
export default SignUpForm;