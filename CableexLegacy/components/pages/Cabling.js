import React from 'react'
import '../../App.css'
import '../../styles/Cabling.css';
import Footer from '../Footer';
import CablingForm from '../CablingForm';
import { Link } from 'react-scroll';
import {Button} from '../Button';

export default function Cabling() {

    const checkSv = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="green" width="70" height="70" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>
    )

    const cabling = (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M16 0h-8v6h8v-6zm-10 20v2h-4v-2h4zm2-2h-8v6h8v-6zm14 2v2h-4v-2h4zm2-2h-8v6h8v-6zm-11-7v-3h-2v3h-8v5h2v-3h14v3h2v-5h-8z"/></svg>
    )

    const equipment = (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path d="M14.656 8c.121.107.237.222.344.343l-.582.583-.166-.178-.179-.166.583-.582zm-1.326-.781c.154.054.305.117.449.189l-.322.76-.26-.12-.187-.069.32-.76zm-1.573-.219h.486v.824l-.243-.009-.243.009v-.824zm-1.063.21l.315.762-.207.076-.242.11-.314-.762c.144-.07.295-.133.448-.186zm.359 3.415l.522-.522-.731-.733c.326-.233.724-.37 1.156-.37 1.105 0 2 .896 2 2s-.895 2-2 2-2-.895-2-2c0-.407.121-.784.329-1.1l.724.725zm-1.709-2.625l.583.583-.179.165-.166.178-.582-.583c.107-.121.223-.236.344-.343zm-.936 1.221l.76.32-.119.26-.07.188-.76-.32c.054-.154.117-.304.189-.448zm-.408 1.535h.824l-.009.243.009.243h-.824v-.486zm.21 1.547l.763-.315.076.208.109.24-.762.316c-.07-.144-.132-.294-.186-.449zm1.065 1.763l-.344-.343.65-.652.166.178.179.166-.651.651zm1.395.715c-.154-.054-.305-.117-.449-.189l.322-.76.26.12.188.07-.321.759zm1.573.219h-.486v-.825l.243.009.243-.009v.825zm1.062-.209l-.314-.763.207-.076.242-.11.314.762c-.144.071-.295.133-.449.187zm1.351-.793l-.583-.583.179-.166.166-.178.582.583c-.107.122-.223.237-.344.344zm.936-1.221l-.76-.321.119-.259.07-.189.76.321c-.054.153-.117.303-.189.448zm.408-1.535h-.824l.009-.243-.009-.243h.824v.486zm-.973-1.233l-.076-.208-.109-.242.762-.314c.07.144.133.295.187.449l-.764.315zm-3.027-4.009c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0-1c-3.316 0-6 2.683-6 6 0 3.315 2.684 6 6 6s6-2.683 6-6c0-3.315-2.684-6-6-6zm4 17h5v2h-5v-2zm-13 0h5v2h-5v-2zm18-20v17h-18v-17h18zm2-2h-22v21h22v-21z"/></svg>
    )



    return (
        <>

            <div className="cabling-pic-container">
                <h1 className="punchline">Structured Network Cabling</h1>
                <br></br>
                <Link to="form" smooth={true}>
                <Button buttonStyle='btn--outline-2'>Request Free Quote</Button>
                </Link>
            </div>

            <div className="card-section">
                    <div className="card-section-heading">
                        <div className="card-section-title"><h3>All networks require structured network cabling. Network cabling ensures that your business and devices that operate your business are linked to the internet, recording devices and controls.</h3></div>
                        <br></br>
                        <div className="card-section-title"><h3>CableEx specializes in the following network cabling services:</h3></div>
                    </div>
                    <br></br>
                    <div className="card-container">
                        <div className="card">
                            <div className="icon" >{cabling}</div>
                            <div className="card-title"><h3>Network Cabling</h3></div>
                            <br></br>
                            <br></br>
                            <div className="service-description">
                                Professional CAT5e, CAT6, CAT6A, CAT7, and fiber optic structured network cabling installation
                            </div>
                        </div>

                        <div className="card">
                            <div className="icon"><img src='assets/remodel.png' height='70' width='70' alt='' ></img></div>
                            <div className="card-title"><h3>Network Design and Mapping</h3></div>
                            <div className="service-description">
                                Network cabling design, mapping and labeling
                            </div>
                        </div>

                        <div className="card">
                            <div className="icon">{equipment}</div>
                            <div className="card-title"><h3>Network Equipment Installation</h3></div>
                            <div className="service-description">
                                Security cameras, wireless access points, patch panels, network racks, and cabling to cubicles
                            </div>
                        </div>

                        <div className="card">
                            <div className="icon"><img src='assets/server.png' height='70' width='70' alt='' ></img></div>
                            <div className="card-title"><h3>Re-Appropriation</h3></div>
                            <br></br>
                            <br></br>
                            <div className="service-description">
                                The moving of telecommunication closets, rooms, network racks, network devices and network cabling
                            </div>
                        </div>

                        <div className="card">
                            <div className="icon"><img src='assets/weather.png' height='70' width='70' alt='' ></img></div>
                            <div className="card-title"><h3>Network Weather Proofing</h3></div>
                            <div className="service-description">
                                Outdoor network cabling solutions that require conduit, burial, and weather proofing
                            </div>
                        </div>
                    </div>
            </div>

            <div className="card-section" style={{display:'flex', backgroundColor:'white'}}>
                <div className="card-section-wrapper">
                    <div className="card-section-heading">
                        <div className="card-section-title-2"><h3>Why CableEx?</h3></div>
                    </div>
                    <div className="card-container">
                        <div className="card" style={{border: 'none'}}>
                            <div className="icon">{checkSv}</div>
                            <div className="card-title"><h6>Faster Timelines</h6></div>
                        </div>

                        <div className="card" style={{border: 'none'}}>
                            <div className="icon" >{checkSv}</div>
                            <div className="card-title"><h6>Same Day Site Surveys</h6></div>
                        </div>

                        <div className="card" style={{border: 'none'}}>
                            <div className="icon">{checkSv}</div>
                            <div className="card-title"><h6>Thorough Communication</h6></div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card" style={{border: 'none'}}>
                            <div className="icon">{checkSv}</div>
                            <div className="card-title"><h6>All Cabling Terminations Are Tested To Guarantee Quality Assurance</h6></div>
                        </div>

                        <div className="card" style={{border: 'none'}}> 
                            <div className="icon">{checkSv}</div>
                            <div className="card-title"><h6>Experienced And Professional Technicians With Years Of Experience</h6></div>
                        </div>

                        <div className="card" style={{border: 'none'}}>
                            <div className="icon">{checkSv}</div>
                            <div className="card-title"><h6>The Economical Choice</h6></div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="form" className="brainstorm-container">
                <div className="brainstorm-header"><h2>Request A Free Network Cabling Quote</h2></div>
                <p className="brainstorm-sub-title">The consultation is free, what are you waiting for?</p>
                <CablingForm />
            </div>
            <Footer />
        </>
    )
}
