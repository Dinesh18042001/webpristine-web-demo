import React from 'react'
import "./Assistant.css"
import { AssistantAbout } from '../AssistantComponent/AssistantAbout/AssistantAbout'
import AssistantTeam from '../AssistantComponent/AssistantTeam/AssistantTeam'
import Sessions from '../AssistantComponent/Sessions/Sessions'
import Options from '../AssistantComponent/Options/Options'
import Questions from '../AssistantComponent/Questions/Questions'
import SignUp from '../AssistantComponent/SignUp/SignUp'
export default function Assistant() {
  return (
    <>
    <div className="assistant-banner-section position-relative mb-5">
      <img src="./assets/Assistant-img/banner.png" alt="" />

      <div className="container">
        <div className="banner-tittle">
          <h4>Virtual Assistant</h4>
           <div className="banner-link d-flex">
           <p className='link-one'><a href="#">Home</a><i class="fa-solid fa-chevron-right ms-2"></i><i class="fa-solid fa-chevron-right me-2"></i></p>
           <p><a href="#">Virtual Assistant</a></p>
           </div>
        </div>
      </div>
    </div>
    <AssistantAbout/>
    <AssistantTeam/>
    <Sessions/>
   <Options/>
   <Questions/>
   <SignUp/>
    </>
    
  )
}
