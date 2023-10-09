import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {fadeIn, textVariant} from '../utils/motion'
import { services } from '../constants'
import { Tilt } from 'react-tilt'
import SectionWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 250
          }}
          className="bg-tertiary rounded-[20px] py-5 min-h-[280px] flex flex-col justify-evenly items-center"
        >
          <img src={icon} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(2)}>
        <p className={styles.heroSubText}>Введение</p>
        <p className={styles.heroHeadText}>Обзор</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="max-w-3xl mt-5 leading-[30px] text-secondary text-[17px] my-5"
      >
        Привет! Меня зовут Олег, и я студент 3 курса технического университета. Я увлечен программированием и специализируюсь на языке JavaScript. Мой стэк технологий включает в себя React, Redux и PostgreSQL.
        Я также участвовал в нескольких хакатонах и соревнованиях по программированию, где получил ценный опыт работы в команде и решения сложных задач.

        Я всегда открыт для новых проектов и готов к новым вызовам. Если у вас есть интересный проект, связанный с моим стэком технологий, обязательно свяжитесь со мной! 🚀
      </motion.p>
      <div className="flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")