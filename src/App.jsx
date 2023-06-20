import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Recipes from './components/Recipes'
import axios from 'axios';

function App() {
  const [food, setFood] = useState([])
  const [text, setText] = useState("")

  const APP_ID = "b3972793";
  const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0	"
  const onChange = (e) => {
    setText(e.target.value)
  }

  const fetchFood =  () => {
     axios.get(`https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then((res) => {
        console.log(res.data.hits)
        setFood(res.data.hits)
      })
  }
  return (
    <div>
      <div className=' bg '>
          <Header text={text} onChange={onChange} fetchFood={fetchFood} />
          <div className=" ">
            <div className="container ">
              <Recipes food={food} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
