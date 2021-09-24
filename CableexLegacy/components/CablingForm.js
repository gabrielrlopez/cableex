import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Forms.css";
import Spinner from './Spinner'

const CablingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyname: '',
        email: '',
        phonenumber: '',
        description: '',
        cables: '',
        networkDevices: '',
        securityCameras: '',
        date: '',
        floors: '',
        sent: false
    })
    const [loading, setLoading] = useState(false)

    const {name, companyname, email, phonenumber, description, cables, networkDevices, securityCameras, floors, date, sent} = formData

    const onChange = (e) => setFormData({...formData, [e.target.id]: e.target.value})


    const formSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        let data = {
            name,
            companyname,
            email,
            phonenumber,
            description,
            cables,
            networkDevices,
            securityCameras,
            floors,
            date,
        }

        try {
            await axios.post(`${process.env.REACT_APP_NODE_API}/api/cablingform`, data)
            setLoading(false)
            resetForm()
            setFormData({
                sent: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    const resetForm = () => {
        setFormData({
            name: '',
            companyname: '',
            email: '',
            phonenumber: '',
            cables: '',
            networkDevices: '',
            securityCameras: '',
            date: '',
            floors: '',
            description: ''
        })

        setTimeout(() => {
            setFormData({
                sent: false,
            })
        }, 3000)
    }


    return (
        <div className="contain">
            <div className="form-wrapper">
                <div className="form">
                    <form className="contact-form" onSubmit={formSubmit}>
                        <p>
                            <label>Name</label>
                            <input
                                id="name"
                                className="input"
                                type="text"
                                name="name"
                                value={name || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>
                        <p>
                            <label>Company Name</label>
                            <input
                                id="companyname"
                                className="input"
                                type="text"
                                name="companyname"
                                value={companyname || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>

                        <p>
                            <label>Email</label>
                            <input
                                id="email"
                                className="input"
                                type="email"
                                name="email"
                                value={email || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>

                        <p>
                            <label>Phone Number</label>
                            <input
                                id="phonenumber"
                                className="input"
                                type="text"
                                name="phonenumber"
                                value={phonenumber || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>

                        <p>
                            <label>Number of Cables Needed</label>
                            <input
                                id="cables"
                                className="input"
                                type="text"
                                name="cables"
                                value={cables || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>

                        <p>
                            <label>Number of Network Devices</label>
                            <input
                                id="networkDevices"
                                className="input"
                                type="text"
                                name="networkDevices"
                                value={networkDevices || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>
                            
                        <p>
                            <label>Number of Security Cameras</label>
                            <input
                                id="securityCameras"
                                className="input"
                                type="text"
                                name="securityCameras"
                                value={securityCameras || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>

                        <p>
                            <label>Number of Floors In Space</label>
                            <input
                                id="floors"
                                className="input"
                                type="text"
                                name="floors"
                                value={floors || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>

                        <p>
                            <label>Date Needed By</label>
                            <input
                                id="date"
                                className="input"
                                type="text"
                                name="date"
                                value={date || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>

                        <p className="full-width">
                            <label>Any details you would like to add?</label>
                            <textarea
                                id="description"
                                className="input"
                                type="textarea"
                                name="description"
                                value={description || ''}
                                onChange={e => onChange(e)}
                                required
                            />
                        </p>
                        <p className="full-width">
                            <button className="btnForm">Submit</button>
                        </p>

                        <div className={loading ? "spinner" : "spinner hidden"}>
                            <Spinner />
                        </div>

                        <div className= {sent ? "modal" : "modal hidden"}>
                            <h2>Your request has been submitted.</h2>
                        </div>

                        <div className={sent || loading ? "overlay" : "overlay hidden"}></div>

                    </form >
                </div>
            </div>
        </div>
    )
    
}

export default CablingForm