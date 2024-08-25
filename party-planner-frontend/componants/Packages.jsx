import React, { useState } from 'react';
import bday1 from '../src/assets/bday1.jpg';
import bday2 from '../src/assets/bday2.jpg';
import bday3 from '../src/assets/bday3.jpg';
import bday4 from '../src/assets/bday4.jpg';
import party1 from '../src/assets/party1.jpg';
import party2 from '../src/assets/party2.jpg';
import party3 from '../src/assets/party3.jpg';
import party4 from '../src/assets/party4.jpg';
import party5 from '../src/assets/party5.jpg';
import anni1 from '../src/assets/anni1.jpeg';
import anni2 from '../src/assets/anni2.jpeg';
import anni3 from '../src/assets/anni3.jpeg';
import anni4 from '../src/assets/anni4.jpeg';
import cel1 from '../src/assets/cel1.webp'
import cel2 from '../src/assets/cel2.webp'
import cel3 from '../src/assets/cel3.webp'
import cel4 from '../src/assets/cel4.webp'
import '../cssfiles/packages.css'; // Import the CSS file

const Packages = () => {
  const [visibleSection, setVisibleSection] = useState('');

  const handleButtonClick = (section) => {
    setVisibleSection(visibleSection === section ? '' : section); // Toggle the visibility
  };

  const renderCards = (packages) => {
    return packages.map((pkg, index) => (
      <div className="card" key={index}>
        <img src={pkg.image} alt={pkg.title} className="card-image" />
        <div className="card-content">
          <h5>{pkg.title}</h5>
          <p className="card-price">{pkg.price}</p>
        </div>
      </div>
    ));
  };

  const birthdayPackages = [
    { image: bday1, title: 'Birthday Package 1', price: '$100' },
    { image: bday2, title: 'Birthday Package 2', price: '$150' },
    { image: bday3, title: 'Birthday Package 3', price: '$200' },
    { image: bday4, title: 'Birthday Package 4', price: '$250' },
  ];

  const anniversaryPackages = [
    { image: anni1, title: 'Anniversary Package 1', price: '$200' },
    { image: anni2, title: 'Anniversary Package 2', price: '$250' },
    { image: anni3, title: 'Anniversary Package 3', price: '$300' },
    { image: anni4, title: 'Anniversary Package 4', price: '$350' },
  ];

  const celebrationPackages = [
    { image: cel1, title: 'Celebration Package 1', price: '$150' },
    { image: cel2, title: 'Celebration Package 2', price: '$200' },
    { image: cel3, title: 'Celebration Package 3', price: '$250' },
    { image: cel4, title: 'Celebration Package 4', price: '$300' }
    
  ];

  return (
    <div>
      <div className="packages-nav">
        <button className="perks" onClick={() => handleButtonClick('birthday')}>Birthday</button>
        <button className="perks" onClick={() => handleButtonClick('anniversary')}>Anniversary</button>
        <button className="perks" onClick={() => handleButtonClick('celebration')}>Celebration</button>
      </div>

      <div className="packages">
        {visibleSection === 'birthday' && (
          <div className="cards-section">
            {renderCards(birthdayPackages)}
          </div>
        )}
        {visibleSection === 'anniversary' && (
          <div className="cards-section">
            {renderCards(anniversaryPackages)}
          </div>
        )}
        {visibleSection === 'celebration' && (
          <div className="cards-section">
            {renderCards(celebrationPackages)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Packages;
