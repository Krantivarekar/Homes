import React from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css';

const Timeline = () => {

  return (
    <div className='main'>
      <h1>Progress</h1>
      <div className='timeline'>

{/* Conceptual Phase */}
<div className='container left-container'>
  <Link to="/1_phase" className='text-box conceptual-card'>
    <h2 className='conceptual-text'> Conceptual </h2>
    <span className='left-container-arrow conceptual-arrow'></span>
  </Link>
</div>

{/* Principle Phase */}
<div className='container right-container'>
  <Link to="/2_phase" className='text-box principle-card'>
    <h2 className='principle-text'> Principle </h2>
    <span className='right-container-arrow principle-arrow'></span>
  </Link>
</div>

{/* Finance Phase */}
<div className='container left-container'>
  <Link to="/phase3" className='text-box finance-card'>
    <h2 className='finance-text'> Finance </h2>
    <span className='left-container-arrow finance-arrow'></span>
  </Link>
</div>

{/* New Grant Phase */}
<div className='container right-container'>
  <Link to="/phase4" className='text-box new-grant-card'>
    <h2 className='new-grant-text'> New Grant </h2>
    <span className='right-container-arrow new-grant-arrow'></span>
  </Link>
</div>

{/* Grant Phase */}
<div className='container left-container'>
  <Link to="/phase5" className='text-box grant-card'>
    <h2 className='grant-text'> Grant </h2>
    <span className='left-container-arrow grant-arrow'></span>
  </Link>
</div>

{/* Next Level Phase */}
<div className='container right-container'>
  <Link to="/phase6" className='text-box next-level-card'>
    <h2 className='next-level-text'> Next Level </h2>
    <span className='right-container-arrow next-level-arrow'></span>
  </Link>
</div>

{/* Startup Establish Phase */}
<div className='container left-container'>
  <Link to="/phase7" className='text-box startup-establish-card'>
    <h2 className='startup-establish-text'> Startup Establish </h2>
    <span className='left-container-arrow startup-establish-arrow'></span>
  </Link>
</div>

</div>
</div>

  );
};

export default Timeline;
