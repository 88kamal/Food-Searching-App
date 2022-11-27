import React, { useEffect, useState } from 'react'

function Music() {
    const [musicapi, setMusicapi] = useState([
        {
            "title": "",
            "description": "",
            "src": "04. Pardes Jake Pardesia.mp3"
        },
        {
            "title": "",
            "description": "",
            "src": "EDKL - Solah Baras Ki Bali.mp3"
        },
        {
            "title": "",
            "description": "",
            "src": "EDKL - Solah Baras Ki Bali.mp3"
        },
        {
            "title": "",
            "description": "",
            "src": "EDKL - Solah Baras Ki Bali.mp3"
        },
        {
            "title": "",
            "description": "",
            "src": "EDKL - Solah Baras Ki Bali.mp3"
        }
    ])
    const [music, setMusic] = useState([])
    useEffect(() => {
        console.log(musicapi)
        setMusic(musicapi)
    }, [])

    return (
        <div className="container my-5">
            <div className='row'>
                {
                    music.map((value, index) => {
                        return (
                            <div className="col-md-4">
                                <audio src={value.src} controls autoPlay />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Music