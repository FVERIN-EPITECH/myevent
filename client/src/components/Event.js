import "../styles/Reset.css"
import "../styles/Agenda.css"
import { useEffect,useState } from "react";
import Menu from "./Menu";
// props.match.params.uid
function Event(props){
const [datas, setDatas] = useState(null);
useEffect(() =>
    {
      fetch("http://localhost:5500/evenement?uid="+`${props.match.params.uid}`)
        .then(res => res.json())
        .then(
          (response) => {
            setDatas(response);
          }
        )
    }, [])
     console.log(datas);

    if(datas != null)
    {

        var dataEvent = datas.events.map((data) =>
        {
          console.log(data)
          let begin = new Date(data.lastTiming.begin);
          let beginDay = begin.getDay();
          let beginMonth = begin.getMonth();
          let beginYear = begin.getFullYear();
          // console.log(`Current day : ${beginDay} Current month : ${beginMonth} Current year : ${beginYear}`);


          let currentDate = new Date()
          let currentHours = currentDate.getHours();
          let currentMinutes = currentDate.getMinutes();
          let currentSeconds = currentDate.getSeconds();
          let currentDay = currentDate.getDate();
          let currentMonth = currentDate.getMonth();
          let currentYear = currentDate.getFullYear();

          console.log(`currentDate : ${currentDate} begin : ${begin}`);

          let waitDisplay;

            function timeDiffCalc(dateFuture, dateNow) {
              let difference = '';
              if (dateFuture < dateNow) {
                console.log("passé");
                difference = 'Evenement terminé';
              }
              else{
              let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
              // console.log('diffInMilliSeconds'+diffInMilliSeconds);

              // calculate years
              const years = Math.floor(diffInMilliSeconds / 31557600);
              diffInMilliSeconds -= years * 31557600;
              // console.log('calculated years', years);

              // calculate months
              const months = Math.floor(diffInMilliSeconds / 2629800);
              diffInMilliSeconds -= months * 2629800;
              // console.log('calculated months', months);

              // calculate days
              const days = Math.floor(diffInMilliSeconds / 86400);
              diffInMilliSeconds -= days * 86400;
              // console.log('calculated days', days);

              // calculate hours
              const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
              diffInMilliSeconds -= hours * 3600;
              // console.log('calculated hours', hours);

              // calculate minutes
              const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
              diffInMilliSeconds -= minutes * 60;
              // console.log('minutes', minutes);

              difference = 'Dans ';
              if (years > 0) {
                difference += (years === 1) ? `${years} an, ` : `${years} ans, `;
              }
              if (months > 0) {
                difference += (months === 1) ? `${months} mois, ` : `${months} mois, `;
              }
              if (days > 0) {
                difference += (days === 1) ? `${days} jour, ` : `${days} jours, `;
              }
              if (hours > 0){
                difference += (hours === 0 || hours === 1) ? `${hours} heure, ` : `${hours} heures, `;
              }
              if (minutes > 0) {
                difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`;
              }
            // console.log(difference);
            }
            return difference;
            }
            // console.log('timeDiffCalc'+timeDiffCalc(new Date(begin), new Date(currentDate)));

          let tmp = data.image == null?null:data.image.base+data.image.filename;

          let end = new Date(data.lastTiming.end);
          let endDay= end.getDay();
          let endMonth = end.getMonth();
          let options = {month:'long'};
          function duOuLe(){
            if (beginDay == endDay && beginMonth == endMonth) {
              return (
                `Le ${beginDay} ${new Intl.DateTimeFormat('fr-FR', options).format(end.getMonth())}`
              )
            }
            else {
              return (
                `Du ${beginDay} ${new Intl.DateTimeFormat('fr-FR', options).format(begin.getMonth())} au ${endDay} ${new Intl.DateTimeFormat('fr-FR', options).format(end.getMonth())}`
              )
            }
          };
        return(
          <div key= {data.uid}>
            <div>{timeDiffCalc(new Date(begin), new Date(currentDate))}</div>
            <div>{data.title.fr}</div>
            <ul>
              <li><img src=""/>{duOuLe()}</li>
              <li><img src=""/>{data.location.address}</li>
              <li><img src=""/>{data.location.name}</li>
            </ul>
            <div>.</div>
          </div>
            )
        })
    }
return(
  <div className="container__menuAgenda">
  <Menu></Menu>
    <div className="containerEvent">
        {dataEvent}
    </div>
    </div>
    )
}

export default Event;