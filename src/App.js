import React, { Component } from 'react'
import './App.css';


export class App extends Component {
  state ={
    Name1 : "",
    Department: "",
    Rating : "",
    employees: []
  }

  ChangeHandler=(e)=>{
    this.setState({[e.target.name] : e.target.value});
    console.log(this.state);
    
  }
  submithandler=(e)=>{
    e.preventDefault();
    // console.log(e.target);
    const empObj = {
      Name : this.state.Name1,
      Department : this.state.Department,
      Rating : this.state.Rating,
    }
    const arr = this.state.employees
    arr.push(empObj);
    this.setState({employees : arr});
  }
  render() {
    return (
      <>
        <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1><hr/>
        <form className='form'>
        <label >Name :</label>
        <input type={"text"} name="Name1" value={this.state.Name1} onChange={this.ChangeHandler}></input><br/><br/>
        <label>Department :</label>
        <input type={"text"} name="Department" value={this.state.Department} onChange={this.ChangeHandler}></input><br/><br/>
        <label>Rating :</label>
        <input type={"number"} name="Rating" value={this.state.Rating} onChange={this.ChangeHandler}></input><br/><br/><br/>
        <button className='button' onClick={this.submithandler}>Submit</button>

        </form>
        <hr></hr>
        <div className='container'>{this.state.employees.map((value,index)=>{
          return(
            <div>Name= {value.Name} , Department= {value.Department} , Rating= {value.Rating}</div>
          );
        })}</div>
      </>
    )
  }
}

export default App
