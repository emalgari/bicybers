import React from 'react';
import './CyberSecurity.css';
import '../Services.css';

const CyberSecurity = () => {
  return (

  <section className="container-fluid d-flex flex-column justify-content-start align-items-center g-lg-3 py-lg-4 p-2 cyberSecurity-bg" id='content-container'>
  
    <h2 className='col-lg-6 text-white text-center align-self-center d-none d-md-block d-lg-block'>
      Cyber Security
    </h2>
    
    <h4 className='col-lg-6 text-white align-self-center text-center d-block d-lg-none d-md-none'>
      Cyber Security
    </h4>
    
    <div className="col-lg-10 Col-7 d-block d-sm-flex justify-content-sm-center flex-sm-column text-white p-2"> 

      <main className="p-lg-3 p-2 d-flex justify-content-center align-items-center flex-column" id='content'>

        <p className='d-lg-block d-sm-block'>
          Binary Cyber Security system follows the Zero trust security model (never trust, always secure & verify). Systems, users and data is live, growing with exponential rates and so are cyber security attacks. The old methods are no more adequate to protect user data from malicious attacks, We at Binary bring the latest models, methodologies and solutions to help the customers to protect themfrom all type of digital vulnerabilities.
        </p>

        <p className='d-none d-lg-block d-md-block'>
          Our cyber security solutions to protect your business from sophisticated cyberthreats with advanced cyber security solution in the followings:
        </p> 

        <p className='d-block d-lg-none d-md-none w-100'>
          Our Cyber Security services includes:
        </p>

        <div className="row gy-2 mb-3 card-box">

          <div className="col-sm-6 mb-sm-0">
            <div className="card service-card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Remote workforce security
                </h6>
              </div>
            </div>
          </div>

         <div className="col-sm-6">
            <div className="card service-card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Penetration testing
                </h6>
              </div>
            </div>
         </div>

          <div className="col-sm-6">
            <div className="card service-card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Cloud workflow protection
                </h6>
              </div> 
            </div>
          </div>

          <div className="col-sm-6 mb-sm-0">
            <div className="card service-card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Data protection
                </h6>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-sm-0">
            <div className="card service-card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Ransomware defense
                </h6>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card service-card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Vulnerability assessment
                </h6>
              </div> 
            </div>
          </div>
        </div>

        <div className='d-none d-lg-block d-flex justify-content-center align-items-center text-white mb-2'>
          <h4 className='p-3'>
            Launching Soon...
          </h4>
        </div>

        <div className='d-none d-lg-block'>
          <div className="row gy-2 mb-3 card-box">
            <div className="col-sm-6 mb-sm-0">
              <div className="card service-card">
                <div className="card-body">
                  <h6 className="card-title text-center">
                    Identiy & Access management
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card service-card">
                <div className="card-body">
                  <h6 className="card-title text-center">
                    Security information & even management
                  </h6>
                </div> 
              </div>
            </div>
          
            <div className="col-sm-6 mb-sm-0">
              <div className="card service-card">
                <div className="card-body">
                  <h6 className="card-title text-center">
                    Endpoint security
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card service-card">
                <div className="card-body">
                  <h6 className="card-title text-center">
                    Network security
                  </h6>
                </div> 
              </div>
            </div>

          </div>

        </div>

      </main>

    </div>

  </section>
  )
}

export default CyberSecurity;