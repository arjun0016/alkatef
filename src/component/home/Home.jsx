import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineDown} from 'react-icons/ai'


const Home = () => {
    const URL="https://assets.website-files.com/5e263f195f6403439ccc7b1a/5e386d8019062db33961a06c_luigiestuye-U8hxFaZK3tc-unsplash.jpg"
  return (
    <>
    <div className='homeContent'>
    <div className='content'>
          <h4>WELCOME</h4>
          <h3>Our consultation effortlessly aligns with your digital marketing strategy.</h3>
          <p>
          With years of experience we can deliver <br/> the best product design cum soluta nobis est.
          </p>
          <button className='btn btn-outline-light '>Know More</button>
        </div>
        <div className='downArrow'>
        <AiOutlineDown className='downIcon'/>
        </div>
        <div className='H'>
        <img src={URL} alt='img' className='banner'></img>
        </div>
    </div>


    </>
  )
}

export default Home