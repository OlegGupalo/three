import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'

const ExpirienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div>
                    <img 
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[100%] h-[100%] object-contain"
                    />
                </div>
            }
        >

            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p className="text-secondary" style={{fontSize: '14px', margin: 0}}>{experience.company_name}</p>
            </div>
            <ul className="mt-5 list-disc space-y-2 ml-2">
                {experience.points.map((point, index) => (
                    <li 
                        key={index} 
                        className="text-white text-[14px] pl-1 tracking-wider"
                    >
                            {point}
                    </li>
                ))}
            </ul>
            <p className="text-secondary pt-5" style={{fontSize: '14px', margin: 0}}>{experience.date}</p>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.heroSubText}>Путь становления</p>
                <h3 className={styles.heroHeadText}>Опыт разработки</h3>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExpirienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div> 
        </>
    )
}

export default SectionWrapper(Experience, "expirience")