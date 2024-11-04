import React from "react";
import REVIEWDATA from "./reviews-data.js";

const ReviewCard = ({ name, date, review }) => (
    <div className="review">
        <h3>{name}</h3>
        <p><strong>Date:</strong> {date}</p>
        <p>{review}</p>
    </div>
);

const Reviews = () => {
    return (
        <div>
            {REVIEWDATA.map((review, index) => (
                <ReviewCard
                    key={index}
                    name={review.name}
                    date={review.date}
                    review={review.review}
                />
            ))}
        </div>
    );
};

export default Reviews;
