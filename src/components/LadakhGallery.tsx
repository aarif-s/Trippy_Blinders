import { useState } from 'react';
import assets from '../assets/assets';

const galleryImages = [
  assets.LadakhTrip_pic1,
  assets.LadakhTrip_pic2,
  assets.LadakhTrip_pic3,
  assets.LadakhTrip_pic4,
  assets.LadakhTrip_pic5,
];

const LadakhGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Gallery of <span className="text-primary">Past Kashmir Trips</span>
      </h2>

      {/* Responsive Gallery Layout */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* First Image (Clickable, Increased Height on Larger Screens) */}
        <div className="col-span-1 cursor-pointer" onClick={() => openImage(0)}>
          <img
            src={galleryImages[0]}
            alt="Main Trip Image"
            className="w-full h-30 md:h-40 lg:h-96 xl:h-[335px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Remaining Images in Pairs */}
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openImage(index + 1)}
            >
              <img
                src={image}
                alt={`Trip ${index + 2}`}
                className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <p className="text-white text-sm font-semibold">View Image</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={closeImage}>
            &times;
          </button>
          <div className="flex items-center justify-center relative w-full max-w-4xl">
            <button className="absolute left-2 md:left-5 text-white text-3xl" onClick={prevImage}>
              &#10094;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged View"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button className="absolute right-2 md:right-5 text-white text-3xl" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LadakhGallery;
