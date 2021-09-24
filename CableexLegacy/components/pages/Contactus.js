import React from 'react'
import '../../styles/Contactus.css'
import Footer from '../Footer'
import Forms from '../Forms'


export default function Contactus() {
    return (
        <>

            <div className="container-2">
                <div className="contact-pic-container">
                    <div className="forms-heading">
                        <h1>Contact Information</h1>
                    </div>
                    <div className="forms-heading">
                        <h1>
                            Phone:
                        </h1>
                        <h2>
                            <a className="contact-link" href="tel:7207802948">(720) 780-2948</a>
                        </h2>
                        <br></br>
                        <h1>
                            Email:
                        </h1>
                        <h2>
                            <a className="contact-link" href="mailto:info@cableex.biz">info@CableEx.biz</a>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="forms-heading-1">
                <div className="forms-heading-1-wrapper">
                    <h1>
                        Complete the form below or call us now for more information.
                    </h1>
                    <br></br>
                    <div className="all-requests">
                        <h2>
                            All requests will be responded to within one business day.
                        </h2>
                    </div>
                </div>
            </div>


            <div className="form-box">
                <Forms />
            </div>

            <Footer />

        </>
    )

}

