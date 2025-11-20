import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Quote.css";

const Quote = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_gckyev6",
        "template_q2lwu8d",
        form.current,
        "PxZQRqbV_e0A3XbCD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="quote-page">
      <div className="quote-card">
        <h2 className="quote-title">Request a Project Quote</h2>
        <form ref={form} onSubmit={handleSubmit} className="quote-form">
          <input type="text" name="name" placeholder="Full Name / Company Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="text" name="phone" placeholder="Phone Number" />
          <select name="projectType" required>
            <option value="">Select Project Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Infrastructure</option>
            <option>Industrial</option>
          </select>
          <input type="text" name="location" placeholder="Project Location" />
          <input type="text" name="budget" placeholder="Estimated Budget (optional)" />
          <textarea name="message" placeholder="Brief Project Description" rows="4" required></textarea>

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Submit Quote Request"}
          </button>
        </form>

        {isSent && (
          <p className="quote-success">✅ Your quote request has been sent successfully!</p>
        )}
      </div>
    </div>
  );
};

export default Quote;