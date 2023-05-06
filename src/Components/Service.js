import React, { useState } from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Dedicated Pediatrician for baby’s holistic well-being ',
    content: 'You will be assigned a dedicated MD Pediatrician with over 8 years’ experience who you can privately chat with on WhatsApp and who will know your baby’s entire history. The doctor willproactively aid in creating a personalized plan for your baby’s holistic upbringing and also help in maintaining work-life balance.',
    image: 'https://thrive-peds.com/wp-content/uploads/2021/02/shutterstock_1250646838-1024x683.jpg',

  },
  {
    id: 2,
    title: '24X7 Pediatric support, in 15 minutes',
    content: 'You can book a video consultation with our doctors within 15 minutes, anytime of the day or night.',
    image: 'https://www.childrenscolorado.org/globalassets/parenting-advice/first-year-doctor-visits-a-guide.jpg'
  },
  {
    id: 3,
    title: 'Gynecologist support on Chat and Call    ',
    content: 'Our team of Gynecologists will be answering your chat queries ona WhatsApp group. Moreover, you can also always book aconsultation with a gynecologist. Our team will connect you witha doctor within 3 hours, during working hours (8 AM – 10 PM).',
    image: 'https://www.doconline.com/assets/website/images/how-it-works/online-doctor-tab-consultation.png'
  },
  {
    id: 4,
    title: 'Dermatology support for mother and baby    ',
    content: 'For any dermatology concerns, you can book a consultation withour Dermatologist. Consultation can be booked within 3 hours,during normal working hours.',
    image: 'https://media.istockphoto.com/id/937117200/photo/baby-boy-at-dermatologist-for-mole-check-up.jpg?s=612x612&w=is&k=20&c=JGKMafuFCBlZ0lgw5dkr3GZ4OYBhiHzOOyPG0WvD7dE='
  },
  {
    id: 5,
    title: 'Post Delivery Weight Loss Program ',
    content: 'With a team of Specialist Yoga Instructor and Dietician, we can help create a customized plan focusing on achieving your weight loss goals without compromising on the required precautions for C-Section delivery, or required nutrition for a lactating mother..',
    image:'https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/04/post-pregnancy-weight-loss-1648815773.jpg'
    },
  {
    id: 6,
    title: 'Weaning Workshop and Baby Nutrition Plan    ',
    content: 'Once you start weaning your baby, you can attend our workshops with our expert child nutritionist who will train you over a 4-hour session every month and help create a customized diet plansuited to your baby’s needs..',
    image:'https://babyfoode.com/wp-content/uploads/2021/05/guide-to-baby-led-weaning-1.png'
  },
  {
    id: 7,
    title: 'Breast-feeding and Lactation Assistance',
    content:'Our lactation counsellor will help in any issues like latching, lowmilk output, etc. You can book a consultation with her with atleast one day advance notice.',
    image:'https://www.babycenter.in/ims/2017/04/iStock-467946810_wide.jpg.pagespeed.ce.WRS-gz0nxW.jpg'
  },
  {
    id: 8,
    title: '10 day hassle free refund period',
    content: 'If you don’t like our service, no worries. Just message our support and we will initiate a refund which will reflect back in your account within 7 working days',
    image:'https://linuxpurchase.com/image/catalog/money-back-10days-linuxpurchase.png'
  },
];

const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className='bg-gray-50 w-screen h-screen'>
    <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 ">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
          <img src={service.image} alt={service.title} className="mb-4" />
            <h2 className="text-lg font-medium text-gray-900 mb-4">{service.title}</h2>
            <p className={`text-gray-600 ${activeAccordion === index ? 'max-h-full' : 'max-h-16 overflow-hidden'}`}>
              {service.content}
            </p>
            <button
              className="mt-4 text-blue-500 hover:text-blue-600 font-medium focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {activeAccordion === index ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Services;
