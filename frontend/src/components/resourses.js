// src/components/Resources.js
import React from 'react';


const Resources = () => {
  return (
    <div className="resources-page">
      <header className="header">
        <div className="header-content">
          <h1>Assets Management </h1>
          <h2> Indore Municipal Corporation </h2>
        </div>
      </header>
      <main className="resources-section">
        <h2 className="resources-title">RESOURCES</h2>
        <div className="resource-cards">
          <div className="resource-card">
            <div className="icon-container">
              <span className="icon">📊</span>
            </div>
            <h3>Vechiles Data </h3>
          </div>
          <div className="resource-card">
            <div className="icon-container">
              <span className="icon">📈</span>
            </div>
            <h3>Infrastructure</h3>
          </div>
          <div className="resource-card">
            <div className="icon-container">
              <span className="icon">📑</span>
            </div>
            <h3>Waterbodies</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;