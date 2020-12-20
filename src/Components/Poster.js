/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import noImage from "./assets/noPosterSmall.png";
import noImage from "./assets/noPosterSmall.png";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 180px;
  background-image: cover;
  border-radius: 2px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;
const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
  span {
    &:first-child {
      letter-spacing: -3px;
    }
  }
`;
const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.span`
  display: block;

  margin-bottom: 3px;
`;
const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        {/* <Image bgUrl={imgUrl ? `https://image.tmdb.org/t/p/w300${imgUrl}` : "noPosterSmall.png"} /> */}
        <Image bgUrl={imgUrl ? `https://image.tmdb.org/t/p/w300${imgUrl}` : noImage} />
        <Rating>
          <span role="img" aria-label="rating">
            {parseInt(rating, 10) > 0 ? `⭐` : null}
            {parseInt(rating, 10) > 2 ? `⭐` : null}
            {parseInt(rating, 10) > 4 ? `⭐` : null}
            {parseInt(rating, 10) > 6 ? `⭐` : null}
            {parseInt(rating, 10) > 8 ? `⭐` : null}
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.prototype = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool.isRequired,
};

export default Poster;
