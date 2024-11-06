import React, { useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', dob: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous errors
        setLoading(true); // Start loading
    
        // Basic validation
        if (!formData.email || !formData.password) {
            setError("Email and password are required.");
            setLoading(false);
            return;
        }
    
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters.");
            setLoading(false);
            return;
        }
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            console.log("User created:", userCredential.user);
            setLoading(false);
            console.log("Navigating to /group-activity"); // Debugging log
            navigate("/group-activity");
        } catch (error) {
            console.error("Error signing up:", error);
            setError(error.message);
            setLoading(false);
        }
    };
    

    return (
        <div className="signup-container bg-[#141d2b] min-h-screen flex items-center justify-center text-white">
            <form onSubmit={handleSignup} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

                {error && <p className="text-red-500 mb-4">{error}</p>}
                
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 rounded bg-gray-700 placeholder-gray-400 text-white"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 rounded bg-gray-700 placeholder-gray-400 text-white"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 rounded bg-gray-700 placeholder-gray-400 text-white"
                />
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full p-2 mb-5 rounded bg-gray-700 placeholder-gray-400 text-white"
                />
                
                <button
                    type="submit"
                    className="w-full p-2 rounded bg-[#50b49b] hover:bg-[#50b49b86] transition"
                    disabled={loading}
                >
                    {loading ? "Signing Up..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
};

export default Signup;
