import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav>
        { user ?
          <Link to='' onClick={handleLogOut}>Log Out</Link>
          :
          <>
            <Link to='/login'>Log In</Link>
            <br></br>
            <Link to='/signup'>Sign Up</Link>
          </>
        }
        <br></br>
        <Link to='/'>My Profile</Link>
      </nav>
    </>
  );
}