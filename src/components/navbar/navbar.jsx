import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/images/logo.png'
import Notifications from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MY from '../../assets/images/my.jpg';
import React,{useState} from 'react';
const Navbar = () => {
  const [isScrolled,setScrolled]=useState(false);
  // console.log(window.pageXOffset); 
  window.onscroll=()=>{
    setScrolled(window.pageYOffset === 0 ? false :true);
     return()=>(window.onscroll=null);
    
  };
  console.log(isScrolled ? "navbar scrolled ":'navbar');
  return (
    <div className="navbar">
      {/* navar */}
      <div className='container'>
        <div className="left">
          <img src={Logo} alt='Netflix' />
          <span>HomePages</span>
          <span>Services</span>
          <span>Movies</span>
          <span>New and Popular </span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img src={MY} alt='images' />
          <div className='profile'>
            <ArrowDropDownIcon className='icon' />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;