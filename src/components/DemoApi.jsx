import React, { useState } from 'react'

function DemoApi() {
    const [api, setApi] = useState([])
    const fetchApi = async () => {
        const url = "https://kamaldemoapi.herokuapp.com/";
        // setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData.items)
        setApi(parsedData.items)
    };
    return (
        <div>
            <div className=' text-center my-5'>
                <button type="button" className="btn btn-primary" onClick={fetchApi}>Button</button>
            </div>
            <div className="container">
                <div className="row">
                    {
                        api.map((value, index) => {
                            return (
                                <div className="col-md-3 my-2" key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={value.image} className="card-img-top img-thumbnail" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
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

export default DemoApi