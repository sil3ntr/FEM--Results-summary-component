import './App.scss';
import Summary from './components/Summary';
import data from "./data.json";
import React from 'react';

function App() {
  return (
        <div className='main'>
          <div className='results-box box'>
              <h2>Your Result</h2>
                <div className='circle'>
                    <div className='result-score'>76</div>
                    <div className='result-of100'>of 100</div>
                </div>
                <h1>Great</h1>
                You scored higher than 65% of the people who have taken these tests.
          </div>
          <div className='summary-box box'>
            <h2>Summary</h2>
            <div className='summary-list'>
                      {data.map((data) => 
                          <Summary
                              key={data.category}
                              category={data.category}
                              score={data.score}
                              icon={data.icon}
                              background={data.background}
                      />
                      )}
                <button className='continue-button'>Continue</button>
            </div>
          </div>     
           
            
            
      </div>
  );
}

export default App;
