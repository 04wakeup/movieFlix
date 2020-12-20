/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/state-in-constructor */
import { moivesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie"),
    };
  }

  // eslint-disable-next-line consistent-return
  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    // eslint-disable-next-line radix
    const parseId = Number(id);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(parseId)) {
      return push("/"); // use return to avoid proceeding here!
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moivesApi.movieDetail(parseId));
      } else {
        ({ data: result } = await tvApi.showDetail(parseId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    console.log(result);
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
