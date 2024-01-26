import React, { useState } from 'react';
import axios from 'axios';
import './rsvp.css';

const Rsvp: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        rsvp: true, // Default to true
        no_of_guests: '',
        info: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let { name, value, type }:any = e.target;
        if(value == 'true'){
            value = true;
        }else if (value == 'false'){
            value = false;
        }
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://wnuno6heic.execute-api.eu-west-2.amazonaws.com/Dev/rsvp-post', formData);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="card-header-title">RSVP</div>
                </div>
                <div className="card-content">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="name"><small>Name</small></label>
                            <div className="control">
                                <input
                                    className='input'
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name..."
                                    onChange={handleChange}
                                    />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="rsvp"><small>Will you be joining us?</small></label>
                            <div className="control">
                                <label className="radio">
                                    <input
                                        type="checkbox"
                                        name="rsvp"
                                        value="true"
                                        onChange={handleChange}
                                        />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input
                                        type="checkbox"
                                        name="rsvp"
                                        value="false"
                                        onChange={handleChange}
                                        />
                                    No
                                </label>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="no_of_guests"><small>How many people are you bringing?</small></label>
                            <div className="no_of_guests">
                                <input
                                    className='input'
                                    type="text"
                                    name="no_of_guests"
                                    id="no_of_guests"
                                    placeholder="Enter the number of guests..."
                                    onChange={handleChange}
                                    />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="info"><small>Any extra information?</small></label>
                            <div className="info">
                                <textarea
                                    className='textarea'
                                    name="info"
                                    id="info"
                                    placeholder="Enter any extra information..."
                                    onChange={handleChange}
                                    />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <button type="submit" className="button is-success">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Rsvp;
