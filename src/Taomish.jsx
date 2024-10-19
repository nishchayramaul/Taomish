import { useState } from 'react';
import './Styling/style.css';

export const Taomish = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [activeTab, setActiveTab] = useState(null); 

    const toggleTab = (tab) => {
        setActiveTab(activeTab === tab ? null : tab);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
        alert("Message sent successfully");
    };

    return (
        <div className="container">
            <div className="form-container">
                <h3 className="heading">Welcome Back</h3>
                <p className="para">Login to your CRTM application account</p>
                <div className="tabs">
                    <div 
                        className={`tab ${activeTab === "sys" ? "active" : ""}`} 
                        onClick={() => toggleTab("sys")}
                    >
                        System admin
                    </div>
                    <div 
                        className={`tab ${activeTab === "bus" ? "active" : ""}`} 
                        onClick={() => toggleTab("bus")}
                    >
                        Business User
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='loginForm'>
                    <div className="emailContainer">
                        <input 
                            className='formInput' 
                            value={email} 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="passwordContainer">
                        <input 
                            className='formInput' 
                            placeholder="Enter your Password" 
                            value={password}  
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="button">Login</button>
                </form>
                <div className="bottomContainer">
                    <a href='#'>Forgot your password?</a> 
                    <p id="bottompara">Keep me logged in</p>
                </div>
            </div>
            <div className="footer">
                <div className="bottomContainers">Login as a Guest account</div>
                <div className="bottomContainers">Not a customer yet? Sign up</div>
            </div>
        </div>
    );
};