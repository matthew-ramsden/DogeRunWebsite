import React from "react";
import PropTypes from "prop-types";
import {YoutubeIframe} from './youtubeEmbededStyledElements'
const YoutubeEmbeded = ({ embedId }) => (
  <div className="video-responsive">
    <YoutubeIframe src={`https://www.youtube.com/embed/${embedId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
    />      
  </div>
);

YoutubeEmbeded.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbeded;