import React, {Component} from 'react';

import Cardlist from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }
//Code runs only the first time the component is added into the DOM
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((users)=> this.setState(()=>{
      return {monsters:users}
    }))
  }

  onSearchChange =(event)=>{
    const searchString= event.target.value.toLocaleLowerCase()           
    this.setState(()=>{
      return {searchField:searchString}
    })
  }

  render(){

    const {monsters, searchField}=this.state;
    const {onSearchChange}=this

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)              
    });

    return (
      <div className="App">
        <h1 className='App-Title'>Monster rolodex</h1>
     <SearchBox
     onChangeHandler={onSearchChange}
     placeholder="search monsters"
     className="monsters-search-box"
     />
    <Cardlist monsters={filteredMonsters}/>

      </div>
    );
  }
  
}

export default App;
