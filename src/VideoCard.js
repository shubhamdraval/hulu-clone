import React, { forwardRef } from 'react'
import "./VideoCard.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TextTruncate from "react-text-truncate";


const base_url = "https://image.tmdb.org/t/p/original/";

const  VideoCard= forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="Movie Poster"></img>
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className="videoCard_stats">
                {movie.media_type && `${movie.media_type} . `}
                {movie.release_date || movie.first_air_date} .
    <ThumbUpIcon />{" "}{movie.vote_count}</p>
        </div>
    );
});

export default VideoCard;
