import React from 'react';
import './DigitalForensics.css';
import '../Services.css';

const DigitalForensics = () => {
  return (
  <section className="container-fluid d-flex flex-column justify-content-start align-items-center g-lg-3 py-lg-4 p-2 forensic-bg" id='content-container'>
  
    <h2 className='col-lg-6 text-white text-center align-self-center d-none d-md-block d-lg-block'>
      Digital Forensics
    </h2>

    <h4 className='col-lg-6 text-white align-self-center text-center d-block d-lg-none d-md-none'>
      Digital Forensics
    </h4>

    <div className="col-lg-10 Col-7 d-block d-sm-flex justify-content-sm-center flex-sm-column text-white p-2"> 

      <main className="p-lg-3 p-2 d-flex justify-content-center align-items-center flex-column" id='content'>

        <p>
          Binary Cyber Security systems is empowering organization with digital forensics solutions. The digital forensics expers at BCSSS acquire, examine potential evidence during an investigation including data that has been deleted, encrypted or damaged. We use the methodologies to minimise the risk exponentially of any evidence/data from being altered, destroyed or corrupted.
          <br/><br/>
          Our digital forensics services includes:
        </p>

        <div className="row gy-2 mb-3 card-box">

          <div className="col-sm-6 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Computer forensics
                </h6>
              </div>
            </div>
         </div>

         <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Mobile phone forensics
                </h6>
              </div>

            </div>
         </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Cell site analysis
                </h6>
              </div> 
            </div>
          </div>

          <div className="col-sm-6 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Audio Visual forensics
                </h6>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Data Recovery
                </h6>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title text-center">
                  Malware analysis
                </h6>
              </div> 
            </div>
          </div>

        </div>

      </main>
      
    </div>

  </section>

  )
}

export default DigitalForensics;