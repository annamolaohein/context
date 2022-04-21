import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div css={css({
            width: '100%',
            height: 'auto',
            backgroundColor: '#262626',
            color: 'white',
            display: "flex",
            margin: 'auto',
        })}>
            <h3 css={css({
                width: '50%',
            })}>
                Anna Mo
            </h3>
            <p css={css({
                width: '50%',
            })}>
                List of Movies: {movies.length}
            </p>
        </div>
    )
}

export default Nav;