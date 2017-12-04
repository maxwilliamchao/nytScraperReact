import React, {Component} from "react";
import Hero from "../components/hero";
import Panel from "../components/panel";
import API from "../utils/API";
import SearchResults from "../components/searchResults";

// submitformhandler, other api handler, render

class Home extends Component {
  state = {
    Topic: "",
    StartDate: "",
    EndDate: ""
  }

   submitInputHandler = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
    console.log(this.state)
  }


apiHandler = (event) => {
  event.preventDefault();
  API.getArticles(this.state.topic, this.state.StartDate, this.state.EndDate).then((res)=> {
    this.setState({StartDate: '', EndDate: '', Topic: ''})
    console.log("I am having the object array", res)
  })
}




render() {
  return (<div>
    <Hero>
      Homepage!
    </Hero>
    <Panel
    Topic={this.state.Topic}
    StartDate={this.state.StartDate}
    EndDate={this.state.EndDate}
    submitInputHandler = {this.submitInputHandler}
    apiHandler = {this.apiHandler}
    />
    <SearchResults
    results={this.state.results}
    />
  </div>)
};
}
// const Home = props =>
//   <div>
//     <Hero>
//       Homepage!

//     </Hero>

//     <Panel />
    

//   </div>

export default Home;