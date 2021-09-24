import React from 'react'
import '../../styles/SecuritySolutions.css';
import Footer from '../Footer';
import SecuritySolutionsForm from '../SecuritySolutionsForm';


const SecuritySolutions = () => {

    const keySvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/></svg>
    )

    const eyeSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
    )
    
    return (
        <>   
            <div className="security-solutions-pic-container">
                <h1 className="punchline">Security Solutions</h1>
            </div>

            <div className="security-solutions-intro">
                <p>The effort you put in to obtain your properties is just as important, if not more important, to secure them. CableEx recognizes this, and we have a team of security experts ready to design, train, install, and program security solutions that will keep your employees and business premises secure.
                </p>
            </div>
            

            <div className="tables">
                <div id="pricing-table" className="clear">

                    <div className="table-section-heading">
                            <h3>
                                Using an access control system and/or security surveillance cameras, allows access to only permitted people and vehicles. Here are some of the most important features that our systems have to offer:
                            </h3>     
                            <br></br>
                            <img className="security-diagram" src="/assets/securitysolution.jpg" width='500' alt='diagram'></img>       
                    </div>

                    <div className="plan" id="most-popular">
                        <h3>Security Surveillance Camera<span>{eyeSvg}</span></h3>    
                        <ul>
                            <li>Network and Digital Recording</li>
                            <li>Scheduled Monitoring</li>
                            <li>Remote Access</li>
	                		<li>Fixed Focal Lenses</li>
                            <li>Facial Recognition</li>	
                            <li>Audio Recording</li>	
                            <li>Temperature Screening</li>
                            <li>Full Color Imaging During Night</li>
                            <li>License Plate Recognition</li>
                            <li>4K Quality</li>
                            <li>Smart Controls</li>
                            <li>Access Control/Data Logging</li>
                        </ul>    
                    </div>
                    <div className="plan" id="most-popular">
                        <h3>Access Control<span>{keySvg}</span></h3>     
                        <ul>
                            <li>Secure Premise Access</li>
                            <li>Facial Recognition</li>
                            <li>Badge and Key Access</li>
	                		<li>Video Intercom Screening</li>
                            <li>Temperature Screening</li>	
                            <li>Capacity Measuring</li>	
                            <li>Intelligent Data Logging</li>
                            <li>Vehicle Access Recognition</li>			
                        </ul> 
                    </div>
                </div>
            </div>


            <div className="card-section">
                <div className="card-section-heading">
                    <div className="card-section-title-2"><h3>The CableEx Process:</h3></div>
                </div>
                <br></br>
                    <div className="card-container">
                        <div className="card">
                            <div className="icon"><div className="step-number-1">1</div></div>
                            <div className="card-title"><h3>Initial Assesment</h3></div>
                        </div>

                        <div className="card">
                            <div className="icon"><div className="step-number-2">2</div></div>
                            <div className="card-title"><h3>Site Survey</h3></div>
                        </div>

                        <div className="card">
                            <div className="icon"><div className="step-number-3">3</div></div>
                            <div className="card-title"><h3>Designing Phase</h3></div>
                        </div>

                        <div className="card">
                            <div className="icon"><div className="step-number-4">4</div></div>
                            <div className="card-title"><h3>Install</h3></div>
                        </div>
                    </div>
            </div>

            <div className="brainstorm-container">
                <div className="brainstorm-header"><h2>Ready to start the process?</h2></div>
                <p className="brainstorm-sub-title">The consultation is free, what are you waiting for?</p>
                <SecuritySolutionsForm />
            </div>

            <Footer />
        </>
    )
}

export default SecuritySolutions
