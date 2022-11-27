import React, {useState} from 'react'
import axios from 'axios';

function Api() {
    const [api, setApi] = useState([])
    const fetchApi = () => {
        axios.get(`https://thapademapi.herokuapp.com/service`)
            .then((res) => {
                console.log(res.data.products)
                // setApi(res.data.items)
            })
    }
  return (
    <div>
        <button type="button" className="btn btn-primary" onClick={fetchApi}>Button</button>
    </div>
  )
}

export default Api