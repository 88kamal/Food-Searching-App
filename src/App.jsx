// // *************** Food Recipe *******************


// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import Header from './components/Header'
// import Recipes from './components/Recipes'
// import axios from 'axios';
// // import Footer from './components/Footer'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
// import Click from './components/Click'


// function App() {
//   const [food, setFood] = useState([])
//   const [text, setText] = useState("")

//   const APP_ID = "b3972793";
//   const APP_KEY = "91d4d909be31b7f05b7997fb6f2380b0	"
//   const onChange = (e) => {
//     setText(e.target.value)
//   }
//   // useEffect(() => {
//   //   //  const data = await axios.get(`curl "https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}"`)
//   //   //  console.log(data)
//   //   async function fetchData() {
//   //     // You can await here
//   //     // const response = await APP_KEY.getData(APP_ID);
//   //     // ...
//   //     // console.log(response)
//   //     const data = await axios.get(`https://api.edamam.co m/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
//   //     // const data = await axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch`)

//   //     console.log(data.res)
//   //     // setRecipes(data.hits)
//   //   }
//   //   fetchData();
//   // })

//   const fetchFood =  () => {
//      axios.get(`https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${APP_KEY}`)
//       .then((res) => {
//         console.log(res.data.hits)
//         setFood(res.data.hits)
//       })
//   }




//   return (
//     <div>


//       <Router>

//       <div className=' bg '>
//           <Header text={text} onChange={onChange} fetchFood={fetchFood} />
//           <div className=" ">
//             <div className="container ">
//               <Recipes food={food} />
//             </div>
//           </div>

//         </div>
//         <Routes>
//           <Route exact path="/click" element={<Click />} />
//           {/* <Route exact path="/about" element={<About />} /> */}
//         </Routes>
//       </Router>

//     </div>

//   )
// }

// export default App



// // *************** Food Recipe *******************

// import axios from 'axios'
// import React, { useState } from 'react'

// function App() {
//   const [api, setApi] = useState([])
  // const [text, setText] = useState('')

  // const fetchApi = () => {
  //   axios.get(`https://dummyjson.com/products/search?q=phone`)
  // .then((res) => {
  //   console.log(res.data.products)
  //   setApi(res.data.products)
  // })
  // }
//   // const fetchApi = () => {
//   //   fetch(`https://dummyjson.com/products/search?q=phone`)
//   //   .then((json) => {
//   //     console.log(json.products)
//   //     setApi(res.data)
//   //   })
//   // }

  // const fetchApi = async () => {
  //   const url = `https://dummyjson.com/products/search?q=`;
  //   // setPage(page + 1)
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   console.log(parsedData.products)
  //   setApi(parsedData.products)
  // };
//   return (
//     <div>
//       <div className='text-center my-5'>
//       {/* <button type='button' className=' btn btn-danger' onClick={fetchApi} >Click</button> */}
//       <form action="">
//         <input type="text" />
//         <button type='button' className=' btn btn-danger' onClick={fetchApi} >Click</button>

//       </form>

//       </div>
  //  <div className=" container">
  //  <div className="row ">
  //       {
  //         api.map((value, index) => {
  //           return (
  //             <div className="col-md-3">
  //               <div class="card" style={{ width: '18rem' }}>
  //                 <img src={value.thumbnail} class="card-img-top" alt="..." />
  //                 {/* <img src={value.images[0]} class="card-img-top" alt="..." /> */}

  //                 <div class="card-body">
  //                   <h4>Rs {value.price}</h4>
  //                   <h6>{value.brand}</h6>
  //                   <h5 class="card-title">{value.title}</h5>
  //                   <h6>rating {value.rating}</h6>
  //                   {/* <p class="card-text">{value.description}</p> */}
  //                   <a href="#" class="btn btn-primary">Buy Now</a>
  //                 </div>
  //               </div>
  //             </div>
  //           )
  //         })
  //       }
  //     </div>
  //  </div>
//       {/* {
//         api.map((value, index)=>{
//           return(
//             <h1>{value.products.title}</h1>
//           )
//         })
//       } */}
//     </div>
//   )
// }

// export default App

import React from 'react'
import Api from './components/w'
import Navbar from './components/Navbar'
import UseEffectApi from './components/UseEffectApi'
import OwnApi from './components/OwnApi'
import DemoApi from './components/DemoApi'
import Music from './components/Music'

function App() {
    // const [text, setText] = useState("")
    // const onChange = (e) => {
    //       setText(e.target.value)
    //     }
  return (
    <div>
      {/* <Navbar text={text} onChange={onChange} fetchFood={fetchFood}/> */}
      <UseEffectApi/>
      {/* <OwnApi/> */} 
      {/* <DemoApi/> */}
      {/* <Music/> */}
      
    </div>
  )
}

export default App