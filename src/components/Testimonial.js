import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'>Testimonials</p>
        <h1 className='primary-heading'>What they are Saying</h1>
        <p className='primary-text'>
        zwefion iybfzukhyv ioubWEIb 
      JNIUen.
        </p>
    </div>
    <div className='testimonial-section-bottom'>
        <img src={ProfilePic} alt="" />
        <p>
            Loved the service!
        </p>
        <div className='testimonials-stars-container'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>John Doe</h2>
    </div>
    </div>
  )
}

export default Testimonial