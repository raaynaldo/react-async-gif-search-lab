import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (search = "dolphin") => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=KYmSeTXtIJDjuqL9V07biHjMh3vSCkBI&limit=3`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          gifs: json.data,
        });
      });
  };

  render() {
    return (
      <div className="row">
        <GifList gifs={this.state.gifs} />
        <GifSearch fetchData={this.fetchData}/>
      </div>
    );
  }
}

export default GifListContainer;
