type StarRatingProps = {
  rating: number; // تایپ مقدار رتبه‌بندی
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // ایجاد آرایه‌ای از 5 ستاره
  const stars = [...Array(5)].map((_, index) => (index < rating ? "★" : "☆"));

  return (
    <div className="flex">
      {stars.map((star, index) => (
        <span
          key={index}
          className={`${
            star === "★" ? "text-yellow-400" : "text-gray-400"
          } text-3xl`}
        >
          {star}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
