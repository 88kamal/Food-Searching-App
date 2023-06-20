import React from 'react'


function Recipes(props) {
  return (
    <div>
      <div className="  ">
        <div className="row">
          <h1 className='text-center my-3 text-light '>All Food Recipe</h1>
          {
            props.food.map((value, index) => {
              return (
                <div className="col-md-3 my-3 ">

                  <div class="card mx-4 mx-lg-0 zoom " style={{ width: '20rem' }}>
                    <img src={value.recipe.image} class="card-img-top" alt="..." />
                    <div class="card-body  " style={{
                      background: 'rgb(230 225 239)'
                    }}>
                      <h6 class="card-title fw-bold" style={{ color: '#ff1600' }}>{value.recipe.label} <span className=' float-end text-primary'><i class="fa fa-share-square" aria-hidden="true"></i></span></h6>
                      <h6><span className=' fw-bold' style={{ color: '#006266' }}>Calories:</span> {value.recipe.calories}</h6>
                      <h6><span className=' fw-bold' style={{ color: '#FC427B' }}>CuisineType:</span> {value.recipe.cuisineType}</h6>
                      {/* <h6>{value.recipe.dietLabels}</h6> */}
                      <h6><span className=' fw-bold' style={{ color: '#F97F51' }}>DishType:</span> {value.recipe.dishType}</h6>
                      <a href="#" class="btn btn-xl " style={{ background: '#B33771', color: 'white' }}><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart</a>
                      <a href="#" class="btn btn-xl mx-2" style={{ background: '#3B3B98', color: 'white' }}>Buy Now</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Recipes