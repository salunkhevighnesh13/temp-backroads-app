import React from 'react'

const Tour = ({title, image, date, info, location, duration, cost}) => {
  return (
    <article className="tour-card">
        <div className="tour-img-container">
            <img src={image} className="tour-img" alt={title} />
            <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
            <h4>{title}</h4>
            <p>{info}</p>
            <div className="tour-footer">
                <p>
                <span><i className="fas fa-map"></i></span> {location}</p>
                <p>{duration} days</p>
                <p>from ${cost}</p>
            </div>
        </div>
    </article>
  )
}

export default Tour
