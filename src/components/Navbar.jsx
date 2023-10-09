import React, { useState } from "react"
import { Link } from "react-router-dom"
import { styles } from "../styles"
import { newLogo, menu, close } from "../assets"
import {navLinks} from "../constants"

const Navbar = () => {
    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={`${[styles.paddingX]} w-full flex items-center fixed py-5 top-0 z-20`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link className={`flex items-center gap-2`} onClick={() => {
                    setActive("")
                    window.scrollTo(0, 0)
                }}>
                    <img src={newLogo} alt="Logo" className="object-contain w-9 h-9" />
                    <p className="font-bold cursor flex bg-[#0c0c0c]">Oleg &nbsp;<span className="sm:block hidden">| Javascript Developer</span></p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map(({ id, title }) => (
                        <li 
                            key={id}
                            className={`${
                                active === title
                                    ? "text-white"
                                    : "text-secondary"} 
                                font-medium hover:text-white text-[18px]`} 
                            onClick={() => setActive(title)}>
                                <a href={`#${id}`}>{title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img 
                        src={!toggle ? menu : close} 
                        alt="Menu" 
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)} 
                    />
                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex flex-col justify-end gap-4">
                            {navLinks.map(({ id, title }) => (
                                <li 
                                    key={id}
                                    className={`${
                                        active === title
                                            ? "text-white"
                                            : "text-secondary"} 
                                        font-poppins font-medium text-[18px]`} 
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(title)
                                    }}>
                                        <a href={`#${id}`}>{title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar