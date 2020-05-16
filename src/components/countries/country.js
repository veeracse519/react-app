import React from "react"
import Back from './back.js'
import { withRouter } from "react-router-dom"
import HomeButton from "./homeButton.js"
/*global fetch*/

class Country extends React.Component {
          update = data => {
               const { history } = this.props;
               const { countries } = this.props.location.state;
<<<<<<< HEAD
               history.push(`country-dashboard-app/details/:${data.alpha3Code}`, { data, countries });
=======
               history.push(`:${data.alpha3Code}`, { data, countries });
>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
          }
          render() {
                    const { data, countries } = this.props.history.location.state;
                    let item = countries.filter(eachCountry => eachCountry.name === data.name);
                    item = item[0];
                    return (
                              <div className="box">
               <div className="wrap">
                    <Back element="Back" click={this.props.class1}/>
                    <HomeButton element="Home" click={this.props.class1}/>
               </div>
                        {/* <div className="country-data">
                       <div className="flag-div card">
                         <div className="image-fit">
                         <img className="image" src={item.flag} width="100%" height="100%"/>
                          </div>
                          </div>*/} 
               <div class="countryDetails">
                    <img className="countryImage" src={item.flag} />
                 <div>
                    <div>
                       <h4 className="fontStyles">{item.name}</h4>
                       <div className="detailsBox">
                         <div className="">
                              <p><b>Native Name:</b>{item.nativeName}</p>
                              <p><b>Population:</b>{item.population}</p>
                              <p><b>Region:</b>{item.region}</p>
                         </div>
                         <div className="">
                              <p><b>Top Level Domain:</b>{item.topLevelDomain}</p>
                              <p><b>Currencies:</b>
                                   {item.currencies.map((eachCurrency,index)=>
                                   <span>{`${eachCurrency.name},`}</span>
                                   )
                                   }
                              </p>
                              <p><b>Languages:</b>
                                   {item.languages.map((items,index)=>
                                   <span>{`${items.name},`}</span>
                                   )}
                              </p>
                         </div>
                       </div>
                    <div className="">
                         <p><b>Sub Region:</b>{item.subregion}</p>
                         <p><b>Capital:</b>{item.capital}</p>
                         <p><b>Boarder Countries:</b></p>
                    </div>
     
                    </div>
                    <div className="border-countries">
                    {
                    item.borders.map((item1)=>
                    countries.map((eachitem, index)=>
                    (
                         eachitem.alpha3Code===item1?<button key={eachitem.name} className={this.props.class1?"dark space":"light space"} onClick={ event =>this.update(eachitem)} value={eachitem.name}>{eachitem.name}</button>:""
                    )))}
                    </div>
                 </div>
               </div>
           </div>);
     }
}
export default withRouter(Country);
