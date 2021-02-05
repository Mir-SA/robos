import React, { Component } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./MainPage.css";

// import { requestRobots } from "../reducers";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = () => {
    return this.props.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    // const { robots } = this.state;
    const { onSearchChange, robots, isPending } = this.props;

    return isPending ? (
      <div className="container">
        <div className="loader"></div>
      </div>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filteredRobots()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
