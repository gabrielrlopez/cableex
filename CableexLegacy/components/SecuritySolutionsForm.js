import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Forms.css";
import Spinnner from './Spinner'

const SecuritySolutionsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyname: '',
        email: '',
        phonenumber: '',
        date: '',
        sent: false
    })
    const [loading, setLoading] = useState(false)

    const {name, companyname, email, phonenumber, date, sent} = formData

    const onChange = (e) => setFormData({...formData, [e.target.id]: e.target.value})


    const formSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        let data = {
            name,
            companyname,
            email,
            phonenumber,
            date,
        }

        try {
            await axios.post(`${process.env.REACT_APP_NODE_API}/api/securityform`, data)
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
            date: '',
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
                            <button className="btnForm">Submit</button>
                        </p>

                        <div className={loading ? "spinner" : "spinner hidden"}>
                            <Spinnner />
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

export default SecuritySolutionsForm