import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Still Not Sure?</h1>
        <h1 className='primary-heading'>Let Us Help You Out</h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='youremail@email.com' />
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Contact