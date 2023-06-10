import {createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import './sign-in-component.css';
const SignIn = () => {
    const logGoogleUser = async () =>{
        // Popup ile hesap seçimi
        const {user} = await signInWithGooglePopup();
        // console.log("LGU",user);
        // Seçilen hesaba göre veritabanına bağlantı noktası oluşturma
        await createUserDocumentFromAuth(user);
    }
    return ( 
        <div className="sign-in-container">
            <h1>Giriş Yap</h1>
            <button className="buttons-container" onClick={logGoogleUser}>
                Google
            </button>
            <SignUpForm/>
        </div>
    );
}
 
export default SignIn;