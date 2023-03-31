import React from 'react';
import "./Home.css";
import Button from '../../components/button/Button';



const Home = () => {
  return (

    <section className="main container-fluid d-flex p-2">

      <div className="container mb-4 d-flex flex-column justify-content-start g-lg-3 py-lg-4 px-4">

        <h1 className='col-lg-6 text-white text-center d-none d-lg-block d-md-block'>
          Binary Cyber Solutions
        </h1>

        <h4 className='m-4 col-lg-6 text-white text-center d-block d-lg-none d-md-none'>
          Binary Cyber Solutions
        </h4>

        <div className="main-content mt-lg-3 col-lg-6 Col-7 d-block d-sm-flex justify-content-sm-center flex-sm-column text-white p-2">
                
         <main className="p-lg-2">

            <h5 className='d-none d-lg-block d-md-block text-center'>
              Among the first few fastest growing Cyber security and Mobile forensics company in the local market
            </h5>

            <span className='d-lg-none d-md-none d-sm-block'>

              <h5 className='text-center'>
                The fastest growing <br/> 
                <strong>Cyber security</strong> <br/> 
                and <br/> 
                <strong>Mobile forensics</strong> <br/>
                company in the local market!                    
              </h5>

              <p>
                We bring together cyber security plus digital forensics, providing our customers with top-notch security solutions and assess with digital forensics (computer, mobile).
                BCSSS develops tailor-made solutions, and if necessary we help in acquiring solutions to satisfy the needs of the customers to meet the challenges.
              </p>

            </span>

            <p className='d-none d-lg-block d-md-block'>
              We bring together cyber security plus digital forensics, providing our customers with top-notch security solutions and assess with digital forensics (computer, mobile). 
              BCSSS experts ensure that no security laps is left or digital evidence is overlooked and assist at any stage of an investigation regardless of the number of locations of data sources.
              BCSSS develops tailor-made solutions, and if necessary we help in acquiring solutions to satisfy the needs of the customers to meet the challenges.
            </p> 

          </main>
    
        </div>

      </div>

        {/* Cards */}
        
        <div className="container d-flex justify-content-center align-items-center flex-column text-white p-lg-3 px-3 gap-lg-5" id='box'>

          <h1 className='col-lg-6 text-white text-center d-none d-lg-block d-md-block'>
            Our Services
          </h1>

          <h4 className='m-4 col-lg-6 text-white text-center d-block d-lg-none d-md-none'>
            Our Services
          </h4>

          <div className="row gy-5 mb-3 card-box">

            <div className="col-sm-6 mb-sm-0">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Cyber Security
                  </h5>
                  <ul className="card-text text-center list-unstyled ">
                    <li>
                      Our cyber security solutions protect your business from sophisticated cyberthreats with advanced cyber security solutions.
                    </li>
                  </ul>
                </div>
                <Button text="Read more..." to="/CyberSecurity"/>
              </div>

            </div>

            <div className="col-sm-6">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Digital Forensics
                  </h5>
                  <ul className="card-text text-center list-unstyled ">
                    <li>
                      Cutting-edge digital forensics solutions for organizations.
                      Minimizing risk of data alteration, destruction, or corruption.
                    </li>
                  </ul>
                </div>
                <Button text="Read more..." to="/DigitalForensics"/>  
              </div>

            </div>

          </div>
          
        </div>
        
        {/* cards end */}
        
    </section>
  )
}

export default Home;