import React from 'react'

//import getEventFeed from '../../actions/events/getEventFeed.js'

class EventFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    console.log('fetching')
    fetch('https://us-central1-mbc-website-prod.cloudfunctions.net/getICal')
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res
          });
          console.log(res)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        {Object.keys(items).map(obj => (
          <div>
            <li>{items[obj].summary}</li>
            <p>{items[obj].description}</p>
            <p>{items[obj].location}</p>
          </div>
        ))}
        </div>
      );
    }
  }
}
export default EventFeed