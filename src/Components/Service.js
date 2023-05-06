import React from 'react'
import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Service = () => {
  const [visibleSection, setIsVisibleSection] = useState("team");

  return (
    <section className='bg-gray-50 '>
        <div className='mx-auto max-w-6xl md:px-2 sm:px-4'>
        <h1 className="text-3xl p-2 m-2 font-bold"> Our Service</h1>
          <div className='grid lg:grid-cols-4 md:grid-rows-1 lg:grid-rows-2 items-center gap-8 py-16  md:py-20'>
            <div className='mx-auto max-w-4xl  gap-8 px-4 md:grid-cols-2  border border-blue-950 bg-gray-300 '>
            <Section
              title={"About Instamart"}
              description={
                "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
              }
              isVisible={visibleSection === "about"}
              setIsVisible={() => setIsVisibleSection("about")}
            />
            </div>

            <div className='mx-auto max-w-4xl  gap-8 px-4 md:grid-cols-2  border border-blue-950 bg-gray-300 '>
            <Section
                title={"About Instamart"}
                description={
                  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                }
                isVisible={visibleSection === "team"}
                setIsVisible={() => setIsVisibleSection("team")}
      />

                {/* <h1 className=' font-bold leading-tight mb-6 text-xl'>
                      24X7 Pediatric support, in 15 minutes

                </h1>
                <div className='mx-auto max-w-3xl'>
                  <p className='mb-8 font-small text-gray-600 sm:text-lg md:text-md'>You can book a video consultation with our doctors within 15
                       minutes, anytime of the day or night.</p>
                   <div className='flex max-w-none gap-4 pt-20'>
                   </div>
                </div> */}
            </div>
            <div className='mx-auto max-w-4xl  gap-8 px-4 md:grid-cols-2  border border-blue-950 bg-gray-300 '>
                <h1 className=' font-bold leading-tight mb-6 text-xl'>
                        Gynecologist support on Chat and Call

                </h1>
                <div className='mx-auto max-w-3xl'>
                  <p className='mb-8 font-small text-gray-600 sm:text-lg md:text-md'>Our team of Gynecologists will be answering your chat queries on
                      a WhatsApp group. Moreover, you can also always book a
                      consultation with a gynecologist. Our team will connect you with
                      a doctor within 3 hours, during working hours (8 AM - 10 PM).</p>
                   <div className='flex max-w-none gap-4 pt-20'>
                   </div>
                </div>
            </div>
            <div className='mx-auto max-w-4xl  gap-8 px-4 md:grid-cols-2  border border-blue-950 bg-gray-300 '>
                <h1 className=' font-bold leading-tight mb-6 text-xl'>
                    Dermatology support for mother and baby

                </h1>
                <div className='mx-auto max-w-3xl'>
                  <p className='mb-8 font-small text-gray-600 sm:text-lg md:text-md'>
                      For any dermatology concerns, you can book a consultation with
                      our Dermatologist. Consultation can be booked within 3 hours,
                      during normal working hours.</p>
                   <div className='flex max-w-none gap-4 pt-20'>
                   </div>
                </div>
            </div>
            <div className='mx-auto max-w-4xl  gap-8 px-4 md:grid-cols-2  border border-blue-950 bg-gray-300 '>
                <h1 className=' font-bold leading-tight mb-6 text-xl'>
                  Post Delivery Weight Loss Program

                </h1>
                <div className='mx-auto max-w-3xl'>
                  <p className='mb-8 font-small text-gray-600 sm:text-lg md:text-md'>With a team of Specialist Yoga Instructor and Dietician, we can
                        help create a customized plan focusing on achieving your weight
                        loss goals without compromising on the required precautions for
                        C-Section delivery, or required nutrition for a lactating mother.</p>
                   <div className='flex max-w-none gap-4 pt-20'>
                   </div>
                </div>
            </div>
            <div className='mx-auto max-w-4xl  gap-8 px-4 md:grid-cols-2  border border-blue-950 bg-gray-300 '>
                <h1 className=' font-bold leading-tight mb-6 text-xl'>
                    Weaning Workshop and Baby Nutrition Plan

                </h1>
                <div className='mx-auto max-w-3xl'>
                  <p className='mb-8 font-small text-gray-600 sm:text-lg md:text-md'>
                  Once you start weaning your baby, you can attend our workshops
                    with our expert child nutritionist who will train you over a 4-hour
                    session every month and help create a customized diet plan
                    suited to your baby's needs.
                  </p>
                   <div className='flex max-w-none gap-4 pt-20'>
                   </div>
                </div>
            </div>
            <div className='mx-auto max-w-4xl  gap-8 px-4 md:grid-cols-2  border border-blue-950 bg-gray-300 '>
                <h1 className=' font-bold leading-tight mb-6 text-xl'>
                Breast-feeding and Lactation Assistance

                </h1>
                <div className='mx-auto max-w-3xl'>
                  <p className='mb-8 font-small text-gray-600 sm:text-lg md:text-md'>
                        Our lactation counsellor will help in any issues like latching, low
                          milk output, etc. You can book a consultation with her with at
                          least one day advance notice.
                  </p>
                   <div className='flex max-w-none gap-4 pt-20'>
                   </div>
                </div>
            </div>
            <div className='mx-auto max-w-4xl  gap-8 px-4 md:grid-cols-2  border border-blue-950 bg-gray-300 '>
                <h1 className=' font-bold leading-tight mb-6 text-xl'>
                  10 day hassle free refund period

                </h1>
                <div className='mx-auto max-w-3xl'>
                  <p className='mb-8 font-small text-gray-600 sm:text-lg md:text-md'>
                    If you don't like our service, no worries. Just message our support
                    and we will initiate a refund which will reflect back in your
                    account within 7 working days
                  </p>
                   <div className='flex max-w-none gap-4 pt-20'>
                   </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Service
