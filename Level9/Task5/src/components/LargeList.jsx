import React from 'react';

const LargeList = React.memo(() => {
  const items = [];

  for (let i = 1; i <= 1000; i++) {
    items.push(<li key={i}>Item {i}</li>);
  }

  return (
    <div className="list-container">
      <h3>Large List (1000 items)</h3>
      <ul>{items}</ul>
    </div>
  );
});

export default LargeList;
