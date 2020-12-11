/* eslint-disable max-len */
/* eslint-disable react/state-in-constructor */
// eslint-disable-next-line import/no-unresolved
import { moivesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null,
  };

  // check term is null
  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  // search by term for TV shows, Movies
  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true }); // set it as loading
    try {
      const {
        data: { results: movieResults },
      } = await moivesApi.search(searchTerm);
      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} loading={loading} error={error} handleSubmit={this.handleSubmit} />;
  }
}
