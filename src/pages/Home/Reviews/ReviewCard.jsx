import React from 'react';

const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, review: testimonial } = review;
  return (
    <div className="card bg-white  p-6 rounded-3xl w-[300px] md:w-[350px]">
      {/* Quote Icon */}
      <div className="text-primary text-4xl mb-3">
        <span className="opacity-70">❝</span>
      </div>

      {/* Message */}
      <p className="text-gray-600 text-sm leading-relaxed">{testimonial}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-bold text-[#073B3F]">{userName}</h3>
          <p className="text-gray-500 text-xs">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;