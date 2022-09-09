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
        <Link to='/'>Home</Link>
        <br />
        { user ?
          <>
            <h1>Welcome, {user.name}</h1>
            <Link to='' onClick={handleLogOut}>Log Out</Link>
          </>
          :
          <>
            <Link to='/signin'>Sign In</Link>
          </>
        }
        <br />
        <Link to='/profile'>My Profile</Link>
      </nav>
    </>
  );
}