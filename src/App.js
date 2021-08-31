// * Before we were importing React by import React from 'react'
// * Line 3 is a way for us to import one specific part of React
// * destructing
import React, { Component } from 'react';
import products from './data.js';
import ProductList from './ProductList'

console.table(products);

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
    products:products,
    // value:" "
    name:'',
    price:0,
    description:"Describe Item"


    //we can assign deafult state values to our properties
  }
  //Creating a Handle Change Function
  //events are behaviors that user's use in the browser
  handleChange = (event) =>{
    console.log("Below is our event.target")
    console.log(event.target)
    // console.log(event)
    
    //Cannot Change state directly 
    // this.state.value = event.target.value
   
    this.setState({
      // value is ponting to the state that we are trying to change
      // event.target.value = input tag
      // name: event.target.value,
      // price: event.target.value,
      // description:event.target.value

      //we ARE NO LONGER pointing to one state!!!!!!!!!!!


      // we are using event.target.id to ket our code know which state we are focusing on.
      // input.Target.Id will point to name, description, or price!
      [event.target.id]:event.target.value
    })


  }

  // Here is where we handle our submit form
  handleSubmit = (event) =>{
    //the default behavior of Submit in HTML is to refresh our page
    // prevent default is a way to stop our website from refreshing.
    // DONT WANT OUR APP TO REFRESH BC WE STILL WNAT TO DO MORE STUFF WITH IT
    event.preventDefault()
    // console.log(event)

    const newItem = {
      name:this.state.name,
      price:this.state.price,
      description:this.state.description
    }

    console.log("We are inside Handle Submit this is our new item ", newItem)

    this.setState({
      products:[newItem, ...this.state.products],
      // we can update multiple states in one setSTate
      name: '',
      price:0,
      description:'Describe the Item'
    })

  }


  render() {
    // console.log(this.state.products)
    return (
      <div>
        <h1>Big Tyme Shopping!</h1>

        {/* a form excepts input from a user */}
        <form onSubmit={this.handleSubmit}>

          {/* The reason why we use label/ They are good for accessability like Svreen Readers
              Can click on the Name Text and BROWSER puts cursor inside box! */}
          <label htmlFor="name">Name:</label>
          
          {/* input accepts an attribute called value that can take in data */}
          {/* input field value can accept any kind of data" string, array, obj.... */}
          <input type="text" value={this.state.name} onChange={this.handleChange} id="name"/> 
              <br />
          <label htmlFor="price">Price:</label>
          <input type="number" value= {this.state.price} onChange={this.handleChange} id="price"/>
              <br />
          <label htmlFor="description">Description:</label>
          <input type="text" value={this.state.description} onChange={this.handleChange} id="description" />
          <br />
          {/*submit feld  */}
          <input type="submit" on/>
        </form>
              <div>
                <h2>Preview our new Item</h2>
                <h3>{this.state.name}</h3>
                <h4>{this.state.price}</h4>
                <h5>{this.state.description}</h5>

              </div>
        
        <ul>
          {/*Map over our products list hat we imported */}
          {
            //each item reps each element in our products array.
           this.state.products.map((item) => {
             return(
               <ProductList {...this.state.products.name}/>
              //  <h4>{item.name} {item.price} {item.description}</h4>
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