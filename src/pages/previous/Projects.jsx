import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import projectService from "../services/project.service";
// css

// components

function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await projectService.getAllProjects()

      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section>
      <h1>Projects</h1>
      {projects.map((project) => {
        return (
          // Assign it a key otherwise react will complain if you map ovr an array without a key
          <Link to={`/projects/${project._id}`} key={project._id}>
            <h3>{project.title}</h3>
          </Link>
        );
      })}
    </section>
  );
}

export default Projects;
