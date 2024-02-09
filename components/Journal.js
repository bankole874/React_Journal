import React from "react";
import locationLogo from "../assets/location.svg";

export default function Journal(props) {
  return (
    <section className="journal">
      <img className="journal--image" src={props.imageUrl} alt={props.title} />
      <div className="journal--info">
        <span className="journal--info--top">
          <img
            className="journal--location--logo"
            src={locationLogo}
            alt="location icon"
          />
          <span className="journal--location--text">
            {`${props.location}`.toUpperCase()}
          </span>
          <a
            className="journal--mapsurl"
            href={props.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </span>
        <h2 className="journal--info--title">{props.title}</h2>
        <p className="journal--info--date">
          {`${props.startDate} - ${props.endDate}`}
        </p>
        <p className="journal--info--description">{props.description}</p>
      </div>
    </section>
  );
}
