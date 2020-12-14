import React from "react";

function GifSearch(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.fetchData(event.target.search.value);
  };
  
  return (
    <div className="col-md-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter a Search Term:</label>
          <input type="text" name="search" className="form-control" />
          <input type="submit" value="Find Gifs" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
}

export default GifSearch;
