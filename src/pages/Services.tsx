import React from 'react';
import OurServices from '../components/OurServices';

/**
 * Services Page
 * - Renders the OurServices component to showcase available services.
 * - Designed with a modular and scalable approach for future enhancements.
 */

const Services = () => {
    return (
        <div className="services-container">
            {/* Hero Section - Optional (Add a header or intro) */}
            <section className="services-hero">
                <h1 className="services-title">Explore Our Services</h1>
                <p className="services-subtitle">
                    Discover a variety of top-notch services tailored to your needs.
                </p>
            </section>

            {/* Main Content Section */}
            <section className="services-content">
                <OurServices />
            </section>
        </div>
    );
};

export default Services;
