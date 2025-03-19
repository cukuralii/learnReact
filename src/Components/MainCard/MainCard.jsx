import './MainCard.css'


export default function MainCard(props){
    return(
      <div className="mainCard" >
        <div className="mainCardHead"> <h2>{props.head}</h2> </div>
        <div> 
          <div className="mainCardContent" >
           {props.children} {/* Çocuk bileşenler buraya eklendi */}
          </div>
      </div>
      </div>
    )
  }

