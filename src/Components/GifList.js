import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = props => {

  const results = props.data;
  let gifs = (results.length > 0 )
    ? results.map((gif, index) =>
        <Gif url={gif} key={index}/>
      )
    : <NoGifs />

  return(
    <ul className="gif-list">
      {gifs}
    </ul>
  );
}

export default GifList;
