import Data from "../../data/db.json"
import Card from '../components/cardProject';

const Projects = () => {

    const{projects}=Data;
    return(
        <section className="projects section" id="projects">
            <h2 className="section__title-1">
                <span>Projects.</span>
            </h2>
            <div className="projects__container container grid">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        image={project.image}
                        subtitle={project.subtitle}
                        title={project.title}
                        description={project.description}
                        links={project.links}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
