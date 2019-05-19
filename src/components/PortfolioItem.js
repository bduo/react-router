import React from 'react';

const PortfoioItem = props => {
  console.log(props);
  return (
    <div>
      <h1>PortfoioItem</h1>
      <p>This is for the project with the id of {props.match.params.id}</p>
    </div>
  );
};

export default PortfoioItem;
