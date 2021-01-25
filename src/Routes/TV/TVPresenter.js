/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
// eslint-disable-next-line import/no-unresolved
import Section from "Components/Section";
// eslint-disable-next-line import/no-unresolved
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    <Helmet>
      <title>TV Shows | Netflix</title>
    </Helmet>
    {
      // eslint-disable-next-line max-len
      loading ? (
        <Loader />
      ) : (
        <Container>
          {topRated && topRated.length > 0 && (
            <Section title="Top Rated Shows">
              {topRated.map((show) => (
                <Poster key={show.id} id={show.id} title={show.original_name} imgUrl={show.poster_path} rating={show.vote_average} year={show.first_air_date && show.first_air_date.split("-")[0]} />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular Shows">
              {popular.map((show) => (
                <Poster key={show.id} id={show.id} title={show.original_name} imgUrl={show.poster_path} rating={show.vote_average} year={show.first_air_date && show.first_air_date.split("-")[0]} />
              ))}
            </Section>
          )}
          {airingToday && airingToday.length > 0 && (
            <Section title="Airing Shows">
              {airingToday.map((show) => (
                <Poster key={show.id} id={show.id} title={show.original_name} imgUrl={show.poster_path} rating={show.vote_average} year={show.first_air_date && show.first_air_date.split("-")[0]} />
              ))}
            </Section>
          )}
          {error && <Message text={error} color="#e74c3c" />}
        </Container>
      )
    }
  </>
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
