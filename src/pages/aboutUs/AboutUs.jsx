import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="container-fluid d-flex flex-column justify-content-start align-items-center g-lg-3 py-lg-4 p-2 cyberSecurity-bg" id='content-container'>
  
    <h2 className='col-lg-6 text-white text-center align-self-center d-none d-md-block d-lg-block'>About Us</h2>
    <h4 className='col-lg-6 text-white align-self-center text-center d-block d-lg-none d-md-none'>About Us</h4>
    <div className="col-lg-10 Col-7 d-block d-sm-flex justify-content-sm-center flex-sm-column text-white p-2"> 
      <main className="p-lg-3 p-2" id='content'>

        <p>
          Binary Cyber Security Solutions is a visionary company founded by three musketeers who brought their expertise from Ericsson, Atlas Copco, and IBM. With a focus on providing international quality services, our company has quickly gained popularity after being established in 2019.
          <br/>
          Providing our clients with cyber security solutions and services is at the core of what we do. To ensure that they are protected against all types of cyber threats, we assist them with protecting their digital assets, data, and networks. We have a team of highly skilled and experienced professionals who are passionate about what they do and committed to delivering quality service to our clients.
          <br/>
          Founded on a foundation of trust, reliability, and mutual respect, Binary Cyber Security Solutions strives to build long-lasting relationships with our clients. As the world of cyber security continues to evolve, we are constantly striving to improve our services.<br/> 
          <Link className='text-warning h5' to="/ContactUs">Contact us</Link> today to learn more about how we can help you protect your digital assets and stay one step ahead of cyber threats.
        </p>

      </main>
    </div>

  

</section>
  )
}

export default AboutUs;