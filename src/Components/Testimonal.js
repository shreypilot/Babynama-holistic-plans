import React from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';


const Testimonial = () => {
  const theme = useSelector((state) => state.theme);

  const testimonials = [
    {
      id: 1,
      name: 'Pranati',
      image: 'https://th.bing.com/th/id/OIP.fs50xTL9KrERWsO6FvKuSgAAAA?pid=ImgDet&rs=1',
      testimonial: 'Mother of 3 month old baby"as a first time mother I am always anxious,but doctor is always there. Must have for all first time moms.',
      videoUrl: 'https://www.youtube.com/watch?v=JVx2HMvNk54'
      

    },
    {
      id: 2,
      name: 'Luna',
      image: 'https://www.sciencenews.org/wp-content/uploads/2015/05/ls_mothersday_free.jpg',
      testimonial: 'Mother of 4 month old baby "my baby had breathing issues, doctors here identified it and helped me calm down a lot. Iget replies on my WhatsApp, very helpful".',
      videoUrl: 'https://www.youtube.com/watch?v=b6oAvadGapY'

    },
    {
      id: 3,
      name: 'Amelia',
      image: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-happy-mother-playing-with-baby-on-hands-joyful-woman-holding-child-girl-on-hands-and-smiling-family-love-concept-happy-woman-enjoy-time-with-daughter-sweet-infant-on-mom-hand-happiness-motherhood_s0usjwsj7_thumbnail-1080_01.png',
      testimonial: 'Mother of 4 month old baby "my baby had breathing issues, doctors here identified it and helped me calm down a lot. Iget replies on my WhatsApp, very helpful".',
      videoUrl: 'https://www.youtube.com/watch?v=DLgyEtzOGYo'

    },
    {
      id: 4,
      name: 'Ava',
      image: 'https://lindsaynewlinphotography.files.wordpress.com/2012/04/dsc_0535.jpg?w=500',
      testimonial: 'Mother of 7 month old baby."the Doctors are easily available in a matter of minutes....it isreally worth taking the plan."',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

    },
    {
      id: 5,
      name: 'Ruchi Garg',
      image: 'https://th.bing.com/th/id/OIP.GhW6NCvGtpAsJqj_awuUqQAAAA?pid=ImgDet&rs=1',
      testimonial: 'Mother of 7 month old twins."Dr. Sumitra & Babynama have helped me in so many ways...suggest thisfor all mothers',
      videoUrl: 'https://www.youtube.com/watch?v=SOwQJqdcgAo'

    },
    {
      id: 6,
      name: 'Mr. and Mrs. Sharma',
      image: 'https://th.bing.com/th/id/OIP.CnFRj4zjS_JU-rsCGMW7WgHaE7?pid=ImgDet&rs=1',
      testimonial: 'Parents of 4 month old baby."please follow the group and take your experience. Thank you Babynama family"',
      videoUrl: 'https://www.youtube.com/watch?v=tnP6WJNEN24'

    },
  ];

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className={`${theme === 'light' ? 'bg-gray-700' : 'bg-gray-50'}`}>
      <div className="max-w-screen-xl mx-auto py-24 px-4 sm:px-6 lg:py-24 lg:px-8">
      <h1 className={`font-bold text-4xl text-center  mb-12 ${theme === 'light' ? 'text-gray-50' : 'text-gray-800'}`}>Parent Testimonal</h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 mt-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mt-8 lg:mt-0 box-border shadow-lg rounded-lg shadow-gray-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="ml-4">
                  <h3 className={`text-lg font-medium  ${theme === 'light' ? 'text-gray-50' : 'text-gray-800'}`}>{testimonial.name}</h3>
                </div>
              </div>
              <div className="mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <ReactPlayer url={testimonial.videoUrl} width='100%' height='100%' className="h-48  object-cover rounded-lg shadow-md" />
                    {/* <img className="h-48 w-full object-cover rounded-lg shadow-md" src={testimonial.image} alt={testimonial.name} /> */}
                  </div>
                  <div className="col-span-1">
                    <p className={`mt-2 text-gray-600  ${theme === 'light' ? 'text-gray-200' : 'text-gray-800'} `}>{testimonial.testimonial}</p>
                    <div className=" w-full h-full">
                      <div className=" flex justify-start mt-2">
                        <button className="bg-red-500 hover:bg-red-600 rounded-l-full rounded-r-full h-12 w-28 flex items-center justify-center" onClick={() => handleVideoClick(testimonial.videoUrl)}>
                          <p className=' text-white font-bold text-lg'>Play</p>
                          <AiFillPlayCircle className='bg-red-500 text-white text-2xl ml-2 font-bold'/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Testimonial;

