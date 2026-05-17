import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const colors = {
    darkRed: '#c14545',         // Primary dark red
    mediumRed: '#e45858',       // Medium red for accents
    lightRed: '#ff6b6b',        // Light red for hover states
    veryLightRed: '#ff8080',    // Very light red for subtle elements
    darkestBg: '#121212',       // Darkest background
    darkBg: '#1e1e1e',          // Dark background for sections
    lightBg: 'rgba(255, 75, 75, 0.08)', // Light red-tinted background
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What does \"pwned\" mean?",
      answer: "The word \"pwned\" has origins in video game culture and is a leetspeak derivation of the word \"owned\", due to the proximity of the \"o\" and \"p\" keys. It's typically used to imply that someone has been controlled or compromised, for example \"I was pwned in the Adobe data breach\"."
    },
    {
      question: "What is a \"breach\" and where has the data come from?",
      answer: "A \"breach\" is an incident where data is inadvertently exposed in a vulnerable system, usually due to insufficient access controls or security weaknesses in the software. HIBP aggregates breaches and enables people to assess where their personal data has been exposed."
    },
    {
      question: "Are user passwords stored in this site?",
      answer: "When email addresses from a data breach are loaded into the site, no corresponding passwords are loaded with them. Separately to the pwned address search feature, the Pwned Passwords service allows you to check if an individual password has previously been seen in a data breach."
    },
    {
      question: "What is a \"paste\" and why include it on this site?",
      answer: "A \"paste\" is information that has been \"pasted\" to a publicly facing website designed to share content such as Pastebin. These services are favoured by hackers due to the ease of anonymously sharing information and they're frequently the first place a breach appears."
    },
    {
      question: "How is the data stored?",
      answer: "The breached accounts sit in Windows Azure table storage which contains nothing more than the email address or username and a list of sites it appeared in breaches on."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-wrapper">
      <div className='text-center mb-5'>
      <div style={{
                background: `linear-gradient(135deg, ${colors.darkRed}, ${colors.mediumRed})`,
                display: 'inline-block',
                padding: '15px 30px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(193, 69, 69, 0.3)'
              }}>
                <h1 className="text-white mb-0">Frequently Asked Questions</h1>
        </div>
      </div>
      
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;