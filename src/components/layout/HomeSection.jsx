import { FaArrowRightLong } from "react-icons/fa6";


import worldimg from '../../images/world.jpg'

export const HomeSection = () =>{
    return(
        <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-6">
              <div className="home-content">
                <div className="col-lg-6 left-side-content">
                  <h2 className="main-title">
                    Explore the world, one country at a time
                  </h2>
                  <p className="main-excerpt">
                    Discover the world's most popular countries and their cities 
                  </p>
                  <button className="icon-btn">Start Exploring <FaArrowRightLong /></button>
                </div>
                <div className="col-lg-6">
                <img src={worldimg} alt="" className="world-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )

}