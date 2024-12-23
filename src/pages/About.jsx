
import countryFacts from '../../src/api/countryData.json'

export const About = () => {
  return <section className="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h2 className="aobut-title">here are the interesting facts <br /> we are proud of</h2>
          <div className="gradient-cards">


          {
            countryFacts.map( (country) =>{
              const {id, CountryName, Capital, Population, interestingFact} = country

              return  <div className="card" key={id} >
              <h2 className="card-title">
                {CountryName}
              </h2>
              <p className='card-desc'>
                <span className="card-desc-title">Capital: </span>
                <span className="card-desc-value"> {Capital}</span>                
              </p>
              <p className='card-desc'>
                <span className="card-desc-title">Population: </span>
                <span className="card-desc-value">{Population}</span>
              </p>
              <p className='card-desc'>
                <span className="card-desc-title">Interesting Facts: </span>
                <span className="card-desc-value"> {interestingFact} </span>
              </p>

            </div>




            })
          }

           


            
          </div>
        </div>
      </div>
    </div>

  </section>;
};
