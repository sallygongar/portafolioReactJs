import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../scss/styles.scss';
import LoginGoogle from "./LoginGoogle";
import { useAuth } from '../context/UserContext';
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Login(){

  const [user,setUser] = useState({
    email: "",
    password: ""
  });

  const [showPass,setShowPass] = useState(false);
  const [messageError,setMessageError] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState({
    email: false,
    password: false
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleOnChange = ( e: any) => {
    const { name, value } = e.target;
  
    setUser({...user, [name]: value});
    setError(prevError => ({...prevError, [name]: false}));
    setMessageError(prevMessage =>({...prevMessage, [name]: ""}));
  }

  const validationForm = () =>{
    let isValid = true;
    let newError = error;
    let newMessage = messageError;

    if(!user.email){
      isValid = false;
      newError['email'] = true;
      newMessage['email'] = "El correo es obligatorio*"
    }else{
      if(!emailRegex.test(user.email)){
        isValid = false;
        newError['email'] = true;
        newMessage['email'] = "Por favor ingresa un correo valido*"
      }
    }

    if(!user.password){
      isValid = false;
      newError['password'] = true;
      newMessage['password'] = "Por favor ingresa password*"
    }

    setError(prevError => ({...prevError, ...newError}));
    setMessageError(prevMessage =>({...prevMessage, ...newMessage}));

    return isValid
  }

  const handleChangeIcon = () =>{
    setShowPass(!showPass);
  }

  const handleLogin = () => {
    if(validationForm()){
      console.log("¡Bienvenido!")
      login();
      navigate("/dashboard");
    }else{
      console.log("Verifica tus datos")
    }
  }

  return(
    <>
      <div className="content_main">
        <div className="content_login">
          <h2>Iniciar sesión</h2>
          <form className="contenido_login">
            <div className="wrapper_action-google">
              <LoginGoogle/>
            </div>
            <div className="divider">
              <p>O ingresar con su cuenta</p>
            </div>
            <div className="wrapper_input">
              <input  type="text" name="email" value={user.email} placeholder="Correo Eléctronico*" onChange={handleOnChange}/>
              {
                error['email'] && <span className="error_message">{messageError['email']}</span>
              }
            </div>
            <div className="wrapper_input">
              <input  type={showPass ? "text" : "password"} name="password" value={user.password} placeholder="Contraseña*" onChange={handleOnChange}/>
             {
              showPass ? <svg className="input_icon-pass" onClick={handleChangeIcon} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16C9.80001 16 8.00001 14.2 8.00001 12C8.00001 9.8 9.80001 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="black"/><path d="M12 19C6.50001 19 3.30001 13.2 3.10001 13C2.90001 12.7 2.90001 12.3 3.10001 12C3.20001 11.8 6.50001 6 12 6C17.5 6 20.7 11.8 20.9 12C21.1 12.3 21.1 12.7 20.9 13C20.7 13.2 17.5 19 12 19ZM5.20001 12.5C6.00001 13.8 8.50001 17 12 17C15.5 17 18 13.8 18.8 12.5C18 11.2 15.5 8 12 8C8.50001 8 6.00001 11.2 5.20001 12.5Z" fill="black"/></svg> :
              <svg className="input_icon-pass" onClick={handleChangeIcon} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.7 19.3L4.70001 3.3C4.30001 2.9 3.70001 2.9 3.30001 3.3C2.90001 3.7 2.90001 4.3 3.30001 4.7L6.60001 8C4.40001 9.7 3.20001 11.9 3.10001 12C2.90001 12.3 2.90001 12.7 3.10001 13C3.20001 13.2 6.50001 19 12 19C13.5 19 14.9 18.6 16.3 17.8L19.3 20.8C19.5 21 19.8 21.1 20 21.1C20.2 21.1 20.5 21 20.7 20.8C21.1 20.3 21.1 19.7 20.7 19.3ZM10.1 11.5L12.5 13.9C11.8 14.1 11.1 13.9 10.6 13.4C10.2 13 10 12.5 10 12C10 11.8 10 11.7 10.1 11.5ZM12 17C8.50001 17 6.00001 13.7 5.20001 12.5C5.70001 11.8 6.60001 10.5 8.00001 9.4L8.60001 10C8.20001 10.6 8.00001 11.3 8.00001 12C8.00001 13.1 8.40001 14.1 9.20001 14.8C9.90001 15.6 10.9 16 12 16C12.7 16 13.4 15.8 14 15.4L14.8 16.2C13.9 16.7 13 17 12 17Z" fill="black"/><path d="M12 8C15.5 8 18 11.3 18.8 12.5C18.6 12.7 18.4 13 18.2 13.4C17.9 13.8 17.9 14.5 18.4 14.8C18.6 14.9 18.8 15 19 15C19.3 15 19.6 14.9 19.8 14.6C20.5 13.7 20.9 13 20.9 13C21.1 12.7 21.1 12.3 20.9 12C20.8 11.8 17.5 6 12 6C11.4 6 11 6.4 11 7C11 7.6 11.4 8 12 8Z" fill="black"/></svg>
             }
              {
                error['password'] && <span className="error_message">{messageError['password']}</span>
              }
            </div>
            <div className="wrapper_button">
              <button type="button" className="button_login" onClick={handleLogin}>Ingresar</button>
            </div>
            <div className="wrapper_forget">
              <button type="button" className="button_forget">¿Olvidaste tu contraseña?</button>
            </div>
            <div className="wrapper_new-accout">
              <a href="https://es.react.dev/" target="_blank" rel="noreferrer" className="sign_up">¿No tienes cuenta? <span style={{ color: '#4545dd', textDecoration: 'underline'}}>Crear cuenta</span></a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;