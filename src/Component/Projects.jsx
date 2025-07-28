import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../ProjectData.js";


export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState("images");

  const handleOpen = (project, type) => {
    setSelected(project);
    setView(type);
  };

  const handleClose = () => {
    setSelected(null);
    setView("images");
  };
  
  return (
    <section
      className="py-5 bg-gradient"
      style={{ background: "linear-gradient(to right, #f8fafc, #e2e8f0)" }}
    >
      <div className="container">
        <motion.h2
          className="text-center mb-5 fw-bold text-primary"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-12 col-md-10 col-lg-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="card glassmorphism h-100"
                style={{
                  cursor: "default",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                }}
              >
                
                <div className="card-body">
                  <h5 className="fw-bold text-primary">{project.title}</h5>
                  <p className=" text-lg">{project.tech.join(", ")}</p>
                  
                  {/* 📝 Full Description */}
                  <p className="text-lg">{project.description}</p>

                  <div className="d-flex gap-2 mt-3">
                    
                  

                     <button className="btn btn-primary btn-sm">
                      Link:Project is not deployed till now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.85)",
                zIndex: 1050,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
              onClick={handleClose}
            >
              <motion.div
                className="modal-content bg-white rounded shadow"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                style={{ maxWidth: "900px", width: "100%", padding: "1rem" }}
                onClick={(e) => e.stopPropagation()}
              >
                <h4 className="text-primary mb-2">{selected.title}</h4>
                <p className="text-lg">{selected.tech.join(", ")}</p>
                <p>{selected.description}</p>

               
                {view === "video" && (
                  <video
                    controls
                    autoPlay
                    src={selected.video}
                    className="w-100 rounded mb-3"
                    style={{ maxHeight: "400px" }}
                  ></video>
                )}

                <button
                  onClick={handleClose}
                  className="btn btn-danger mt-2"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
