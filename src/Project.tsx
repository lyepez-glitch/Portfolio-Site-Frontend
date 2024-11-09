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
    setProjects([{id:"1",title:"Messaging App",path:"https://lyep.pythonanywhere.com/rooms/",desc:"Real time Messaging App",demo:"demo",challenges:"integrating websockets",techUsed:"Django Channels, Django",features:"send,receive, update messages in real-time",viewCode:"https://github.com/lyepez-glitch/MessagingApp",backend:""},
    {id:"2",title:"Oracle Ecommerce App",backend:"https://dashboard.render.com/web/srv-cshuc5jqf0us73a981r0",path:"https://oracle-ecommerce-k7omklaqi-lucas-projects-f61d5cb5.vercel.app",desc:"Manage Employees through a management system",demo:"",challenges:"Multiple CRUD needed",techUsed:"Springboot,Java,React,Oracle PLSQL",features:"add,update,manage employees,roles,departments",viewCode:"https://github.com/lyepez-glitch/Oracle_Ecommerce_App"},
    {id:"3",title:"Collaborative-Task-Management-App",backend: "https://dashboard.render.com/web/srv-cshpvg88fa8c739ikdjg",path:"https://collaborative-task-management-app-9dtp-508wae1hc.vercel.app/",desc:"Edit Profile,Manage tasks,projects",demo:"demo",challenges:"using websockets",techUsed:"Node,React",features:"Can add,update,delete tasks and projects, edit profile",viewCode:"https://github.com/lyepez-glitch/Collaborative-Task-Management-App"}])
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
            <li>path:<Link to={proj.path}>Open this frontend in a new tab</Link></li>
            {
              proj.backend !== ""?(
                <li>path:<Link to={proj.backend}>Open this backend in another tab as well</Link></li>
              ):(
                <>
                </>
              )
            }

            <li>description:{proj.desc}</li>
            <li>Live demo: {proj.demo}</li>

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