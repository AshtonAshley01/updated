import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";




const Form = ({ onSubmit }) => {

    const [formData, setFormData] = useState({ Genre: "", Language: "", Year: "" })
    const navigate = useNavigate();


    const handleChange = (e) => {

        // After submit button:
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        navigate("/picks");
    }

    return (
        <div name="Form" className='bg-[#141d2b] w-full h-screen text-white'>
            <div className='max-w-[500px] mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className="animate-text pb-20 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl text-center">
                    What type of movies are you looking for?
                </h1>
                <form className='flex-column p-4 outline-double outline-cyan-500 rounded outline-offset-8 ' onSubmit={handleSubmit}>
                    <label className="font-medium text-lg pt-3">
                        Genre:
                        <input
                            className='mt-2 w-full rounded-lg h-10 mb-2 block border-2 border-600 placeholder:font-normal px-2 text-black'
                            placeholder="Action, Thriller, Comedy..."
                            type="text"
                            name="genre"
                            value={formData.g}
                            onChange={handleChange}
                        />
                    </label >
                    <br />
                    <label className="font-medium text-lg pt-3">
                        Year:
                        <input
                            className='mt-2 w-full rounded-lg h-10 mb-2 block border-2 border-600 placeholder:font-normal px-2 text-black'
                            placeholder="2005"
                            type="text"
                            name="year"
                            value={formData.y}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label className="font-medium text-lg pt-3">
                        Original Language:
                        <input
                            className='mt-2 w-full rounded-lg h-10 mb-2 block border-2 border-600 placeholder:font-normal px-2 text-black'
                            placeholder="Spanish, French, German ..."
                            type="text"
                            name="language"
                            value={formData.l}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <div className='flex justify-center'>
                    <button
                        className='rounded border border-blue-600 bg-[#50b49b] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
                        type="submit"
                    >Submit
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form