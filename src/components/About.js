import React from 'react';

function About () {
  return (
    <React.Fragment>
      <div className="flex justify-around">
        <div className='flex flex-col basis-1/2 justify-center'>
          <h2 className="align-center font-mono text-4xl my-6">About Us</h2>
          <p className="my-10 mx-24 leading-loose font-mono">An eclectic family of coffee fanatics on the quest to quell coffee cravings coast to coast, and beyond...</p>
        </div>        
        <div className='flex flex-col'>        
          <h2 className="align-center font-mono text-2xl my-6">Meet The Team</h2>
          <p className="py-2">An old school hippy</p>
          <p className="py-2">A highschool dropout</p>
          <p className="py-2">A nuclear physicist</p>
          <p className="py-2">13 Chihuaha's</p>
          <p className="py-2">Someone's Dad</p>
          <p className="py-2">YOU!</p>
        </div>
      </div>      
    </React.Fragment>
  )
}

export default About; 