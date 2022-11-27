import axios from 'axios'
import React, { useState } from 'react'

function OwnApi() {
  const [api, setApi] = useState([])
  const getApi = () => {
    axios.get('https://kamaldemoapi.herokuapp.com/').then((res, req) => {
      console.log(res.data.items)
      setApi(res.data.items)
    })
  }
  return (
    <div>
<div className=' text-center my-4'>
<button type="button" className="btn btn-primary" onClick={getApi}>Button</button>

  </div>      <div className=' container'>
        <div className="row">
          {
            api.map((value, index) => {
              return (
                <div className="col-md-3 my-2">
                  <div class="card" style={{width: '18rem'}}>
                    <img src={value.image} class="card-img-top img-thumbnail" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{value.title}</h5>
                      <p class="card-text">{value.description}</p>
                      {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OwnApi