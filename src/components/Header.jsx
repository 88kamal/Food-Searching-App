import React from 'react'

function Header(props) {
  return (
    // <div className=' '>
    //   <div className=" " >
    // <img className=' ' width='300' src="img/2.png" alt="" />

    //     <div>
    // <div class="input-group  w-50 mx-auto text-center ">

    //   <input type="search" class="form-control" placeholder="Search Your Recipe..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.text} onChange={props.onChange} />
    //   <button class="input-group-text button " id="basic-addon2" onClick={props.fetchFood}>Search</button>
    // </div>
    //     </div>

    //   </div>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-light food">
      <div class="container flex-column flex-lg-row">
        <a class="" href="#">
          <img className=' ' width={150} src="img/2.png" alt="" />

        </a>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}


          </ul>

        </div>
        <div class="input-group  w-50 mx-auto text-center ">

          <input type="search" class="form-control" placeholder="Search Your Recipe..." aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.text} onChange={props.onChange} />
          <button class="input-group-text button " id="basic-addon2" onClick={props.fetchFood}>Search</button>
        </div>
      </div>
    </nav>
  )
}

export default Header