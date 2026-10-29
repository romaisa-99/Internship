import React , { Component } from "react";

class Counter extends Component{
    
    constructor(props) {
        super(props)
        //The staste obkject
        this.state = {
            //this.sate has property that is count and is initilized to 0
            count:0

        }
    }

    // increment(){
    //     //setstate has two parameters -  state object and call back function
    //     this.setState(
    //     {
    //         count:  this.state.count +1
    //     },
    //     () => {
    //         console.log('Callback value', this.state.count)

    //     }
    // )
    // }

    increment(){
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count)
}

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()   
    }

    render() {
        return (
            <div> 
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}> Increment</button>
            </div>
        )
    }
}

export default Counter 