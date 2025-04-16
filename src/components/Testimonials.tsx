import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    designation: 'Solo Girl Traveller',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    text: 'Amazing experience with Capture A Trip! The team made sure I felt safe and comfortable throughout my solo journey.'
  },
  {
    id: 2,
    name: 'Mike Chen',
    designation: 'Adventure Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    text: 'The attention to detail and personalized service made this trip unforgettable. Highly recommended!'
  }
]

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 py-1 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Reviews that Make Me Blush</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.designation}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials