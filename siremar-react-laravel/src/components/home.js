import React from 'react';
import '../style/home.css';

export default function Home() {
  return (
    <div className='home'>

      <h1> Portal for residents of Margarita  </h1>

      <div className='siteInfo'>
        <p>
          Margarita is a beautiful Island located in South America; it belongs to Venezuela. This island gets its
          budget from Central government based on its population.
          Siremar aims to keep a dynamic count of all residents of the Island so that the island can get a stable,
          sound budget from Central Government. The system will require all Residents to register. Registration
          can be online or in our offices. . Siremar will provide an ID and  a lot of  benefits to residents.
        </p>
      </div>

      {/* <a href="https://www.tourist-destinations.net/wp-content/uploads/2014/09/85.jpg">Click me</a> */}

      <img src='https://media.tacdn.com/media/attractions-splice-spp-674x446/06/77/92/4a.jpg' />

      <br />
      <button>Go to Dashboard</button>
    </div>
  )
}


