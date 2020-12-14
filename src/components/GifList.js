import React from "react";

function GifList(props) {
  const renderLi = () => {
    return props.gifs.map((gif) => (
      <li key={gif.url}>
        <img src={gif.images.original.url} alt="" />
      </li>
    ));
  };

  return (
    <div className="col-md-8">
      <ul>{renderLi()}</ul>
    </div>
  );
}

export default GifList;
