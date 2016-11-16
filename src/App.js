import React, { Component } from 'react';
import './App.css';

const newsFeedData = [
  {
    author: 'Front End Ninjas',
    message: 'CSS animations are great.',
  },
  {
    author: 'FreeCodeCamp',
    message: 'Learn more about our new React tutorial!',
  },
  {
    author: 'Treehouse',
    message: 'We just released a new tutorial on building MEAN applications.',
  },
];

class Feed extends Component {
  constructor(props) {
    super(props);

    this.removeHandleClick = this.removeHandleClick.bind(this);
  }

  removeHandleClick(event) {
    event.preventDefault();
    this.props.clickHandler(this.props.news);
  }

  render() {
    return (
      <div className="feed">
        <div className="feedHeader cf">
          <div className="avatar">
            <div className="egg"></div>
          </div>
          <a className="pullRight smallText muted"
            onClick={this.removeHandleClick} href="">
            <i className="material-icons">not_interested</i>
          </a>
          <h3>{this.props.news.author}</h3>
        </div>
        <div className="feedBody cf">
          <p>{this.props.news.message}</p>

        </div>
        <div className="feedFooter cf">
          <ul className="feedControls unstyledList inlineList pullLeft">
            <li><a className="muted" href="#"><i className="material-icons">face</i></a></li>
            <li><a className="muted" href="#"><i className="material-icons">repeat</i></a></li>
            <li><a className="muted" href="#"><i className="material-icons">favorite</i></a></li>
            <li><a className="muted" href="#"><i className="material-icons">more_vert</i></a></li>
          </ul>
          <a className="report pullRight" href="#"><i className="material-icons">report_problem</i></a>
        </div>
      </div>
    );
  }
}

class NewsFeed extends Component {

  constructor() {
    super();
    this.state = {};

    // methods
    this.removeFromFeed = this.removeFromFeed.bind(this);
  }

  componentWillMount() {
    this.setState({
      newsFeed: newsFeedData,
    });
  }

  removeFromFeed(item) {
    let temp = this.state.newsFeed;
    let index = temp.indexOf(item);
    temp.splice(index, 1);
    this.setState({
      newsFeed: temp,
    });
  }

  renderNewsFeed() {
    if (this.state.newsFeed.length) {
      return this.state.newsFeed.map((feedItem, index) =>
          <Feed key={index} news={feedItem} clickHandler={this.removeFromFeed}/>
      );
    } else {
      return <p class="muted">No items in news feed :(</p>;
    }
  }

  printItemCount(count) {
    if (count === 0) return null;

    if (count === 1) {
      return <p>You have 1 item in your feed.</p>;
    } else {
      return <p>you have {count} items in your feed.</p>;
    }
  }

  render() {
    return (
      <div className="feedList">
        {this.printItemCount(this.state.newsFeed.length)}
        {this.renderNewsFeed()}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsFeed/>
      </div>
    );
  }
}

export default App;
