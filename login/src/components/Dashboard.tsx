import { useAuth } from '../context/UserContext';

function Dashboard(){
  const { logout } = useAuth();
  return(
    <div>
      <h1>Hola estamos en el Dashboard</h1>
      <button type='button' onClick={logout} className='button_login'>Cerrar sesión</button>
    </div>
  )
}

export default Dashboard;