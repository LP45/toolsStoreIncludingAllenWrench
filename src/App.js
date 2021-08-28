import products from './data';
//Descructioning = Importing only one specific part of React. We only want the component aspect of REACT.
import React, { Component } from 'react';


console.table(products)


//we are going to create our class component
//the shortcut for class component boilerplate using react code snippets is rcc



//we can export default on the same line where we created our component
//EX: export default class componentName extends Component {
//subClass
class App extends Component {
  //we need to initialize our state BEFORE RETURN

  //old syntax
  //props is data or properties being passes down from a parent component
  // constructor(props){
  //   //super() refers to the parent componenet.
  //   super(props)
  //   //state stores data inside
  //   //we write our state just a a regular obj in Js
  //   this.state = {
  //     //key value pairs just like any obj, left side is prop name and right side is value.
  //     products:products
  //   }
  // }

  // *======== New Syntax =======
  //we np longer need to intiate our state obj with "this"
  state = {
    products:products
  }

  

  render() {
    console.log(this.state.products)
    return (
      <div>
        <h1>Hi There!</h1>
        <ul>
          {/*Map over our products list hat we imported */}
          {
            //each item reps each element in our products array.
           this.state.products.map((item) => {
             return(
               <h4>{item.name} {item.price} {item.description}</h4>
             )
                
           })
           
          }
          {/* {this.state.products[0].name} 
           {this.state.products[0].price}
           {this.state.products[0].description} */}
          
        </ul>
      </div>
    );
  }
}

export default App;