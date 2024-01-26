import React, { useState } from 'react';
import './App.css';
import WelcomeMessage from './components/typewriter/welcomeMessage/welcomeMessage';
import InvitationPage from './pages/invitation/invitation';
import balloon from './background.png';

function App() {
  let [welcomeMessageEnded, setWelcomeMessageEnded] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
      {welcomeMessageEnded === true && <img src={balloon} alt="" />}

        <div className="container is-fluid">

            {welcomeMessageEnded === false ? 
            <>

              <h1 className="text-3xl font-bold">
                <WelcomeMessage checkWelcomeMessage={setWelcomeMessageEnded}/>
              </h1>
            </>
                :
                <div className="column is-full">
                  <InvitationPage/>
                </div>
              }
          </div>
          {welcomeMessageEnded === true && <img src={balloon} alt="" className='rotate'/>}

      </div>
    </div>
  );
}

export default App;
