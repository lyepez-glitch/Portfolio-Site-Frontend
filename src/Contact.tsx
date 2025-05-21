import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Contact(){
  const [email,setEmail] = useState<string>("lucasyepez99@gmail.com");
  const [linkedIn,setLinkedIn]  = useState<string>("https://www.linkedin.com/in/lucas-yepez/")
  const [github,setGithub] = useState<string>("https://github.com/lyepez-glitch")
  const [name,setName] = useState<string>("")
  const [number,setNumber] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); /// Track if submitted
  const [showSuccess, setShowSuccess] = useState<boolean>(false);  // For green flash
  const showPopup = (e)=>{
    console.log('e target',e.target);
    const popUp = document.querySelector("#contactPopup");
    popUp.classList.remove("hidden");
    setShowSuccess(false);
  }

  const hidePopup = (e)=>{
    const popUp = document.querySelector("#contactPopup");
    popUp.classList.add("hidden");
  }


  const handleContactSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log("Contact form submitted");
    try {
      const response = await axios.post("https://portfolio-site-backend-05sf.onrender.com/users", {
        name: name,
        number: number,
      });
      console.log("Response: ", response.data); // Log the response
      //
      setName("");
      setNumber("");
      setIsSubmitted(true);
      setShowSuccess(true);
      // Flash success message for 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error: ', error.response?.data); // Log Axios error response
      } else if (error instanceof Error) {
        console.log('Error submitting: ', error.message);
      } else {
        console.log('Unknown error: ', error);
      }
    }



  }

  return(
    <>
    <div>

    </div>

    <div className="contactContainer">
    <Link to="/" className="back-home-link">Back to Home</Link>
    <div id="contactPopup" className="hidden">
      <form onSubmit={handleContactSubmit}>
          <label style={{display:'block'}} htmlFor="name">Name: </label>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" name="name"/>
          <label style={{display:'block',marginTop:'20px'}} htmlFor="number">Phone Number: </label>
          <input onChange={(e)=>setNumber(e.target.value)} value={number} type="text" name="number"/>
        <button style={{display:'block',marginLeft:'30%',marginTop:'20px',marginBottom:'20px'}} type="submit">Contact</button>
        <div>{showSuccess && <div style={{marginBottom: '20px',color:'green'}}>Form successfully submitted!</div>}</div>
        <button style={{margin:'0'}} onClick={(e)=>hidePopup(e)}>Close</button>
        {/* <div id="successflash">{showSuccess && <div style={{marginLeft:'-10%',position:'absolute'}} className="success-flash">Form successfully submitted!</div>}</div> */}
      </form>


    </div>
      <div id="contactHeadDiv">
        <div id="contactGridBox">
          <div  className="border-right">
          </div>
          <h1  className="border-right" id="contactHeader">Contact me</h1>
          <div id= "borderRightDiv" className="border-right"></div>
          <div style={{display: 'flex',alignItems: 'flex-end',justifyContent:'center'}}className="border-right mail">
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:lucasyepez99@gmail.com";
              e.preventDefault();
            }}
          >
            <i class="fa-solid fa-envelope"></i>

          </Link>


          </div>
          <div  className="border-right" id="contactSubHeader">
            <p>
             I would love to hear from you!
            </p>
            <p>
            Whether you have questions, ideas, or just want to chat about tech, feel free to reach out.
            </p>
            <button onClick={(e)=>showPopup(e)} id="contactBtn">Contact</button>
            <Link className= "github" style={{textAlign:'center',display:'block'}} to={github}><i class="fa-brands fa-github"></i></Link>
             </div>
             <div className="linkedin" style={{display: 'flex',alignItems: 'flex-end'}}>
              <Link style={{textAlign:'center',flexBasis:'100%',display:'block'}} to={linkedIn}><i  class="fa-brands fa-linkedin"></i></Link>
             </div>

        </div>

      </div>
      <div style={{ marginBottom: '20px'}}>
    </div>



    </div>


    </>
  )
}
export default Contact;