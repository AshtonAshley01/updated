import React, { useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error messages

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Successfully logged in
                navigate('/group-activity'); // Redirect to Group Activity page
            })
            .catch((error) => {
                setError(error.message); // Display error message
            });
    };

    return (
        <div className="login-container bg-[#141d2b] w-full h-screen flex items-center justify-center text-white">
            <div className="login-form max-w-[400px] p-6 rounded shadow-lg bg-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                
                {error && <p className="error text-red-500 text-sm mb-3">{error}</p>}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#50b49b] p-2 rounded font-medium hover:bg-[#50b49b86] transition"
                    >
                        Log In
                    </button>
                </form>

                <p className="mt-4 text-center text-sm">
                    Don't have an account? <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
