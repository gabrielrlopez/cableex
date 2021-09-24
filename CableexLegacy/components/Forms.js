import React, { Component } from 'react';
import axios from 'axios';
import "../styles/Forms.css";
import Spinner from './Spinner'

export default class Forms extends Component {
    state = {
        name: '',
        companyname: '',
        email: '',
        phonenumber: '',
        description: '',
        sent: false,
        loading: false
    }

    //handle inputs
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleCompanyName = (e) => {
        this.setState({
            companyname: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePhoneNumber = (e) => {
        this.setState({
            phonenumber: e.target.value
        })
    }

    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }


    formSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        let data = {
            name: this.state.name,
            companyname: this.state.companyname,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
            description: this.state.description
        }

        try {
            await axios.post(`${process.env.REACT_APP_NODE_API}/api/form`, data)
            this.setState({
                loading: false
            })
            this.resetForm()
            this.setState({
                sent: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    resetForm = () => {
        this.setState({
            name: '',
            companyname: '',
            email: '',
            phonenumber: '',
            description: ''
        })

        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000)
    }

    render() {
        return (
            <div className="contain">
                <div className="form-wrapper">
                    <div className="form">
                        <form className="contact-form" onSubmit={this.formSubmit}>
                            <p>
                                <label>Name</label>
                                <input
                                    className="input"
                                    type="text"
                                    name="name"
                                    value={this.state.name || ''}
                                    onChange={this.handleName}
                                    required
                                />
                            </p>
                            <p>
                                <label>Company Name</label>
                                <input
                                    className="input"
                                    type="text"
                                    name="companyname"
                                    value={this.state.companyname || ''}
                                    onChange={this.handleCompanyName}
                                    required
                                />
                            </p>

                            <p>
                                <label>Email</label>
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    value={this.state.email || ''}
                                    onChange={this.handleEmail}
                                    required
                                />
                            </p>

                            <p>
                                <label>Phone Number</label>
                                <input
                                    className="input"
                                    type="text"
                                    name="phonenumber"
                                    value={this.state.phonenumber || ''}
                                    onChange={this.handlePhoneNumber}
                                    required
                                />
                            </p>

                            <p className="full-width">
                                <label>What can we do for you?</label>
                                <textarea
                                    // placeholder="What can we do for you?"
                                    className="input"
                                    type="textarea"
                                    name="description"
                                    value={this.state.description || ''}
                                    onChange={this.handleDescription}
                                    required
                                />
                            </p>
                            <p className="full-width">
                                <button className="btnForm">Submit</button>
                            </p>

                            <div className={this.state.loading ? "spinner" : "spinner hidden"}>
                                <Spinner />
                            </div>

                            <div className= {this.state.sent ? "modal" : "modal hidden"}>
                                <h2>Your request has been submitted.</h2>
                            </div>

                            <div className={this.state.sent || this.state.loading ? "overlay" : "overlay hidden"}></div>
                        </form >
                    </div>
                </div>
            </div>
        )
    }
}