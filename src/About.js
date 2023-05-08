import  React from 'react'
import { useNavigate } from 'react-router-dom'

const About=()=>{
const navigate=useNavigate()

    const goToAbout=(url)=>{
       navigate(url)
    //    navigate("/contact")
    //    navigate(-1)
    }

    return(
        <div>
            <h1>About page</h1>
            <button onClick={()=>goToAbout("/")}>Home</button>
            <button onClick={()=>goToAbout("/contact")}>Contact</button>
            <button onClick={()=>goToAbout(-1)}>Prev Page</button>
        </div>
    )
}

export default About