/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/state-in-constructor */
// eslint-disable-next-line import/no-unresolved
import { moivesApi } from "api"; // static is set? by default?
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

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moivesApi.nowPlaying(); // constructuring
      const {
        data: { results: upcoming },
      } = await moivesApi.upcoming();
      const {
        data: { results: popular },
      } = await moivesApi.popular();
      throw Error();
      // eslint-disable-next-line no-unreachable
      this.setState({
        nowPlaying,
        upcoming,
        popular,
      }); // redner 2 second
    } catch {
      this.setState({
        // redner 2 second
        error: "Can't find movies information.",
      });
    } finally {
      this.setState({
        // redner 3 thrid
        loading: false,
      });
    }
  }

  render() {
    // redner 1 first.
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log("hi 00", this.state);
    return <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} error={error} loading={loading} />;
  }
}
