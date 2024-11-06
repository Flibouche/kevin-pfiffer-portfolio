"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
    {
        num: '01',
        category: 'fullstack',
        title: 'Who Can Play',
        description: "Who Can Play est une initiative née d'un projet de fin d'études visant à démocratiser l'accès aux jeux vidéo pour les personnes en situation de handicap. Le projet repose sur une plateforme communautaire dont l'essence même dépend de l'implication active de ses utilisateurs.",
        stack: [{ name: "Symfony" }, { name: "TailwindCSS" }, { name: "JavaScript" }],
        image: '/assets/work/sf-whocanplay.webp',
        live: '',
        github: 'https://github.com/Flibouche/WhoCanPlay',
    },
    {
        num: '02',
        category: 'frontend',
        title: 'CO2M',
        description: "Ce projet a été développé lors de mon stage et consiste en la création d'une landing page pour l'entreprise CO2M. L'objectif de ce projet était d'explorer et de mettre en œuvre de nouvelles technologies avec lesquelles je n'avais pas encore travaillé en profondeur.",
        stack: [{ name: "React" }, { name: "TailwindCSS" }, { name: "GSAP" }, { name: "TypeScript" }],
        image: '/assets/work/co2m.webp',
        live: 'https://co2m.vercel.app/',
        github: 'https://github.com/Flibouche/co2m',
    },
    {
        num: '03',
        category: 'fullstack',
        title: 'MERN Blog',
        description: "Ce projet est une application de blog avec tableau de bord utilisant la stack MERN (MongoDB, Express.js, React.js et Node.js) et suit les étapes décrites d'un tutoriel Youtube.",
        stack: [{ name: "MongoDB" }, { name: "ExpressJS" }, { name: "React" }, { name: "NodeJS" }],
        image: '/assets/work/mern-blog.webp',
        live: 'https://blog-mern-stack-tdgw.onrender.com/',
        github: 'https://github.com/Flibouche/Blog-MERN-Stack',
    },
    {
        num: '04',
        category: 'frontend',
        title: '2D Portfolio',
        description: "J'ai suivi le tutoriel de FreeCodeCamp 'Build a Dev Portfolio as a 2D Game - JavaScript Course' et j'ai décidé de l'améliorer visuellement pour le personnaliser selon mes préférences.",
        stack: [{ name: "KaboomJS" }, { name: "ViteJS" }, { name: "Tiled" }],
        image: '/assets/work/2d-portfolio.webp',
        live: 'https://flibouche-2d-portfolio.vercel.app/',
        github: 'https://github.com/Flibouche/Flibouche-2D-Portfolio',
    },
    {
        num: '05',
        category: 'fullstack',
        title: 'Sessions',
        description: "Ce projet est une application destinée aux administrateurs de centres de formation pour gérer les sessions de formation. L'application permet aux administrateurs de gérer les sessions de formation, les modules, les catégories et les inscriptions des étudiants.",
        stack: [{ name: "Symfony" }, { name: "TailwindCSS" }, { name: "Flowbite" }],
        image: '/assets/work/sf-sessions.webp',
        live: '',
        github: 'https://github.com/Flibouche/SfSessions',
    },
    {
        num: '06',
        category: 'fullstack',
        title: 'CineDune',
        description: "Ce projet 'Film Wiki' est une application web conçue pour gérer des informations sur les films, les acteurs/actrices, les réalisateurs, les rôles et les genres cinématographiques.",
        stack: [{ name: "PHP 8" }, { name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }, { name: "SQL" }],
        image: '/assets/work/cinedune.webp',
        live: '',
        github: 'https://github.com/Flibouche/SQL_Cinema',
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: SwiperClass) => {
        // Get current slide index
        const currentIndex = swiper.activeIndex;
        // Update project state based on current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px0'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            {/* Outline num */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
                            {/* Project category */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                            {/* Project description */}
                            <p className='text-white/60'>{project.description}</p>
                            {/* Stack */}
                            <ul className='grid grid-cols-2 gap-4 md:flex'>
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className='text-xl text-accent'>
                                            {item.name}
                                            {/* Remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* Border */}
                            <div className='border border-white/20'></div>
                            {/* Buttons */}
                            <div className='flex items-center gap-4'>
                                {/* Live project button */}
                                {project.live ?
                                    <Link href={project.live} target='_blank'>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                    <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    :
                                    ''
                                }
                                {/* Github project button */}
                                <Link href={project.github} target='_blank'>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                                            {/* Overlay */}
                                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                            {/* Image */}
                                            <div className='relative w-full h-full'>
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className='object-contain'
                                                    alt={project.title}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* Slider buttons */}
                            <WorkSliderBtns
                                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                                iconsStyles=''
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work