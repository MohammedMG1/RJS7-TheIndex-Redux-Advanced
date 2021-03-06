import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";


class AuthorsList extends Component {

  render() {
    const authorCards = this.props.filteredAuthors.map(author => (
      <AuthorCard key={author.id} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar changeHandler={this.filterAuthors} />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

const mapSateToPrpps = state => {
  return {
    filteredAuthors: state.rootAuthors.filteredAuthors
  };
};

export default connect(mapSateToPrpps)(AuthorsList);
