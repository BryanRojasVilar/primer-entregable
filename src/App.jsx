
import './App.css'
import { useState } from 'react';
import FortuneCookie from './assets/components/FortuneCookie'
import phrases from './data/phrases.json'
import Background from './assets/components/Background';
function App() {
  const [index, setIndex] = useState(0)
  const [backgroundImage, setBackgroundImage] = useState(
    Background[Math.floor(Math.random() * Background.length) ])
  const changePhrase = () => {
  const randomIndex = Math.floor(Math.random() * phrases.length)
    setBackgroundImage(Background[randomIndex %  Background.length])
    if(index < phrases.length - 1){
      setIndex(index + 1)
    }else {
      setIndex(0)
    }
  }
  document.body.style = `background-image: url(${backgroundImage})`
  return (
    <>
      <FortuneCookie
        data={phrases[index]}/>     
      <div className='divButton'> 
        <button onClick={changePhrase} className="button">Ver otro</button>      
      </div>    
    </>
  )
}
export default App