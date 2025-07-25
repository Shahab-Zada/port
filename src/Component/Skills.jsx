import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section className="container py-5">
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="fw-bold display-6">🚀 Skills & Expertise</h2>
        <p className="text-muted lead">
          I craft fast, scalable, and visually stunning web apps powered by modern stacks
          and elegant code. Here’s what I bring to the table:
        </p>
      </motion.div>

      <motion.div
        className="row gy-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
       
        <motion.div
          className="col-12 col-md-6 col-lg-4"
          variants={cardVariants}
        >
          <motion.div
            className="card h-100 shadow-sm p-3 border-0 border-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-body ">
              <h5 className="card-title fw-semibold">⚛️ Frontend</h5>
              <p className="text-muted small">Interactive and responsive user interfaces</p>
              <ul className="list-unstyled">
                <li>React.js (Hooks, Context API)</li>
                <li>HTML5, CSS3, Bootstrap, Tailwind, MUI</li>
                <li>Framer Motion (animations), Axios</li>
                <li>Responsive & Accessible Design</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

   
        <motion.div
          className="col-12 col-md-6 col-lg-4"
          variants={cardVariants}
        >
          <motion.div
            className="card h-100 shadow-sm p-3 border-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-body">
              <h5 className="card-title fw-semibold">🌐 Backend & APIs</h5>
              <p className="text-muted small">Secure and scalable server-side logic</p>
              <ul className="list-unstyled">
                <li>Node.js, Express.js</li>
                <li>JWT, OAuth, Role-Based Authentication</li>
                <li>MongoDB (NoSQL, Aggregations)</li>
                <li>RESTful API Design & Integration</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-12 col-md-12 col-lg-4"
          variants={cardVariants}
        >
          <motion.div
            className="card h-100 shadow-sm p-3 border-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-body">
              <h5 className="card-title fw-semibold">🔧 Tools & Others</h5>
              <p className="text-muted small">Efficiency meets reliability</p>
              <ul className="list-unstyled">
                <li>Git & GitHub (Version Control)</li>
                <li>Routing & State Management</li>
                <li>Cloudinary (Media), Deployment</li>
                <li>System Administration, IT Support</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
