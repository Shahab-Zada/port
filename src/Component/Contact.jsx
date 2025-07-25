import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sqb6z4d",     
        "template_8rcmsls",     
        formRef.current,
        "K_tSDBT4Qx96A0IDh"       
      )
      .then(
        () => {
          alert("✅ Message sent!");
          formRef.current.reset();
        },
        () => {
          alert("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="py-5 container">
      <motion.h1
        className="mb-4 text-center text-primary fw-bold"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-center mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I’d love to hear from you! Feel free to reach out anytime.
      </motion.p>

      {/* Outer 10-column centered row */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 border-1">

          {/* Animated Contact Form */}
          <motion.div
            className="mb-5 p-4 shadow rounded bg-white "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-center mb-4 text-primary fw-bold">
              Send me a message
            </h4>
            <form ref={formRef} onSubmit={handleSubmit} className="d-grid gap-3">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="form-control"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="form-control"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="form-control"
              ></textarea>
              <motion.button
                type="submit"
                className="btn btn-primary fw-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Cards - in one row */}
          <div className="row">
            <motion.div
              className="col-sm-6 col-md-4 mb-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <div className="card shadow-sm h-100 text-center p-4">
                <FaEnvelope size={36} className="text-primary mb-3" />
                <h5>Email</h5>
                <p>shahabzada302@gmail.com</p>
                <p>shahabzada51@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="col-sm-6 col-md-4 mb-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <div className="card shadow-sm h-100 text-center p-4">
                <FaPhoneAlt size={36} className="text-primary mb-3" />
                <h5>Phone</h5>
                <p>+92 3199001379</p>
              </div>
            </motion.div>

            <motion.div
              className="col-sm-6 col-md-4 mb-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <div className="card shadow-sm h-100 text-center p-4">
                <FaMapMarkerAlt size={36} className="text-primary mb-3" />
                <h5>Location</h5>
                <p>Islamabad, Pakistan</p>
              </div>
            </motion.div>

            <motion.div
              className="col-sm-6 col-md-4 mb-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <div className="card shadow-sm h-100 text-center p-4">
                <FaEnvelope size={36} className="text-primary mb-3" />
                <h5>LinkedIn</h5><br/>
                <a
                  href="https://www.linkedin.com/in/muhammadshahab-zada-134823348/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Muhammad Shahab Zada
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
