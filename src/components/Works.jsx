import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import {motion} from 'framer-motion'
import { github } from '../assets'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'
import { projects } from '../constants'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt 
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
            <div onClick={() => window.open(source_code_link, "_blank")} className="cursor-pointer relative w-full h-[230px]">
                <img 
                    src={image}
                    alt={name}
                    className="object-cover w-full h-full rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end">
                    <div 
                        className="w-10 h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img 
                            src={github}
                            className="w-3/4 h-3/4 object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>

                <div className="mt-4 flex flex-wrap gap-5">
                    {tags.map(({name, color}) => (
                        <p className={`${color}`}>
                            #{name}
                        </p>
                    ))}
                </div>
            </div>
            </Tilt>
        </motion.div>
    )
}

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.heroSubText}>Мои работы</p>
                <h3 className={styles.heroHeadText}>Проекты</h3>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 max-w-3xl leading-[30px] text-[17px]"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsam debitis, laboriosam error consequatur cupiditate omnis quis rem blanditiis a atque tenetur facere odio. Sit inventore qui quod earum accusamus.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, "work")