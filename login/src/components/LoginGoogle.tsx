import { GoogleLogin } from '@react-oauth/google';

function LoginGoogle(){
  const handleSuccess = (response: any) => {
    console.log('Inicio de sesión exitoso:', response);
    // Puedes manejar el token aquí, enviarlo al backend, etc.
  };

  const handleError = () => {
    console.log('Error en el inicio de sesión');
  };

    return(
      <div>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        
        />
      </div>
    )
}

export default LoginGoogle;