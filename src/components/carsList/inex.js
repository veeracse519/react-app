import React from 'react'
/*global ReactDOM*/
let carCount = 2
let carId = 1
let key1 = ["a", "b", "c", "d", "e", "f", "g"]
class CarsList extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               carIds: [1]
          }
          this.addCar = this.addCar.bind(this)
          this.removeCarFromList = this.removeCarFromList.bind(this)

     }
     addCar() {
          this.setState(car => {
               carId = carCount
               carCount++
               car.carIds = [...this.state.carIds, carId]
               return car.carIds
          })
     }
     removeCarFromList(id) {
          console.log(this.state.carIds)
          let val = this.state.carIds.indexOf(id)
          let array = [...this.state.carIds];
          array.splice(val, 1)
          console.log(array)
          console.log(array.length)
          if (array.length === 0) {
               carCount = 1
          }
          else {
               carCount = array[array.length - 1] + 1
          }
          this.setState({ carIds: array })
     }
     render() {
          return (
               <div  key={key1[0]}>
               <button key={key1[1]} className="add-car" onClick={this.addCar}>AddCar</button>
               
               
               {this.state.carIds.map((item,index)=>
              // <div className="car-body" key={index}>
               //<div key={index} className="car-number">
               //<h3 key={index} >Car:{item}</h3>
               //<h3 key={index} className="cancel" onClick={()=>this.removeCarFromList(item)}>&#x2717;</h3>
               //</div>
               <Car id={item} key={item} var={this.removeCarFromList}/>

               //</div>

               )}
               </div>
          )

     }
}


class Car extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               Status: false,
               Speed: 0,

          };
          this.onStartOrStop = this.onStartOrStop.bind(this)
          this.onAccelerate = this.onAccelerate.bind(this)
          this.onApplyBrake = this.onApplyBrake.bind(this)
          this.displayStatusText = this.displayStatusText.bind(this)
          this.remove = this.props.var
          this.id1 = this.props.id
     }
     onStartOrStop() {
          this.setState(State => {
               State.Status = !State.Status
               State.Speed = 0
               //console.log(this.state);
               return State.Status
          });
     }
     onApplyBrake() {
          this.setState(State => {
               if (State.Speed > 0) {
                    State.Speed -= 10
               }
               console.log(State)
               return State.Speed

          });
     }
     onAccelerate() {
          this.setState(State => {
               if (State.Status) {
                    State.Speed += 10
               }
               console.log(State)
               return State.Speed

          });

     }
     displayStatusText() {

          const pElement = this.state.Status ? this.state.Speed > 0 ? `Status: Running With speed ${this.state.Speed}` : `Status:Running` : "Status:Stopped"
          return (
               pElement
          )

     }
     render() {
          return (
               <div className="mainn" id={this.props.id}>
               <div className="car-body" >
               <div  className="car-number">
               <h3  >Car:{this.props.id}</h3>
               <h3  className="cancel" onClick={()=>this.remove(this.id1)}>&#x2717;</h3>
               </div>
               
               
               <div className="first-buttons" >
                    <button className={this.state.Status?"btn Stop":"btn Start"} onClick={this.onStartOrStop} key={this.props.id}>{this.state.Status?"Stop":"Start"}</button>
                                        
               </div>
               <p >{this.displayStatusText()}</p>
               <div className="footer-buttons">
                    <button className="btn accel" onClick={this.onAccelerate}>Accelarate</button>
                    <button className="btn break" onClick={this.onApplyBrake}>Deaccelarate</button>
               </div>
               </div>
               </div>

          )
     }
}

export { CarsList, }












/*
function waiting(json) {
      let loadElement = document.getElementById("load")
      loadElement.style.display = "none"
      let divElement = document.createElement("div")
      let titleElement = document.createElement("h2")
      let bodyContent = document.createElement("p")
      titleElement.textContent = json.title;
      titleElement.style.borderBottom = "1px solid grey"
      titleElement.style.color = "green"
      titleElement.style.textTransform = "capitalize"
      divElement.style.boxShadow = "1px 2px 10px grey"
      divElement.style.marginBottom = "10px"
      let str = json.body[0].toUpperCase() + json.body.slice(1)
      bodyContent.textContent = str;
      divElement.style.padding = "10px"
      divElement.style.fontFamily = "arial"
      divElement.appendChild(titleElement)
      divElement.appendChild(bodyContent)
      document.body.appendChild(divElement)
    }*/








//const posts = function creatingPosts() {
// let loadElement = document.getElementById("load")
//loadElement.style.display = "none"

//for (let i = 0; i < json.length; i++) {
//let divElement = document.createElement("div")
//  let titleElement = document.createElement("h1")
// let bodyContent = document.createElement("p")
//  titleElement.textContent = json[i].title;
//  titleElement.style.color = "green"
//  divElement.style.boxShadow = "1px 2px 10px grey"
//   divElement.style.marginBottom = "10px"
//   bodyContent.textContent = json[i].body;
//   divElement.appendChild(titleElement)
//    divElement.appendChild(bodyContent)
//     document.body.appendChild(divElement)

// }

// }
// posts()
//console.log(posts)
//setInterval(posts, 100)
//setInterval(creatingPosts, 1000)


//setInterval(() => { console.log("veera") }, 500)


// Output
/*

[
  ({ id: 1, title: "Sample title1", body: "Sample Body1" },
  ...
  { id: 100, title: "Sample title100", body: "Sample Body100" })
];

*/

//Write your javascript logic here
