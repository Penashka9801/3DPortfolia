import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { style } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>Ozim barada | О себе</p>
        <h2 className={style.sectionHeadText}>Giris | </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Saytlary we web programmalaryny döretmek, dürli taslamalary durmuşa geçirmek meniň başarnyklarymyň esasy ugurlarydyr. 
       Täze tehnologiýalar bilen işlemek we müşderileriň isleglerine laýyk çözgütler hödürlemek boýunça tejribäm bar.Mundan başga-da, programmirlamany öwretmekde 
       tejribäm ulanyjylar üçin ýeňil we düşnükli usullary ulanmagy öz içine alýar. Täze başlaýanlardan başlap, öň tejribesi bolanlara çenli, 
       IT dünýäsinde ýol görkezmek meniň esasy maksadymdyr. || Меня зовут Оразмырат, я Backend и Frontend разработчик. Умею создавать современные сайты и веб-приложения, а также разрабатывать проекты, 
       соответствующие требованиям заказчиков. У меня есть опыт работы с новыми технологиями и поиска эффективных 
       решений для различных задач. Кроме того, я занимаюсь обучением программированию. Помогаю новичкам и тем, у кого уже есть опыт, освоить IT-сферу. 
       Объясняю сложные вещи простыми и понятными способами, чтобы каждый мог достичь своих целей.


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");