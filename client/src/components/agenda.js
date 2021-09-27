import "../styles/Reset.css"
import "../styles/Agenda.css"
import { useEffect, useState } from "react";
import { Route, BrowserRouter , Switch, Link } from 'react-router-dom';

function Agenda(props) {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5500/")
      .then(res => res.json())
      .then(
        (response) => {
          setDatas(response);
        }
      )
  }, [])

  console.log(datas)
  if (datas != null) {
    var dataAgenda = datas.agendas.map((data) => {
      return (
        // <BrowserRouter>
        <div  key={data.uid} className="containerAgenda__agenda">
          <div className="containerAgenda__containerImg">
            <img className="containerAgenda__containerImg__img" src={data.image} alt={"illustration :"+data.title}></img>
          </div>
          <div className="containerAgenda__description">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
          <div></div>

          <div className="containerAgenda__btnEvents">
            <Link to={`/event/${data.uid}`}><button type="button" className="containerAgenda__btnEvents__button">Voir les events</button></Link>
            </div>


        </div>
        // <Switch>
        //     <Route path={"/event/"+`${data.uid}`}>
        //         <Event uid={data.uid}/>
        //     </Route>
        //   </Switch>
        // </BrowserRouter>
      )
    })
  }
  return (
    <div className="containerAgenda">
      {dataAgenda}
    </div>
  )
}

export default Agenda;