import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import '../App.css'

function YouTube() {
    const [api, setApi] = useState([])
    const fetchApi = () => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${text}&type=video&videoType=any&key=AIzaSyAOaTQ_WQzeJlGlWzX2JCptmjV7H6mLugc`)
            .then((res) => {
                console.log(res.data.items)
                setApi(res.data.items)
            })
    }
    const [text, setText] = useState("")
    const onChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <div className="d-grid gap-2">
            </div>
            <Navbar text={text} onChange={onChange} fetchApi={fetchApi} />

            <div className=" container my-5 ">
                <div className="row">
                    {
                        api.map((value, index) => {
                            return (
                                <div className="col-md-3   my-1 ">
                                    <iframe className=' img-thumbnail  ' src={`https://www.youtube.com/embed/${value.id.videoId}`} title={value.snippet.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <p class="">{value.snippet.title}</p>
                                    <p className='' style={{ fontSize: '12px' }}>{value.snippet.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default YouTube