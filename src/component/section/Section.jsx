import React from 'react';


import './section.css'

const Section = () => {
  return (
    <div className='section container'>
        <div className='image-container'>
        <img className='image' src="https://assets.website-files.com/5e263f195f6403439ccc7b1a/5e273b9716b6d19ac002dbee_christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg" alt="" />
        </div>
        <div className='director'>
        <h3>The <br/> &nbsp;&nbsp; Director</h3>
        <p className='dp mt-3'>
        With more than 20 years of experience we can deliver the best services cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime  placeat facere possimus.<br/>

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,  totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto.
        </p>

        </div>
        
    </div>
  )
}

export default Section

