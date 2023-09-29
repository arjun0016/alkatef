import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import './footer.css'

const Footer = () => {
  return (
    
    <div className='footer container'>

        <div className='line'></div>

        <div className='d-block'>
        <img className='logo'src='https://alkatefitsolutions.com/wp-content/uploads/2023/03/Logo-Al-Katef-iT-Solution-200x57.png.webp' alt="nm"></img>
        </div>
        <div className='allMenu'>
        <div className='menu'>
            <ul>
            <h6>Menu</h6>
            <li>Index</li>
            <li>About Us</li>
            <li>Work</li>
            <li>Faq</li>
            <li>Blog</li>
            <li>contact Us</li>
            </ul>
        </div>

        <div className='menu'>
            <ul>
            <h6>Social</h6>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Pinterest</li>

        
            </ul>
        </div>

        <div className='menu'>
            <ul>
            <h6>Contact</h6>
            <li>Evergreen 27 san</li>
            <li>Francisco</li>
            <li>800 123-456</li>
        
            </ul>

        </div>


        </div>
        
       
        <div className='newsletter mt-5'>
            <h4>Newsletter</h4>
            <table className='table w-100'>
                <tr>Name</tr>
                <tr>Email</tr>
                <tr className='bg-dark text-white'>SUBSCRIBE</tr>
            </table>

            <p>We sent only premium content when we <br />
            &nbsp;&nbsp;&nbsp; think is worth enough to share.</p>
        </div>

        <div className='upArrow'> <a href="/">
        <MdOutlineKeyboardArrowUp className='icon' />
        </a>
        </div>



    </div>

  )
}

export default Footer