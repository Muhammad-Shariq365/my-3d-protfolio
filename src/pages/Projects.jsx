
import { projects } from '../constants';
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>
      <div>
      <p className='text-slate-500 mt-2 leading-relaxed'>
      Welcome to my world of projects! These are some endeavors that truly resonate with me. Take a dive into their realms and get inspired by the creativity within.
      </p>
      </div>
     <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project) => (
      <div className="lg:w-[400px] w-full" key={project.name}>
        <div className='block-container w-12 h-12'>
          <div className={`btn-back rounded-xl ${project.theme}`}/>
          <div className='btn-front rounded-xl flex justify-center items-center'>
            <img 
            src={project.iconUrl}
            alt="Project Icon"
            className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
        <div className='mt-5 flex flex-col'>
          <h4>
            {project.name}
          </h4>
          <p>
            {project.description}
          </p>
          <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
        </div>
      </div>
      ))}
     </div>
    </section>
  );
};

export default Projects;