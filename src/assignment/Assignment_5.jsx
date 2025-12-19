import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

import "./Assignment_5.css";

export default function Assignment_5() {
    const [theme, setTheme] = useState ("light");

    return(
        <div className="container5" data-theme={theme}>
            <nav className="nav5">
                <button className="theme-toggle" onClick={() => 
                    setTheme(theme === "light" ? "dark" :"light")
                }>
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
            </nav>

            <section className="card5">
                <header className="brand">
                    <div className="logo">dI</div>
                    <span>Intellivex AI</span>
                </header>

                <h1>Create your account</h1>
                <p className="subtitle">
                    Discover Exclusive Benefits - Register Now for Early Access and 
                    Special Deals!
                </p>

                <div className="social">
                    <button className="social-btn google-btn">
                        <GoogleIcon className="google-icon"/>
                        Continue with google
                    </button>

                    <button className="social-btn apple-btn">
                        <AppleIcon/>
                        Continue with Apple
                    </button>
                </div>
                <form className="form">
                    <label>
                        Name* 
                        <input placeholder="e.g. Arjun Singh" />
                    </label>

                     <label>
                        Email* 
                        <input placeholder="e.g. arjun@google.com" />
                    </label> 

                    <label>
                        Phone Number* 
                        <input placeholder="e.g. +915432109876" />
                    </label>

                    <button className="primary-btn">
                        Secure My Spot!
                    </button>
                </form>

                <p className="terms">
                    By creating an account you agree with our{" "}
                    <span>Terms of Service</span>, <span>Privacy Policy</span>, and our
                    default <span>Notification Settings</span>.
                </p>

                <p className="signin">
                    Already have an account? <span>Sigh in</span>
                </p>

            </section>
        </div>
    )
}