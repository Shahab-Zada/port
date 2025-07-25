import React from 'react'
import { motion } from "framer-motion";
export default function About() {
  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.2 },
    }),
  };
  return (
    
    <div>
       {/* About / Resume Section */}
      <section id="about" className="py-5 bg-white">
        <div className="container">
          <motion.h2
            className="text-center mb-5 fw-bold text-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            About Me
          </motion.h2>

          <div className="row gy-4">
            {/* Education */}
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="shadow rounded p-4 h-100">
                <h4 className="fw-bold mb-3 text-primary">Education</h4>
                <p className="mb-1 fw-bold">
                  Abdul Wali Khan University Mardan
                </p>
                <p className="mb-1 text-lg">BS Computer Science(Hons)</p>
                <p className="text-clg">GPA: 3.35/4.0</p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <div className="shadow rounded p-4 h-100">
                <h4 className="fw-bold mb-3 text-primary ">Skills</h4>
                <ul className="list-unstyled">
                  <li className="text-lg">React.js, Node.js, Express.js, MongoDB</li>
                  <li className="text-lg">HTML5, CSS3, Bootstrap, Material-UI, Tailwind</li>
                  <li className="text-lg">Hooks, Context API, Axios</li>
                  <li className="text-lg">JWT, OAuth, Role-Based Auth</li>
                  <li className="text-lg">Cloudinary, Framer Motion, Git</li>
                  <li className="text-lg">Routing,Switching,System Administrator</li>
                </ul>
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              className="col-md-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
            >
              <div className="shadow rounded p-4 h-100">
                <h4 className="fw-bold mb-3 text-primary">Projects</h4>
                <p className="fw-bold mb-1">
                  Final Year Project Management System
                </p>
                <ul>
                  <li className="text-lg">Role-based dashboards for students & teachers</li>
                  <li className="text-lg">Google Drive API for secure PDF submissions</li>
                  <li className="text-lg">Managed 200+ student groups, 20+ faculty</li>
                </ul>
                <p className="fw-bold mt-3 mb-1">
                  E-Commerce Website – Dr. Fazal Herbiotics
                </p>
                <ul>
                  <li className="text-lg">Herbal products shop with role-based admin panel</li>
                  <li className="text-lg">Cloudinary CDN for optimized images</li>
                  <li className="text-lg">Persistent cart, CRUD operations</li>
                </ul>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="col-md-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4}
            >
              <div className="shadow rounded p-4 h-100">
                <h4 className="fw-bold mb-3 text-primary">Certifications</h4>
                <ul>
                  
                  <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/FPM4K7R9WQ9A"
                      target="_blank"
                      rel="noopener noreferrer"
                   
                    >
                      Introduction to Front-End Development (META)
                    </a>
                  </li>
                  <li   className="text-lg ">
                    <a
                      href="https://coursera.org/verify/GSDJG5JCUMV7"
                      target="_blank"
                      rel="noopener noreferrer"
                       
                    >
                      Programming with JavaScript (META)
                    </a>
                  </li>
                  <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/RZ94AXLNXWSD"
                      target="_blank"
                      rel="noopener noreferrer"
                       
                    >
                      React Basics (META)
                    </a>
                  </li>
                  <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/ENXCI43LC67Q"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Advanced React (META)
                    </a>
                  </li>
                  <li    className="text-lg ">React Hackathon (FLUXXION) – ID: 100136</li>
                   <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/5QR35TPHQPS2  "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
              Technical Support Fundamentals (META)
                    </a>
                  </li>
                  <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/S25X7AKFAK39 "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    The Bits and Bytes of Computer Networking (META)
                    </a>
                  </li>

 <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/Z9H4GW6Y36FS "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                   IT Security: Defense against the digital dark arts (META)
                    </a>
                  </li>

 <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/BVT4N8AAAYQU  "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    Operating Systems and You: Becoming a Power 
 User (META)
                    </a>
                  </li>


 <li    className="text-lg ">
                    <a
                      href=" 
https://coursera.org/verify/FQ9DASBKHUAR "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                System Administration and IT Infrastructure 
 Services(META)
                    </a>
                  </li>
 <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/RT07474TE2HX   "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
             Introduction To Networking (Nvidia)
                    </a>
                  </li>

                  <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/FT8MBTZ3JPKF   "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
             Get Started with Spreadsheet Applications: Excel (SkillUp )
                    </a>
                  </li>
                   <li    className="text-lg ">
                    <a
                      href="https://coursera.org/verify/YWI6HS94AXEB   "
                      target="_blank"
                      rel="noopener noreferrer"
                    >Introduction to Computers and Office Productivity
 Software ( The Hong Kong University of Science and
 Technology)
                    </a>
                  </li>

 <li className="text-lg ">FREELANCING (DigiSkills)    Certificate ID: ZYF3WWFMK</li>

<li className="text-lg ">Diggital Literacy (DigiSkills)   Certificate ID: 5D86XT2Mk</li>

<li className="text-lg ">Google IT Support Badge(Google) </li>

<li className="text-lg ">Networks Badge(Cisco) </li>






                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
