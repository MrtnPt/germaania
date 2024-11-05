import React from "react";
import "./Reviews.css";
import REVIEWDATA from "./reviews-data.js";
import { FaQuoteRight } from "react-icons/fa";

function getDateDiff(dateStr) {
    const today = new Date();
    const date = new Date(dateStr)
    let diffInMonths = today.getMonth() - date.getMonth() + 12 * (today.getFullYear() - date.getFullYear())
    console.log('today.getMonth(): ' + today.getMonth());
    console.log('date: ' + date);
    if (diffInMonths < 12) {
        return `${diffInMonths} hónapja`;
    } else if (diffInMonths % 12 === 0) {
        return `${diffInMonths / 12} éve`;
    } else {
        return `${diffInMonths / 12} éve ${diffInMonths % 12} hónapja`
    }
}

const ReviewCard = ({ name, date, review }) => (
    <div className="review">
        <div className="reviewHeader">
            <FaQuoteRight />
            <h3>{name}</h3>
            <p>{getDateDiff(date)}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: review }} />
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
