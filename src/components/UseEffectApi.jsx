import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import '../App.css'

function UseEffectApi() {
    // const API__KEY = AIzaSyA64Z4AYlBtdMmYOSWknRMDjE5Tp9ntdAs
    // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=song&type=video&videoType=any&key=AIzaSyBAHVuUyyt9dyXI9PvokHKDVZab716dV1k`
    const [api, setApi] = useState([])
    const fetchApi = () => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${text}&type=video&videoType=any&key=AIzaSyAOaTQ_WQzeJlGlWzX2JCptmjV7H6mLugc`)
            .then((res) => {
                console.log(res.data.items)
                setApi(res.data.items)
            })
    }
    // useEffect(() => {
    //     axios.get(`${url}`).then((res) => {
    //         // console.log(res.data.items)
    //         setApi(res.data.items)
    //     })

    // }, [])

    const [text, setText] = useState("")
    const onChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <div className="d-grid gap-2">
                {/* <button className="btn btn-primary" onClick={fetchApi} type="button">Button</button> */}
            </div>
            <Navbar text={text} onChange={onChange} fetchApi={fetchApi} />

            {/* <div className='  text-center bg- text-dark my-2' style={{ background: '' }}>
                <h6 className="  ">Created By <span style={{ color: '' }}>Kamal</span><span style={{ color: '' }}> Nayan</span> <span style={{ color: '' }}>Upadhyay</span></h6>

            </div> */}

            <div className=" container my-5 ">
                <div className="row">
                    {
                        api.map((value, index) => {
                            return (
                                <div className="col-md-3   my-1 ">

                                    {/* <img src={value.snippet.thumbnails.high.url} className='img-fluid' alt="" />
                                    <p>{value.id.kind}</p>
                                    <p>{value.id.videoId}</p>
                                    <h6 class="">{value.snippet.title}</h6>
                                    <p>{value.snippet.description}</p> */}
                                    <iframe className=' img-thumbnail  ' src={`https://www.youtube.com/embed/${value.id.videoId}`} title={value.snippet.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <p class="">{value.snippet.title}</p>
                                    <p className='' style={{ fontSize: '12px' }}>{value.snippet.description}</p>
                                    {/* <p>{value.snippet.publishTime}</p> */}

                                </div>
                            )
                        })
                    }
                </div>
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/XWePdlCGTno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </div>

        </div>
    )
}

export default UseEffectApi