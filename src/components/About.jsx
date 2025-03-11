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
        <h2 className={style.sectionHeadText}> 🎓 Образование:
        Я окончил Российский университет дружбы народов (РУДН) в 2024 году, получив степень бакалавра.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Привет! Меня зовут Оразмырат, я Full-Stack разработчик с опытом работы как во фронтенде, так и в бэкенде. Люблю создавать современные веб-приложения, прорабатывать их архитектуру и оптимизировать производительность.

Мои навыки
Frontend:

React.js, Next.js, Vite.js
Tailwind CSS, HTML, CSS, JavaScript
React Native – разработка мобильных приложений

Backend:

Node.js, Express.js, Django
PostgreSQL, MongoDB – работа с базами данных
Развёртывание и администрирование серверов (Nginx, SSL-сертификаты, домены)
Что я могу сделать?
Разработать полноценное веб-приложение с современным UI/UX
Написать бэкенд API с аутентификацией и базами данных
Настроить сервер и домен для запуска проекта
Разработать мобильное приложение на React Native


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