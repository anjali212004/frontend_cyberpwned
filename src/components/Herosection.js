import React, { useState, useEffect, useMemo } from "react";
import "./HeroSection.css";
import videoSrc from "../images/2.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const emails = useMemo(() => [
    "yours@example.com",
    "test@cyberpwned.com",
    "secure@mail.com"
  ], []);
  const subtitle = "Worried about data breaches? Verify your email now.";

  const [displayedText, setDisplayedText] = useState("");
  const [emailIndex, setEmailIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [subtitleText, setSubtitleText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [safeMessage, setSafeMessage] = useState("");
  // Email Validation & API States
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [breachResults, setBreachResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [breachCount, setBreachCount] = useState(0);
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Validate Email Format
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setUserEmail(email);
    setIsEmailValid(validateEmail(email));
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkEmailBreaches();
    }
  };


  // Typing animation for emails
  useEffect(() => {
    const currentEmail = emails[emailIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const typeEffect = setTimeout(() => {
      if (!isDeleting && charIndex < currentEmail.length) {
        setDisplayedText((prev) => prev + currentEmail[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentEmail.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setEmailIndex((prev) => (prev + 1) % emails.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typeEffect);
  }, [charIndex, isDeleting, emailIndex, emails]);

  // Subtitle Typing Animation
 // Subtitle Typing Animation
useEffect(() => {
  let timeout;
  if (isTyping && subtitleIndex < subtitle.length) {
    timeout = setTimeout(() => {
      setSubtitleText((prev) => prev + subtitle[subtitleIndex]);
      setSubtitleIndex((prev) => prev + 1);
    }, 50);
  } else if (subtitleIndex === subtitle.length) {
    setIsTyping(false);
    setTimeout(() => {
      setIsTyping(true);
      setSubtitleText(""); // Start from the beginning
      setSubtitleIndex(0);
    }, 3000); // Smooth transition delay
  }
  return () => clearTimeout(timeout);
}, [subtitleIndex, isTyping, subtitle]);


  // Check email breaches
  const checkEmailBreaches = async () => {
    if (!userEmail || !validateEmail(userEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setIsLoading(true);
    setShowResults(false);
    setSafeMessage("");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/breached`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userEmail }),
      });

      const data = await response.json();

      if (data.success && data.data.length > 0) {
        setBreachResults(data.data);
        setBreachCount(data.data.length);
      } else {
        setBreachResults(null);
        setBreachCount(0);
        setSafeMessage(data.message);
      }

      setShowResults(true);
    } catch (error) {
      console.error("Error checking breach:", error);
      setBreachResults(null);
      setBreachCount(0);
      setSafeMessage("An error occurred. Please try again.");
      setShowResults(true);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="hero-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay">
        <div className="content">
          <h1 className="hero-title">
            <span className="highlight"> cyber</span><span >pwned</span>
          </h1>

          {!showResults && (
            <>
              <h2>{subtitleText}</h2>
              <p className="text-white">Enter your email to check for breaches.</p>

              {/* Email Input */}
              <div className="input-wrapper">
                <input
                  type="email"
                  className={`hero-input ${isEmailValid ? "" : "invalid"}`}
                  placeholder={displayedText}
                  value={userEmail}
                  onChange={handleEmailChange}
                  onKeyDown={handleKeyDown} 
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </div>



              {/* Buttons */}
              <div className="button-group">
                <button
                  className="btn"
                  onClick={checkEmailBreaches}
                  disabled={isLoading} // Removed `!isEmailValid` from disabled condition
                >
                  {isLoading ? "Checking..." : "Check Now"}
                </button>

                <Link className="btn" to="/about">Learn More</Link>
              </div>
            </>
          )}

          {/* Results Section */}
          {showResults && (
            <div className="results-container">
            {breachCount > 0 ? (
              <>
                <h2 className="breach-title">
                  <span className="breach-count text-white">{breachCount}</span> Breaches Found!
                </h2>
                <div className="table-wrapper">
                  <table className="breach-table">
                    <thead>
                      <tr>
                        <th>URL</th>
                        <th>Email</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      {breachResults.map((breach, index) => (
                        <tr key={index}>
                          <td>
                            <a href={`https://${breach.url}`} target="_blank" rel="noopener noreferrer">
                              {breach.url}
                            </a>
                          </td>
                          <td>{breach.user}</td>
                          <td>{breach.password}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <p>{safeMessage}</p>
            )}

            <button className="btn back-btn" onClick={() => setShowResults(false)}>
              Check Another Email
            </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
