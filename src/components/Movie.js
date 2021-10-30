import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

// state가 필요없을 경우, class 컴포넌트를 쓸 필요 없다
// git update test
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      // 클릭하면 movie-detail로 가게 되고, poster에서 온 모든 props를 보낸다
      to={{
        pathname: `movie/${id}`,
        state: {
          id,
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <p className="movie_summary">{summary.slice(0, 180)}...</p>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres_genre">
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
