import React from 'react';
import './StudentReviews.css';
// import aImg from '../assets/a.jpg';
// import hImg from '../assets/h.jpg';
// import divitImg from '../assets/divit.jpeg';
// import tahaImg from '../assets/taha.jpg';
// import bgImage from '../assets/bg1.jpg'; // background image

const reviews = [
  {
    name: 'Aarav M.',
    quote: '“Got all my First Year books at half the price, directly from seniors. Super helpful!”',
    rating: 4.5,
    //image: aImg,
  },
  {
    name: 'Himesh P.',
    quote: '“Loved how easy it was to get exactly the books I needed. Clean interface too!”',
    rating: 5,
    //image: hImg,
  },
  {
    name: 'Rahul D.',
    quote: '“Really cool that seniors can give advice with the books. Helped me a lot in Sem 1.”',
    rating: 5,
    //image: divitImg,
  },
  {
    name: 'Taha S.',
    quote: '“Better than OLX or WhatsApp groups. Everything’s within college & reliable.”',
    rating: 5,
    //image: tahaImg,
  },
];

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fa-solid fa-star" style={{ color: 'gold' }}></i>
      ))}
      {halfStar && <i className="fa-solid fa-star-half-stroke" style={{ color: 'gold' }}></i>}
    </>
  );
};

const StudentReviews = () => {
  return (
    <div id="Members">
      {/* <div className="team" style={{ backgroundImage: `url(${bgImage})` }}> */}
      <div className="team">
        <h1>Student <span>Reviews</span></h1>
        <div className="team_box">
          {reviews.map((student, idx) => (
            <div className="profile" key={idx}>
              {/* <img src={student.image} alt={student.name} /> */}
              <div className="info">
                <h2 className="name">{student.name}</h2>
                <p className="bio">{student.quote}</p>
                <div className="team_icon">{getStars(student.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;
