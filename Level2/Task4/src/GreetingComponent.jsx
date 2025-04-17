import React from 'react';

function GreetingComponent({ name }) {
  return (
    <div>
      Hello, {name}!
    </div>
  );
}

GreetingComponent.defaultProps = {
  name: 'World',
};

export default GreetingComponent;
