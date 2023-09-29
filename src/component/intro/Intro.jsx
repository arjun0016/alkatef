import React from 'react'
import './intro.css'

const Intro = () => {
  return (
    <div>
        <div className='intro mb-5'>
            <p>INTRO</p>
            <h3>We bring ideas to life by combining years of experiences of our very talented team.</h3>
        </div>


        <div className='all container '>

        <div className='block '>
            <img src="https://assets.website-files.com/5e263f195f6403439ccc7b1a/5e271aa15f16d094ae479b6c_escudo.svg" width={50} alt="" />
            <h3>About Us</h3>
            <p>With more than 20 years of experience we can deliver the best services.</p>
            <button className='btn btn-outline-danger'>Learn More</button>
        </div>
        <div className='block'>
            <img src="https://assets.website-files.com/5e263f195f6403439ccc7b1a/5e271aa1708282df2bb0b0b9_acuerdo.svg" width={50} alt="" />
            <h3>About Us</h3>
            <p>With more than 20 years of experience we can deliver the best services.</p>
            <button className='btn btn-outline-danger'>Learn More</button>

        </div>
        <div className='block'>
            <img src="https://assets.website-files.com/5e263f195f6403439ccc7b1a/5e271aa1fe29f091d7344e79_contacto.svg" width={50} alt="" />
            <h3>About Us</h3>
            <p>With more than 20 years of experience we can deliver the best services.</p>
            <button className='btn btn-outline-danger'>Learn More</button>

        </div>

        </div>

        <div></div>
        <div></div>

    </div>
  )
}

export default Intro