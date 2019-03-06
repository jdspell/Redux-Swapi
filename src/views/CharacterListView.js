import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchPeople } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchPeople();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return ("Fetching Data")
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = ({charsReducer: chars}) => {
  return {
    characters: chars.characters,
    error: chars.error,
    isFetching: chars.isFetching
  }
}

export default connect(mapStateToProps, {fetchPeople})(CharacterListView);
