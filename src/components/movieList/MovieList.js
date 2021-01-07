import React from 'react';

import withMovieList from './withMovieList';

const MovieList = ({ movies }) => (
    <>
        <ul>
            {movies.map(({ id, title, poster_path }) => (
                <li key={id}>
                    {title}
                    <img
                        style={{ width: 150 }}
                        alt={title}
                        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    />
                </li>
            ))}
        </ul>
    </>
);

export default withMovieList('/api')(MovieList);
