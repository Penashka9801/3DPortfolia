import React from 'react';
import { style } from '../style';

import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';

import { fadeIn, textVariant } from '../utils/motion';

import { testimonials } from '../constants';


const FeedbackCard = ({index, testimonial, name, designation, company, image }) => (
  <motion.div 
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px]"
    >
      <p className='text-white font-black tet-[48px]'>"</p>
      <div className='mt-1'>
        <p>{testimonial}</p>

        <div className='mt-7 flex'>

        </div>
      </div>
  </motion.div>
)


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black rounded-[20px]'>
      <div className={`${style.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={style.sectionSubText}>What others say</p>
          <h2 className={style.sectionHeadText}>Testimonails.</h2>
        </motion.div>
      </div>
      <div className={`${style.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index ) => (
          <FeedbackCard key={testimonial.name}
          index = {index}
          {...testimonial}
          />
        ))}

      </div>
    </div>
  )
}

export default Feedbacks