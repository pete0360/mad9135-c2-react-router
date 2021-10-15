import React from 'react'

export default function Home(props) {
    return (
      <div className="home">
        <p>This is the home page.</p>
        <p>
          The REQUIRED props isAlive and anything are being passed to this
          component. In App.js you can remove these to see the generated errors.
        </p>
      </div>
    );
  }
  
 
