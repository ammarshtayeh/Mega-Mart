import { Review } from "../../types";
import { ProductReviewsProps } from "../../types/product-detail";

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  const hasReviews = Array.isArray(reviews) && reviews.length > 0;

  return (
    <div className="bg-gray-50 p-8 lg:p-12 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hasReviews ? (
          reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {}
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    {review.reviewerName ? review.reviewerName.charAt(0).toUpperCase() : "U"}
                  </div>
                  
                  <div>
                    {}
                    <p className="text-sm font-bold text-gray-900">
                      {review.reviewerName || "Anonymous"}
                    </p>
                    
                    {}
                    <div className="flex text-yellow-400 text-xs">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <svg 
                          key={starIndex} 
                          className={`w-3 h-3 ${
                            starIndex < (review.rating || 0) 
                              ? "fill-current" 
                              : "text-gray-200 fill-current"
                          }`} 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {}
                <span className="text-xs text-gray-400">
                  {review.date ? new Date(review.date).toLocaleDateString() : ""}
                </span>
              </div>
              
              {}
              <p className="text-gray-600 text-sm italic">"{review.comment}"</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet for this product.</p>
        )}
      </div>
    </div>
  );
}
