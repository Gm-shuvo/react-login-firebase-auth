import { useContext } from "react"
import style from "styled-components"
import {AuthContext} from "../Context/AuthContext"

const Home = () => {
    const {currentUser,signout} = useContext(AuthContext)
   // console.log(currentUser);
    const handleLogOut =async()=>{
        await signout ()
    }
    return (
       <Container>
           <Box>
            <div className="proImg">
                    <img src="https://gracecourtschools.org/static/img/avatar.png"/>
            </div>
            <div className="proContent">
                <h2>{currentUser.email}</h2>
               
               <button onClick={handleLogOut} >Log out</button>
               <button onClick={handleLogOut} > Reset password</button>
            </div>
              
           </Box>
       </Container>
    )
}

const Container =style.div`
    width:100vw;
    height:100vh;
    background-color: rgba(255,255,255, 0.5);
    display:flex;
    justify-content: center;
    align-items: center;
   
`

const Box =style.div`
    position :relative;
    width:340px;
    height:340px;
    background-color: rgb(209 209 209 / 50%);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    border-radius:6px;
    box-shadow: 1px 3px 14px 1px #bebcbc;
    

     .proContent{
         position:absolute;
         top:120px;
         display:grid;
         place-items:center;
        
         button{
             margin:30px 20px 0 0 ;

             padding:6px 15px;
             outline:none;
             border:none;
             border-radius:6px;
             background-color: #47ffb2;
             font-weight:24px;
             font-size: 17px;
            
        }
    }

    .proImg{
        position:absolute;
        top:28px;
        width:80px;
        height:80px;
       
     img{
            width:100%;
        }
        // h2{
        //     text-size:20px;
        //     text-weight:bold;
        //     line-height:20px;
        //     padding :20px;
        // }
    }

   
`


export default Home
