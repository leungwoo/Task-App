import React, { useState } from 'react';


const Forms = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: false,
        employment: "",
        favColor: ""

    });

    function handleChange(event) {

        const { name, value, checked, type } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formData);
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='First Name'
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder='Last Name'
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder='email'
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <textarea
                placeholder='comments'
                name="comments"
                onChange={handleChange}
                value={formData.comments}
            />
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor='isFriendly'>Are you Friendly?</label>
            <fieldset>
                <legend>Current employment status</legend>

                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployeed"
                    checked={formData.employment === "unemployeed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />

            </fieldset>
            <label htmlFor='favColor'>What's your favourite color?</label>
            <select
                value={formData.favColor}
                name="favColor"
                onChange={handleChange}>
                <option>Red</option>
                <option>Yellow</option>
                <option>Blue</option>
                <option>Green</option>

            </select>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Forms;