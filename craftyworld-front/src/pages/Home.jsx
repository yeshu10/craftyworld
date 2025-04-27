import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/layout/Navbar";
import Slider from "react-slick";

// Sample product and review data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$99.99",
    img: "https://via.placeholder.com/300x200?text=Product+1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$199.99",
    img: "https://via.placeholder.com/300x200?text=Product+2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$149.99",
    img: "https://via.placeholder.com/300x200?text=Product+3",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$249.99",
    img: "https://via.placeholder.com/300x200?text=Product+4",
  },
];

const reviews = [
  {
    name: "John Doe",
    review: "Amazing product! Highly recommend.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "Good value for money. Satisfied with the quality.",
    rating: 4,
  },
  {
    name: "Mark Johnson",
    review: "It works great. A bit pricey, but worth it.",
    rating: 4,
  },
];

const Home = () => {
  const user = useSelector((state) => state.auth.user); // Get user from Redux store

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      

      {/* Image Carousel */}
      <div className="p-4">
        <Slider {...carouselSettings}>
          <div>
            <img
              src="https://via.placeholder.com/1200x400?text=Image+1"
              alt="Carousel 1"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1200x400?text=Image+2"
              alt="Carousel 2"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1200x400?text=Image+3"
              alt="Carousel 3"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/1200x400?text=Image+4"
              alt="Carousel 4"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </Slider>
      </div>

      

      {/* Products Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-xl text-pink-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-600">{review.review}</p>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
