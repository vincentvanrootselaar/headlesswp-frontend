import React, { Fragment} from "react";
import axios from "axios";
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      pages: []
    };
  }
  getAllPages = async() => {
    let res = await axios.get(
      `http://headlessreact.local/?rest_route=/wp/v2/pages`
    );
    let{data} = await res;
    this.setState({pages: data});
  };

  componentDidMount = async () => {
    await this.getAllPages();
  };
  render(){
    const {pages} = this.state;

    return(
      <Fragment>
        {pages.map((page, index) => {
          return <h1>
            {page.slug}
          </h1>;
        })}
      </Fragment>
    );
  }



}
