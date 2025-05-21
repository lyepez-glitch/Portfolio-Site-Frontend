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

function ProjectDetail({ setProjDetailsId,project }: ProjDetailProps) {
  return (
    <>
      <div className="projDetailsContainer">
        <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
          <div style={{ display: 'block',flexBasis: '100%',display: 'block' }}><b>Challenges</b></div>
          <div style={{width:'100px',fontSize: '10px',backgroundColor:'lightgray',padding: '10px 10px',border: '2px solid black'}}>{project.challenges}</div>
        </div>

        <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
          <div style={{ display: 'block',flexBasis: '100%',display: 'block' }}><b>Tech used</b></div>
          <div style={{width:'100px',fontSize: '10px',backgroundColor:'lightgray',padding: '10px 10px',border: '2px solid black'}}>{project.techUsed}</div>
        </div>

        <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center'}}>
          <div style={{ display: 'block',flexBasis: '100%'}}><b>Features</b></div>
          <div style={{width:'100px',fontSize: '10px',backgroundColor:'lightgray',padding: '10px 10px',border: '2px solid black'}}>{project.features}</div>
        </div>


        <div><b style={{display: 'block',flexBasis: '100%'}}>View Demo</b>

        <div>
          <video width="320" height="240" controls>
            <source src={project.demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        </div>



        {Array.isArray(project.viewCode) ? (
          project.viewCode.map((repo, index) => (
            <div key={index}>
              <Link style={{textDecoration: 'none'}} to={repo}>View Code {index + 1}</Link>
            </div>
          ))
        ) : (
          <>
          <Link style={{textDecoration: 'none'}} to={project.viewCode}><b>View Repo</b></Link>

          </>

        )}
        <button style={{height:'40px',marginTop:'20px',backgroundColor:'rgb(99, 91, 254)',color: '#fff',marginBottom: '20px',bottom: '-88px',width: '100px',borderRadius: '15px',padding:'5px'}} onClick={(e)=>setProjDetailsId(null)}>Close</button>
      </div>


    </>
  );
}

export default ProjectDetail;
