import './Auth.css';
import Model from 'react-modal';

function Register({value}) {
  return (
    <div>
      <Model isOpen={value}> 
        <div className="auth-modal">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Register" />
          </form>
        </div>
      </Model>
    </div>
  )
}

export default Register