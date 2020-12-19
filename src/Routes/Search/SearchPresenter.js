/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;
const Form = styled.form`
  margin-bottom: 50px;
`;
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

// 1. at the beginning, it's nothing but for connecting to SearchContainer to cath the changement, MVC
const SearchPresenter = ({ movieResults, tvResults, loading, error, searchTerm, handleSubmit, updateTerm }) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movies or TV Shows..." value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imgUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.split("-")[0]}
                // eslint-disable-next-line react/jsx-boolean-value
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <Poster key={show.id} id={show.id} title={show.original_name} imgUrl={show.poster_path} rating={show.vote_average} year={show.first_air_date && show.first_air_date.split("-")[0]} />
            ))}
          </Section>
        )}
      </>
    )}
    {error && <Message text={error} color="#e74c3c" />}

    {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && <Message text="Nothing Found" color="gray" />}
  </Container>
);

// Constraint Check
SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
