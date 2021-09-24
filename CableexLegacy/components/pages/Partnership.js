import React from 'react'
import '../../styles/Partnership.css'
import Footer from '../Footer'
import PartnerShipForm from '../PartnershipForm'

const Partnership = () => {
    return (
        <>
            <div className="partnership-pic-container">
                <h1 className="punchline">Exclusivity, Dynamic and Increased Margins</h1>
            </div>

            <div className="section" style={{backgroundColor: "#ebebeb"}}>
                <div className="partnership-section-content">
                <div className="section-content">
                <div className="section-title"><h1>The CableEx Difference</h1></div>
                    <p>
                        In this business-to-business world of competition we appreciate the benefits of capitalism. However, we have a greater appreciation for relationships and   teamwork. Therefore, we have created a unique space to help companies who offer services that require network cabling infrastructure, pricing exclusivity and an  opportunity to grow their margins.
                    </p>
                </div>
                </div>
            </div>

            <div className="section">
                <div className="partnership-section-content">
                <div className="section-content">
                    <div className="section-title"><h1>The Problem</h1></div>
                    <p>
                        We have found that companies who specialize in IT, VoIP, Network, and network equipment sales have often lost clients/bids because of high network cabling  prices, cumbersome processes or have depended on unreliable vendors. Some have just not had a network cabling vendor at all and have had no other choice than to tell a customer “to find their own network cabling installer”. This is a problem, and it has more than likely affected your margin at some point.
                    </p>
                </div>
                </div>
            </div>

            <div className="section" style={{backgroundColor: "#ebebeb"}}>
                
                <div className="partnership-section-content">
                <div className="section-content">
                <div className="section-title"><h1>CableEx’s Solution</h1></div>
                    <p>
                        By partnering with CableEx as your exclusive network cabling vendor, your business will become more dynamic and increase margins through pricing exclusivity.
                    </p>
                    <br></br>
                    <p>
                        Resulting in...
                    </p>
                    <br></br>
                    <div className="bulletpoints">
                    <ul>
                        <li>More competitive pricing</li>
                        <li>Increased profitability</li>
                        <li>More deals won</li>
                    </ul>
                    </div>
                    <br></br>
                    <p>And most importantly, a greater resource in the eyes of your customers.</p>
                </div>
                </div>
            </div>

            <div className="section">

                <div className="partnership-section-content-options">
                <div className="section-content">
                <div className="section-title"><h1>Partnership Options</h1></div>
                    <p>
                        We offer two types of partner accounts that are proving to make this program lucrative.
                    </p>
                    <br></br>
                    <div className="bulletpoints">
                    <ul>
                        <li>Premium Based</li>
                        <li>Percentage Based</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>

            <div className="brainstorm-container">
                <div className="brainstorm-header"><h2>Learn More About Becoming A Partner</h2></div>
                <PartnerShipForm />
            </div>

            <Footer />
        </>
    )
}

export default Partnership