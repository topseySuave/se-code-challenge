import React from "react";

const Content = ({ latest }) => {
  return (
    <section className="content">
      {latest ?
        <div className="image-container">
          <div className="title">
            <h3>{latest.safe_title}</h3>
            <small>{`Published on ${latest.day || ''}/${latest.month || ''}/${latest.year || ''}`}</small>
          </div>
          <img
            className="latestImage"
            src={latest.img}
            alt={latest.title}
            title={latest.alt}
          />
        </div> : 
        <h2>No Comic available</h2>
      }
    </section>
  );
};

export default Content;
