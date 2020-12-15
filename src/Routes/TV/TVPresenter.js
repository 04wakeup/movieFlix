/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// eslint-disable-next-line import/no-unresolved
import Section from "Components/Section";
// eslint-disable-next-line import/no-unresolved
import Loader from "Components/Loader";

const Container = styled.div`
  font-size: 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  // eslint-disable-next-line max-len
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && <Section title="Top Rated Shows">{topRated.map((show) => show.name)}</Section>}
      {popular && popular.length > 0 && <Section title="Popular Shows">{popular.map((show) => show.name)}</Section>}
      {airingToday && airingToday.length > 0 && <Section title="Airing Shows">{airingToday.map((show) => show.name)}</Section>}
    </Container>
  );

// Constraint Check
TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
