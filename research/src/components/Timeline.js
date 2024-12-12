import React from 'react';
import { Link } from 'react-router-dom';
import './Timeline.css';

const Timeline = () => {

  return (
    <div className='main'>
      <h1>Progress</h1>

      <div className='timeline'>

        {/* HTML Card */}
        <div className='container left-container'>
          <Link to="/initiation" className='text-box htmlcard'>
            <h2 className='htmltext'> Initiation </h2>
            <span className='left-container-arrow htmlarrow'></span>
          </Link>
        </div>

        {/* JavaScript Card */}
        <div className='container right-container'>
          <Link to="/planning" className='text-box javascriptcard'>
            <h2 className='javascripttext'> Planning </h2>
            <span className='right-container-arrow javascriptarrow'></span>
          </Link>
        </div>

        {/* React Js Card */}
        <div className='container left-container'>
          <Link to="/execution" className='text-box reactjscard'>
            <h2 className='reactjstext'> Execution </h2>
            <span className='left-container-arrow reactjsarrow'></span>
          </Link>
        </div>

        {/* Node JS Card */}
        <div className='container right-container'>
          <Link to="/monitoring" className='text-box nodejscard'>
            <h2 className='nodejstext'> Monitoring & Control </h2>
            <span className='right-container-arrow nodejsarrow'></span>
          </Link>
        </div>

        {/* Express Js Card */}
        <div className='container left-container'>
          <Link to="/closing" className='text-box expressjscard'>
            <h2 className='expressjstext'> Closing </h2>
            <span className='left-container-arrow expressjsarrow'></span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Timeline;
