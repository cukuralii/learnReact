import resim1 from '../../assets/resim1deneme.jpg'
import resim2 from '../../assets/resimdeneme2.jpg'
import MainCard from '../MainCard/MainCard.jsx'
import Card from '../Card/Card.jsx'
import './Header.css'
import React , {useState} from 'react'


const reactDescription = ["Fundamental" , "Crucial" , "Core"] 

function GenRandomColor(max){
   return Math.floor(Math.random() * ( max + 1))
}

function TabButton({id, content}){
  const [id , content] = useState(0)

  return(
    <li>
      <button className='tabButton' >{props.name}</button>
    </li>
  )
}

function ContentArea(){

  return(
    <div className='contentArea' style={props.style}>
      <h2></h2>
      <p></p>
    </div>
  )
}

function Header() {
    const description = reactDescription[GenRandomColor(2)]
    return (
      <> 
      <header> 
      <h1>React Essential</h1>
      <p>
        {description} concept you will need for almost any app you are going to build.
      </p>
      </header>
      <main>
        <MainCard head="Core Concepts">
          <Card 
            image={resim1}
            title="Components"
            description="Components let you split the UI into independent sections."
          />
          <Card 
           image={resim2}
           title="Soundcore"
           description="Lorem ipsum dolor sit amet."
          />
          <Card/>  
          <Card/> 
        </MainCard>
        <section>
         <menu>
            <h2>Examples</h2>
            <ul className='tabList' style={{listStyleType: 'none' , padding: 0 , display: 'flex', columnGap: '10px', borderRadius:'3px'}}>  
              <TabButton id={1} content={"Merhaba ilk denememiz bakalım ilk commit de ne olacak"}/>
              <TabButton id={2} content={"Merhaba ilk denememiz bu1"}/>
              <TabButton id={3} content={"Merhaba ilk denememiz bu2"}/>
              <TabButton id={4} content={"Merhaba ilk denememiz bu3"}/>
            </ul>
             <ContentArea  style = {{ width:'500px', height:'500px', backgroundColor :'darkGray' , color:'white' }}/> 
         </menu>
        </section>
      </main>
      </>
    )
  }

  export default Header