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
                {name}
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