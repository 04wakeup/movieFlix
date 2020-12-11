/* eslint-disable max-len */
/* eslint-disable react/state-in-constructor */
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    showDetail: null,
    loading: true,
    error: null,
  };

  render() {
    const { topRated, popular, airingToday, showDetail, loading, error } = this.state;
    return <TVPresenter topRated={topRated} popular={popular} airingToday={airingToday} showDetail={showDetail} loading={loading} error={error} />;
  }
}
