import Menu from "./Menu"
import Agenda from "./agenda"
import Profil from "./Profil"


import "../styles/Home.css"
import { useState } from "react"

function Home(){

return(
    <div>
      <div className="container__menuAgenda">
        <Profil/>
           <Menu/>
          <Agenda />
      </div>
    </div>
    )
}

export default Home;