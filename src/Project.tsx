import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
type ProjectType = {
  id: string,
  title:string,
  path: string,
  desc: string,
  demo: string,
  challenges: string,
  techUsed: string,
  features: string,
  viewCode: string,
  backend: string
}

function Project(){
  const [projects,setProjects] = useState<ProjectType[]>([])
  const [projDetailsId,setProjDetailsId] = useState<string>("");
  useEffect(() => {
    const projects = [
      {id:"1",title:"Messaging App",frontend:"https://messagingapp-deploy.onrender.com",desc:"Real time Messaging App",demo:"/recordings/messageApp.mp4",challenges:"integrating websockets",techUsed:"Django Channels, Django",features:"send,receive, update messages in real-time",viewCode:"https://github.com/lyepez-glitch/MessagingApp",backend:"https://messagingapp-deploy.onrender.com"},
      {id:"2",title:"Oracle Ecommerce App",backend:"https://ecommerce-backend-1-yn41.onrender.com",frontend:"https://oracle-ecommerce-app.vercel.app",desc:"Manage Employees through a management system",demo:"/recordings/ECommerceRecording.mov",challenges:"Multiple CRUD needed",techUsed:"Springboot,Java,React,Oracle PLSQL",features:"add,update,manage employees,roles,departments",viewCode:"https://github.com/lyepez-glitch/Oracle_Ecommerce_App"},
      {id:"3",title:"Collaborative-Task-Management-App",backend: "https://collaborative-task-management-app.onrender.com/",frontend:"https://collaborative-task-management-app-9dtp.vercel.app/",desc:"Edit Profile,Manage tasks,projects",demo:"/recordings/CollabTaskApp.mov",challenges:"using websockets",techUsed:"Node,React",features:"Can add,update,delete tasks and projects, edit profile",viewCode:"https://github.com/lyepez-glitch/Collaborative-Task-Management-App"},
      {id:"4",title:"AI_Predictor",frontend: "http://MauyThaiAIPredictor-env.eba-hm9u8ytr.us-east-1.elasticbeanstalk.com", backend: "http://MauyThaiAIPredictor-env.eba-hm9u8ytr.us-east-1.elasticbeanstalk.com",desc:"Predict enemy movements and respond accordingly",demo:"/recordings/AI_PredictorRecording.mov",challenges:"Deploy with AWS, using Springboot",techUsed:"Java,HTML,Tailwind",features:"Can input a fighting move and receive a counter move response",viewCode:"https://github.com/lyepez-glitch/AI_Predictor_App"},
      {id:"5",title:"Nanobot",frontend: "http://localhost:8080",backend: "http://localhost:8081", desc:"Add Nanobots to cells and create simulations to see simulated results of nanobots on cells",demo:"/recordings/Nanobot Recording.mov",challenges:"using Kubernetes",techUsed:"Node,Kubernetes",features:"Add Nanobots to cells and create simulations to see simulated results of nanobots on cells",viewCode:["https://github.com/lyepez-glitch/Nanobot_Frontend",""]},

      {id:"6",title:"Vitalsource",frontend: "https://vital-source-front-end-ariw.vercel.app",backend: "https://vitalcore.onrender.com/", desc:"See impact of treaments on cells through charts and graphs",demo:"/recordings/VitalSource.mov",challenges:"using Graphql",techUsed:"Graphql",features:"See impact of treaments on cells through charts and graphs",viewCode:["https://github.com/lyepez-glitch/VitalSource-FrontEnd","https://github.com/lyepez-glitch/VitalCore"]},
      {id:"7",title:"Magicka",frontend: "https://magicka-frontend-auth.vercel.app",backend:"https://magicka-app.onrender.com",desc:"Input profile info and use magic spell against other opponents",demo:"/recordings/Magicka.mov",challenges:"travis",techUsed:"python",features:"Input profile info and use magic spell against other opponents",viewCode:["https://github.com/lyepez-glitch/Magicka_Frontend","https://github.com/lyepez-glitch/Magicka_app"]},
      {id:"8",title:"BioAgeCompanion",frontend: "https://bio-age-frontend.vercel.app/",backend:"https://bioage-companion.onrender.com/api/",desc:"Input vitals and calculate biological age and health recommendations",demo:"/recordings/BioAgeCompanion.mov",challenges:"react native",techUsed:"python",features:"Input vitals and calculate biological age and health recommendations",viewCode:["https://github.com/lyepez-glitch/BioAge-Companion-"]}

    ];

    setProjects(projects);
    },[]);

  return (
    <>
    <Link to="/">Back</Link>
    <h2 style={{position:'absolute'}}>Projects</h2>
    <div className = "projectsContainer">
      {

        projects.map(proj=>
          <ul className="card">
            <li>title:{proj.title}</li>
            <li>path:<Link to={proj.frontend}>Open this frontend in a new tab</Link></li>
            {
              proj.backend !== ""?(
                <li>path:<Link to={proj.backend}>Open this backend in another tab as well</Link></li>
              ):(
                <>
                </>
              )
            }

            <li>description:{proj.desc}</li>
            <li>Live demo:
              <video width="320" height="240" controls>
                <source src={proj.demo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </li>

            {
              projDetailsId === proj.id?(
                <ProjectDetail project={proj}/>
              ):(
                <button style={{width: '100px',borderRadius: '15px',padding:'5px'}} onClick={(e)=>setProjDetailsId(proj.id)}>View Project Details</button>
              )
            }
          </ul>
        )
      }
    </div>

    </>

  )
}
export default Project;