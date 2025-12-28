import React from "react";
import verified from "/i_verified.png";
import RatingStars from "/src/pages/web/review/RatingStars";


const ItemsReview = ({ data }) => {
  return (
    <div className="card_review full-w full-h">
      <div className="card_review_img absolute">
        <img src={data.photo} alt="" />
      </div>
      <div className="card_review_info flex column full-h">
        <div>
          <b className="flex row">
            {data.name} <img src={verified} alt="" className="relative" />
          </b>
          <p>
            {data.city}, {data.country_code}
          </p>
        <span>
          <RatingStars rating={data.rating} />
        </span>
        </div>
        <div>
          <p>{data.rating_text}</p>
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemsReview;
