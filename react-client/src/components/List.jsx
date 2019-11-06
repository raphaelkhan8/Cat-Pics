import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  // fetch the cat images to populate the list
  componentWillMount() {
    fetch('/images')
      .then(res => res.json())
      .then((data) => {
        let list = { ...this.state.list };
        list = data;
        this.setState({ list });
        console.log(data);
      })
      .catch((err) => {
        console.log('The images were not fetched', err);
      });
  }

  render() {
    console.log('state', this.state.list);
    const headerStyle = {
      textAlign: 'center',
      padding: '0',
      margin: '0',
    };
    return (
      <div>
        <h4 style={headerStyle}>List of liked cats</h4>
        {this.state.list.map((item) => {
          const { image } = item;
          return (
            <div key={item.id}>
              <a style={{ fontSize: '5px', padding: '0', margin: '0' }} href={image} target="_blank">{image}</a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
