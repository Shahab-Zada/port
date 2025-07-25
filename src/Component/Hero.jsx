import React from "react";
import { motion } from "framer-motion";
import developerImg from "../Assets/web.png";

export default function Home() {
  // card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
    hover: { scale: 1.05 },
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="py-5 bg-light min-vh-100 d-flex align-items-center"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Text Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-4 fw-bold mb-3"
              >
                Hi, I’m{" "}
                <span className="text-primary">Muhammad Shahab Zada</span>
              </motion.h1>

              <motion.h3
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-muted mb-4"
              >
                MERN Stack Web Developer
              </motion.h3>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="lead"
              >
                I build modern, full-stack web applications using the powerful
                MERN stack — MongoDB, Express.js, React.js, and Node.js.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                From creating elegant and responsive frontends to architecting
                secure, scalable backends, I deliver seamless user experiences
                and high-performance solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-5"
              >
                <a
                  href="/projects"
                  className="btn btn-primary btn-lg rounded-pill px-4 me-4 mt-1"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="btn btn-outline-primary btn-lg rounded-pill px-4"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>

            {/* Right: Developer Image */}
            <div className="col-lg-6 text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                }}
                style={{
                  background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
                  borderRadius: "50%",
                  padding: "10px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  display: "inline-block",
                  width: "315px",
                  height: "315px",
                }}
              >
                <img
                  src={developerImg}
                  alt="Developer illustration"
                  className="img-fluid"
                  style={{
                    borderRadius: "50%",
                    width: "100%",
                    height: "100%",
                    border: "6px solid white",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section as Animated Cards */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {[
              {
                title: "My Projects",
                text: "Explore a showcase of my recent work in web development.",
                link: "/projects",
                btn: "View Projects",
              },
              {
                title: "My Skills",
                text: "See what tools, technologies, and frameworks I excel at.",
                link: "/skills",
                btn: "View Skills",
              },
              {
                title: "About Me",
                text: "Get to know more about my journey and passion for coding.",
                link: "/about",
                btn: "About Me",
              },
              {
                title: "Contact",
                text: "Have a question or project idea? Let’s get in touch!",
                link: "/contact",
                btn: "Contact Me",
              },
            ].map((card, index) => (
              <div key={index} className="col-md-3">
                <motion.div
                  className="card h-100 shadow-sm"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  whileHover="hover"
                >
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-primary">{card.title}</h5>
                    <p className="text-dark">{card.text}</p>
                    <a
                      href={card.link}
                      className="btn btn-primary rounded-pill px-4"
                    >
                      {card.btn}
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
