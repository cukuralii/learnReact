import './Card.css';

export default function Card(props){
    return(
      <div className='cardSet'>
          <img src={props.image}/>
          <h2>{props.title || "Default Title"}</h2>
          <p>{props.description || "No description available."}</p>
      </div>
    )
  }

