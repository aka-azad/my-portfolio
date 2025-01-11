import { useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaLocationArrow,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import bgImage from "../assets/bg-connect.webp";
import Swal from "sweetalert2";

function ContactMe() {
  const form = useRef();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!emailOrPhone) {
      newErrors.emailOrPhone = "Email or cell number is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone) &&
      !/^\+?\d{10,15}$/.test(emailOrPhone)
    ) {
      newErrors.emailOrPhone = "Please enter a valid email or phone number";
    }
    if (!message) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_JS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setEmailOrPhone("");
          setMessage("");
          setErrors({});
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message, please try again.",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 text-white rounded-lg my-4 bg-cover bg-fixed bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Form */}
          <div className="rounded-lg  p-6 mb-8 md:mb-0">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="email-phone"
                  className="block text-sm font-semibold mb-2"
                >
                  Email or Cell Number
                </label>
                <input
                  type="text"
                  name="user_email_phone"
                  id="email-phone"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                  placeholder="Enter your email or cell number"
                />
                {errors.emailOrPhone && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.emailOrPhone}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  text-black"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full btn text-black py-2 px-4 rounded-md hover:bg-accent transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Right Side - Contact Info */}
          <div className="p-4">
            <div className="rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="mb-4 flex items-center">
                <FaLocationArrow className="mr-4 text-orange-500" />
                <p className="font-semibold">
                  My Current City: Sylhet, Bangladesh.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-orange-500 mr-4" />
                <a
                  href="mailto:ashrafazad86@gmail.com"
                  className="hover:underline"
                >
                  ashrafazad86@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-orange-500 mr-4" />
                <a href="tel:+8801640738245" className="hover:underline">
                  +880 164 073 8245
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaLinkedin className="text-orange-500 mr-4" />
                <a
                  href="https://www.linkedin.com/in/ashrafuzzaman-azad-web-student/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaGithub className="text-orange-500 mr-4" />
                <a
                  href="https://github.com/aka-azad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaFacebook className="text-orange-500 mr-4" />
                <a
                  href="https://www.facebook.com/ashraf.azad.86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
