import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      {/* Contact Form with Shadow and Padding */}
      <div className="w-full max-w-2xl  rounded-xl    md:p-8">
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
