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
      {id:"1",img:'src/images/messagingapp.jpg',title:"Messaging App",frontend:"https://messagingapp-deploy.onrender.com",desc:"Real time Messaging App",demo:"https://res.cloudinary.com/dnvwzsyue/video/upload/v1738685778/MessageAppRecording_ylmzpl.mov",challenges:"integrating websockets",techUsed:"Django Channels, Django",features:"send,receive, update messages in real-time",viewCode:"https://github.com/lyepez-glitch/MessagingApp",backend:"https://messagingapp-deploy.onrender.com"},
      {id:"2",img: 'src/images/Employee Management App.jpg', title:"Oracle Ecommerce App",backend:"https://ecommerce-backend-1-yn41.onrender.com",frontend:"https://oracle-ecommerce-app.vercel.app",desc:"Manage Employees through a management system",demo:"https://res.cloudinary.com/dnvwzsyue/video/upload/v1738685807/ECommerceRecording_zrpbyw.mov",challenges:"Multiple CRUD needed",techUsed:"Springboot,Java,React,Oracle PLSQL",features:"add,update,manage employees,roles,departments",viewCode:"https://github.com/lyepez-glitch/Oracle_Ecommerce_App"},
      {id:"3",img:'src/images/TaskManagement.jpg', title:"Collaborative-Task-Management-App",backend: "https://collaborative-task-management-app.onrender.com/",frontend:"https://collaborative-task-management-app-9dtp.vercel.app/",desc:"Edit Profile,Manage tasks,projects",demo:"https://res.cloudinary.com/dnvwzsyue/video/upload/v1738685953/CollabTaskApp_p0buwj.mov",challenges:"using websockets",techUsed:"Node,React",features:"Can add,update,delete tasks and projects, edit profile",viewCode:"https://github.com/lyepez-glitch/Collaborative-Task-Management-App"},
      {id:"4",img:'src/images/ai_predictor.jpg',title:"AI_Predictor",frontend: "http://MauyThaiAIPredictor-env.eba-hm9u8ytr.us-east-1.elasticbeanstalk.com", backend: "http://MauyThaiAIPredictor-env.eba-hm9u8ytr.us-east-1.elasticbeanstalk.com",desc:"Predict enemy movements and respond accordingly",demo:"https://res.cloudinary.com/dnvwzsyue/video/upload/v1738685682/AI_PredictorRecording_o9mwue.mov",challenges:"Deploy with AWS, using Springboot",techUsed:"Java,HTML,Tailwind",features:"Can input a fighting move and receive a counter move response",viewCode:"https://github.com/lyepez-glitch/AI_Predictor_App"},
      {id:"5",img:'src/images/nanobot.jpg',title:"Nanobot",frontend: "http://localhost:8080",backend: "http://localhost:8081", desc:"Add Nanobots to cells and create simulations to see simulated results of nanobots on cells",demo:"https://res.cloudinary.com/dnvwzsyue/video/upload/v1738685762/Nanobot_Recording_z9iw9o.mov",challenges:"using Kubernetes",techUsed:"Node,Kubernetes",features:"Add Nanobots to cells and create simulations to see simulated results of nanobots on cells",viewCode:["https://github.com/lyepez-glitch/Nanobot_Frontend",""]},

      {id:"6",img:'src/images/VitalSource.jpg',title:"Vitalsource",frontend: "https://vital-source-front-end-ariw.vercel.app",backend: "https://vitalcore.onrender.com/", desc:"See impact of treaments on cells through charts and graphs",demo:"https://res.cloudinary.com/dnvwzsyue/video/upload/v1738685779/VitalSource_pddgf9.mov",challenges:"using Graphql",techUsed:"Graphql",features:"See impact of treaments on cells through charts and graphs",viewCode:["https://github.com/lyepez-glitch/VitalSource-FrontEnd","https://github.com/lyepez-glitch/VitalCore"]},
      {id:"7",img:'src/images/Magicka.jpg',title:"Magicka",frontend: "https://magicka-frontend-auth.vercel.app",backend:"https://magicka-app.onrender.com",desc:"Input profile info and use magic spell against other opponents",demo:"https://res.cloudinary.com/dnvwzsyue/video/upload/v1738685816/Magicka_erwyl4.mov",challenges:"travis",techUsed:"python",features:"Input profile info and use magic spell against other opponents",viewCode:["https://github.com/lyepez-glitch/Magicka_Frontend","https://github.com/lyepez-glitch/Magicka_app"]},
      {id:"8",img:'src/images/BioAgeCompanion.jpg',title:"BioAgeCompanion",frontend: "https://bio-age-frontend.vercel.app/",backend:"https://bioage-companion.onrender.com/api/",desc:"Input vitals and calculate biological age and health recommendations",demo:"https://res.cloudinary.com/dnvwzsyue/video/upload/v1738683935/BioAgeCompanion_lexc0d.mov",challenges:"react native",techUsed:"python",features:"Input vitals and calculate biological age and health recommendations",viewCode:["https://github.com/lyepez-glitch/BioAge-Companion-"]}

    ];

    setProjects(projects);
    },[]);

  return (
    <>
    <Link style={{marginTop:'20px',position: 'absolute',left: '12%'}} to="/">Back</Link>
    <h2 className="featuredWork" style={{borderBottom: '1px solid black',width: '70%',fontWeight:'normal',position:'absolute'}}>Featured work</h2>
    <div className = "projectsContainer">
      {

        projects.map(proj=>
          <>
          <div className="card">

            <img class="projImg" src={proj.img}/>


            <div style={{flexBasis: '100%',textAlign: 'left',marginTop:'20px'}}><div style={{color: 'black',fontStyle: 'italic',fontWeight:'bold'}}>{proj.title}</div><div id="projDesc">{proj.desc}</div></div>

            <div id="viewProjects">
              View the project by clicking the links below:
            </div>
            <Link style={{textDecoration:'none',textAlign:'left',flexBasis:'100%',display:'block',marginTop:'30px'}} to={proj.frontend}> A. Open this frontend in a new tab</Link>

            <br/>
             <>
             {
              proj.backend !== ""?(
                <>
                <Link style={{textDecoration:'none',flexBasis: '100%',textAlign: 'left',display:'block',marginTop:'40px'}} to={proj.backend}>B. Open this backend in another tab as well</Link>

                </>

              ):(
                <>
                </>
              )
             }
             </>


            {
              projDetailsId === proj.id?(
                <>
                  <ProjectDetail setProjDetailsId={setProjDetailsId} project={proj}/>

                </>

              ):(
                <button className= "viewProjectDetails" style={{backgroundColor:'rgb(99, 91, 254)',color: '#fff',marginBottom: '20px',bottom: '-88px', position:'absolute',width: '100px',borderRadius: '15px',padding:'5px'}} onClick={(e)=>setProjDetailsId(proj.id)}>View Project Details</button>
              )
            }










          </div>


          </>
        )
      }
    </div>

    </>

  )
}
export default Project;