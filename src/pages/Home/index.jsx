import React from 'react';
import './contact.css'; // Ensure the path is correct

function Contact() {
  return (
    <div className='container12'>
      <div className='img-container'>
        <img src='/Rectangle 148.png' alt='Vector Logo' />
        <div className='img-inner'>
          <div className='inner-box'>
            <div className='part-div'>
              <p className='box-title'>Why pod in the park?</p>
              <div className="frame1">
                <div className='framediv1'>
                  <p className='box-con'>100m</p>
                  <p className='box-con-des'>Global listeners</p>
                </div>
                <div className='framediv1'>
                  <p className='box-con'>25%</p>
                  <p className='box-con-des'>Buyer intent</p>
                </div>
                <div className='framediv1'>
                  <p className='box-con'>17.2%</p>
                  <p className='box-con-des'>Annual growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='side-con'>
        <h1 className='heading-1'>Get in touch</h1>
      <div className='con-des'>
      <p className='contcat-description'>
          Lorem ipsum dolor sit amet consectetur. Mi cursus fringilla facilisi tortor adipiscing risus proin etiam elementum.
        </p>
      </div>
        <div className='contact-form'>
          <div className='form-row'>
            <label>
              Name
              <input type='text' className='input'/>
            </label>
            <label>
              Email Address
              <input className='input' type='email'/>
            </label>
          </div>
          <label className='label-enquiry'>
            Enquiry
            <textarea className='enquiry' />
          </label>
          <button className='contact-btn'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
