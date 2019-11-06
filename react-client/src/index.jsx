import React from 'react';
import ReactDOM from 'react-dom';
import List from "./components/List.jsx"
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleClick = this.handleClick.bind(this);
  }


  // handle click method to post liked image
  handleClick(image) {
    axios.post("/images", {
      imageUrl: image
    }).then(response => {
      console.log(response);
      // have image url's and next image render when like button is clicked
      window.location = "/";
    })
      .catch(err => console.log('the images were not posted', err));
  }

  componentWillMount() {
    fetch("https://api.thecatapi.com/v1/images/search/")
      .then(res => res.json())
      .then(data => {
        let list = { ...this.state.list }
        list = data;
        this.setState({ list });
      })
      .catch(err => console.log('the list did not load', err));
  }

  render() {
    // console.log("state", this.state.list)
    const style = {
      appStyle: {
        display: "flex",
        justifyContent: "center",
      },
      centerImage: {
        textAlign: "center"
      },
      headerStyle: {
        textAlign: "center",
        padding: "0",
        margin: "0"
      },
      imageStyle: {
        textAlign: "center",
        maxHeight: "100px",
        maxWidth: "200px"
      }
    }
    const { appStyle, centerImage, headerStyle, imageStyle } = style

    return (
      <div style={appStyle}>
        <div>
          <h4 style={headerStyle}>Cats!</h4>
          {this.state.list.map(item => {
            const { url } = item;
            return (
              <div key={item.id} style={centerImage}>
                <img style={imageStyle} src={url} alt="the cats are all hiding :(" />
                <div>
                  <button onClick={() => this.handleClick(url)} style={{ fontSize: "10px" }}>Like Me!</button>
                </div>
              </div>
            )
          })}
          <div>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));