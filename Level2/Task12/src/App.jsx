import React from 'react';
import ConditionalMessage from './ConditionalMessage';

function App() {
  return (
    <div>
      <ConditionalMessage loggedIn={false} />
    </div>
  )
}

export default App
