import React from 'react'
import './countries.css'
import CountryCard from './countryCard.js'
import { Header } from "./header.js"
import { FaRedoAlt } from "react-icons/fa";
import { CountriesFilterBar } from "./countriesFilterBar.js"
class CountriesDashboardApp extends React.Component {
     state = {
          allCountries: [],
          allDupCountries: [],
          allRegions: [],
         // color: 'white',
          searchText: '',
          selectRegion: "ALL",
          regionList: [],
          backButton: false,
          presentCountry: ''
     }
     componentDidMount = () => {
          fetch("https://restcountries.eu/rest/v2/all")
               .then(response => response.json())
               .then(data => this.setState({ allCountries: data, allDupCountries: data }))

     }
     filterByName = (searchText) => {
         try{
          let items = this.state.allDupCountries.filter((item) =>
               item.name.toLowerCase().search(searchText.toLowerCase()) !== -1);
          this.setState({ searchText: searchText })
          this.combinationSearch(searchText, this.state.selectRegion, items)
         }
         catch(e){
              alert("Something went wrong")
         }
     }
     filterByRegion = (selectRegion) => {
          try{
          let items;
               items = this.state.allDupCountries.filter(function(item) 
               {
               return item.region===selectRegion
               })

          this.setState({ selectRegion: selectRegion })
          this.combinationSearch(this.state.searchText, selectRegion, items)
          }
          catch(e){
               alert("Its Not a region")
          }

     }
     combinationSearch = (text, region, items) => {
          if (text === "" && region === "ALL") {
               this.setState({ allCountries: this.state.allDupCountries })
          }
          else if (text != "" && region === "ALL") {

               let items = this.state.allDupCountries.filter((item) =>
                    item.name.toLowerCase().search(text.toLowerCase()) !== -1);
               if (items.length > 0) {
                    this.setState({ allCountries: items })
               }
               else {
                    this.setState({ allCountries: "" })
               }
          }
          else if (text === "" && region != "ALL") {
               let items1 = this.state.allDupCountries.filter((item) =>{
                    return item.region===region
               })
               if (items1.length > 0) {
                    this.setState({ allCountries: items1 })
               }
               else {
                    this.setState({ allCountries: "" })
               }
          }
          else if (text != "" && region != "ALL") {
               let items = this.state.allDupCountries.filter((item) =>
                    item.name.toLowerCase().search(text.toLowerCase()) !== -1);
               let items1 = items.filter((item) =>{
                    return item.region===region
               })
               if (items1.length > 0) {
                    this.setState({ allCountries: items1 })
               }
               else {
                    this.setState({ allCountries: "" })
               }

          }
     }
     showCountry = (name, item) => {
          this.setState({ backButton: name, presentCountry: item })
     }
     filterCountryInAlphabeticalOrder = () => {
         
        /*  this.setState({
               allCountries: this.state.allCountries.sort(function(name1, name2) {
                    return (name1.name > name2.name)
               })
          })*/

let countries=this.state.allCountries.sort((firstName,LastName)=>(firstName.name>LastName.name)?1:-1)
this.setState({allCountries:countries})



     }
     filterCountryInReverseAlphabeticalOrder = () => {

          // this.setState({
          //      allCountries: this.state.allCountries.sort(function(name1, name2) {
          //           return (name2.name > name1.name)
          //      })
          // })
          let countries=this.state.allCountries.sort((firstName,LastName)=>(firstName.name<LastName.name)?1:-1)
this.setState({allCountries:countries})

     }
     render() {
         
          const { allDupCountries } = this.state;
<<<<<<< HEAD
          console.log("hi")
=======

>>>>>>> 337af5a5aa80ecd2b2f6c40236bd53c1e953495d
          return (<div>
          <CountriesFilterBar class={this.props.class1} filterCountryName={this.filterByName} filterCountryRegion={this.filterByRegion} filterCountryInAlphabeticalOrder={this.filterCountryInAlphabeticalOrder} filterCountryInReverseAlphabeticalOrder={this.filterCountryInReverseAlphabeticalOrder} region={this.state.allDupCountries}/>
     
     {this.state.allCountries.length>0 && <div className="countryCard">{
          this.state.allCountries.map((item,index)=>
               <CountryCard key={index} data={item} showCountry={this.showCountry} change={this.changeTheme} countries={allDupCountries} click={this.props.class1}/>
          )
          }</div>}
          {this.state.allCountries.length===0 &&<div className="loading"><h1><FaRedoAlt/></h1><h2>Loading...</h2></div> }
     
          
          </div>)
     }
}
export { CountriesDashboardApp }
