import React, { useEffect, useState } from 'react';

const withMovieList = (link) => ListComponent => props => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(link).then(resp => resp.json()).then(({ results }) => setMovies(results));
    }, []);

    return <ListComponent movies={movies} {...props} />;
};

export default withMovieList;
