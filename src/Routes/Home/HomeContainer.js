/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/state-in-constructor */
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />;
  }
}
