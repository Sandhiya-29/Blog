import './App.css'
import { IoIosSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'; 

const Header = () => {

  return (
    <div className='header'>
          <div className='search'>
           <input className='input' type="text" placeholder='Search' />
           <IoIosSearch  className='search-icon'/>
           </div>
           <div className='nav-bar'>
           <Link to="/" className="home">Home</Link>
        <Link to="/about" className="home">About</Link>
        <Link to="/travel" className="home">Travel</Link>
        <Link to="/eat" className="home">Eat</Link>
        <Link to="/post" className="home">Post</Link>
            <FaFacebookF className='fb-icon'/>
            <FaInstagram className='insta-icon' />
            <FaTwitter className='twitter-icon' />
            </div>
        </div>
  )
}

export default Header