"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const templateParams = {
      from_name: name, // Name of the sender (user)
      from_email: email, // User's email address (sender email)
      subject: subject, 
      message: message,
    };

    const serviceID = "service_sqfjzrq"; // Your EmailJS Service ID
    const templateID = "template_roneanq"; // Your Template ID
    const userID = "gxk-o26IVIMzc_zdi"; // Your EmailJS User ID (make sure this is correct)

    try {
      // Sending email using EmailJS
      const result = await emailjs.send(serviceID, templateID, templateParams, userID);

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: unknown) {
      setStatus("Error sending message. Please try again.");

      if (error instanceof Error) {
        console.error("EmailJS error:", error.message);
      } else if (typeof error === "object" && error !== null) {
        try {
          console.error("Unexpected error object:", JSON.stringify(error, null, 2));
        } catch (stringifyError) {
          console.error("Error stringifying the error object:", stringifyError);
        }
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact-form py-16 shadow-2xl rounded-xl max-w-3xl mx-auto p-8 bg-gradient-to-r from-black to-[#2f4f6e] animate__animated animate__fadeIn">
      <h2 className="text-center text-4xl font-bold text-white mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-transparent rounded-lg border-[3px] border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 text-white"
            style={{
              borderImage: "linear-gradient(to right, #4f46e5, #9333ea, #3b82f6) 1",
            }}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-transparent px-4 py-3 rounded-lg border-[3px] border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 text-white"
            style={{
              borderImage: "linear-gradient(to right, #4f46e5, #9333ea, #3b82f6) 1",
            }}
            required
          />
        </div>

        {/* Subject Input */}
        <div className="mb-4">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full bg-transparent px-4 py-3 rounded-lg border-[3px] border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 text-white"
            style={{
              borderImage: "linear-gradient(to right, #4f46e5, #9333ea, #3b82f6) 1",
            }}
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full text-white bg-transparent px-4 py-3 rounded-lg border-[3px] border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
            style={{
              borderImage: "linear-gradient(to right, #4f46e5, #9333ea, #3b82f6) 1",
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-indigo-700 text-white rounded-lg hover:bg-indigo-900 transition duration-300 transform hover:scale-105 active:scale-95"
        >
          Send Message
        </button>
      </form>

      {/* Display status message */}
      {status && <p className="text-center mt-6 text-lg font-semibold text-white">{status}</p>}
    </div>
  );
};

export default Contact;
