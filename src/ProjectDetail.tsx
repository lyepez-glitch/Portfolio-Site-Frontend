import { Link } from 'react-router-dom';

type ProjDetailProps = {
  project: {
    id: string;
    title: string;
    desc: string;
    demo: string;
    challenges: string;
    techUsed: string;
    features: string;
    viewCode: string | string[]; // Can be a string or an array
  };
};

function ProjectDetail({ project }: ProjDetailProps) {
  return (
    <>
      <div className="projDetailsContainer">
        <div>
          <div style={{ display: 'block' }}>Challenges:</div>
          {project.challenges}
        </div>
        <br />
        <div>
          <div style={{ display: 'block' }}>Tech used:</div>
          {project.techUsed}
        </div>
        <br />
        <div>
          <div style={{ display: 'block' }}>Features:</div>
          {project.features}
        </div>
        <br />
        <Link to={project.demo}>View demo</Link>
        <br />
        <br />
        {Array.isArray(project.viewCode) ? (
          project.viewCode.map((repo, index) => (
            <div key={index}>
              <Link to={repo}>View Code {index + 1}</Link>
            </div>
          ))
        ) : (
          <Link to={project.viewCode}>View Code</Link>
        )}
      </div>
    </>
  );
}

export default ProjectDetail;
