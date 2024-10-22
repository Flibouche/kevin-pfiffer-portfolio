"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaBootstrap, FaDocker, FaGithub, FaLaravel, FaTrello, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiTailwindcss, SiNextdotjs, SiPhp, SiSymfony, SiObsidian, SiAdobeindesign, SiAdobephotoshop, SiAdobeillustrator, SiAdobelightroom, SiAdobepremierepro } from 'react-icons/si';
import { PiMouseScrollFill } from "react-icons/pi";
import { DiMysql, DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { motion } from 'framer-motion';

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

// About data
const about = {
    title: 'A propos de moi',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis quidem dolore perspiciatis debitis animi nihil culpa voluptate, ut illo.',
    info: [
        {
            fieldName: "Nom",
            fieldValue: "Kevin Pfiffer",
        },
        {
            fieldName: "Expérience",
            fieldValue: "moins d'1 an",
        },
        {
            fieldName: "Nationalité",
            fieldValue: "Française",
        },
        {
            fieldName: "Email",
            fieldValue: "kevin.pfiffer2@gmail.com",
        },
        {
            fieldName: "Langues",
            fieldValue: "Français, Anglais",
        },
    ]
}

// Experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Mon expérience',
    description: "Ancien chargé de communication, j'ai acquis de nombreuses compétences tout au long de ma vie professionnelle.",
    items: [
        {
            company: 'CO2M - Stage',
            position: 'Développeur Web & Web Mobile',
            duration: '2024 (2 mois)',
        },
        {
            company: 'BUG Days - Bénévolat',
            position: 'Chargé de communication',
            duration: '2021 - À ce jour',
        },
        {
            company: "Commune d'Audincourt - CDD",
            position: 'Chargé de communication',
            duration: '2020 - 2022',
        },
        {
            company: 'FIMU - Stage',
            position: 'Assistant de communication',
            duration: '2020 (4 mois)',
        },
        {
            company: "Necronomi'Con",
            position: 'Assistant de communication',
            duration: '2019 - 2020 (6 mois)',
        },
    ]
}

// Education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'Mes formations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    items: [
        {
            institution: 'Elan Formation - Strasbourg',
            degree: 'Développeur Web & Web Mobile',
            duration: '2024 - A ce jour',
        },
        {
            institution: 'IUT Belfort-Montbéliard',
            degree: 'LP MOSEL (Spécialité Événementiel)',
            duration: '2019 - 2020',
        },
        {
            institution: 'Lycée Notre Dame des Anges - Belfort',
            degree: 'BTS Assistant de Manager',
            duration: '2015 - 2017',
        },
        {
            institution: 'Lycée Raoul Follereau - Belfort',
            degree: 'Bac Professionnel Commerce',
            duration: '2011 - 2014',
        },
    ]
}

// Skills data
const skills = {
    title: 'Mes compétences',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    skillStructureAndStyle: [
        {
            icon: <FaHtml5 />,
            name: 'HTML 5',
        },
        {
            icon: <FaCss3 />,
            name: 'CSS 3',
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS',
        },
        {
            icon: <FaBootstrap />,
            name: 'Bootstrap',
        },
    ],
    skillLanguages: [
        {
            icon: <SiPhp />,
            name: 'PHP',
        },
        {
            icon: <FaJs />,
            name: 'JavaScript',
        },
    ],
    skillFrameworks: [
        {
            icon: <SiSymfony />,
            name: 'Symfony',
        },
        {
            icon: <FaReact />,
            name: 'React',
        }
    ],
    skillDatabase: [
        {
            icon: <DiMysql />,
            name: 'MySQL',
        },
        {
            icon: <DiMongodb />,
            name: 'MongoDB',
        },
    ],
    skillEnvironment: [
        {
            icon: <VscVscode />,
            name: 'Visual Studio Code',
        },
        {
            icon: <FaGithub />,
            name: 'GitHub',
        },
        {
            icon: <FaDocker />,
            name: 'Docker',
        },
        {
            icon: <FaNodeJs />,
            name: 'Node.js',
        },
    ],
    skillCurrentlyLearning: [
        {
            icon: <SiNextdotjs />,
            name: 'Next.js',
        },
        {
            icon: <FaLaravel />,
            name: 'Laravel',
        }
    ]
}

const softSkills = {
    title: 'Mes compétences transversales',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    skillModeling: [
        {
            icon: <FaFigma />,
            name: 'Figma',
        },
    ],
    skillOrganization: [
        {
            icon: <FaTrello />,
            name: 'Trello',
        },
        {
            icon: <SiObsidian />,
            name: 'Obsidian',
        },
    ],
    skillVisual: [
        {
            icon: <SiAdobeindesign />,
            name: 'InDesign',
        },
        {
            icon: <SiAdobephotoshop />,
            name: 'Photoshop',
        },
        {
            icon: <SiAdobeillustrator />,
            name: 'Illustrator',
        },
        {
            icon: <SiAdobelightroom />,
            name: 'Lightroom',
        },
        {
            icon: <SiAdobepremierepro />,
            name: 'Premiere Pro',
        },
    ],
    skillCommunication: [
        {
            icon: <FaFacebook />,
            name: 'Facebook',
        },
        {
            icon: <FaInstagram />,
            name: 'Instagram',
        },
        {
            icon: <FaSquareXTwitter />,
            name: 'Twitter',
        },
    ],
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container max-auto">
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value="experience">Expériences</TabsTrigger>
                        <TabsTrigger value="education">Formations</TabsTrigger>
                        <TabsTrigger value="skills">Hard skills</TabsTrigger>
                        <TabsTrigger value="soft">Soft skills</TabsTrigger>
                        <TabsTrigger value="about">À propos de moi</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* Experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <div className='flex justify-center xl:justify-start gap-3'>
                                    <img src={experience.icon} alt="Experience Icon" className='h-10 w-10' />
                                    <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                </div>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <motion.div animate={{ rotate: [0, 0.7, 0, 0] }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}>
                                        <PiMouseScrollFill className='absolute top-5 right-5 h-10 w-10 text-accent' />
                                    </motion.div>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* Dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <ScrollBar />
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <div className='flex justify-center xl:justify-start gap-3'>
                                    <img src={education.icon} alt="Experience Icon" className='h-10 w-10' />
                                    <h3 className='text-4xl font-bold'>{education.title}</h3>
                                </div>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <motion.div animate={{ rotate: [0, 0.7, 0, 0] }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}>
                                        <PiMouseScrollFill className='absolute top-5 right-5 h-10 w-10 text-accent' />
                                    </motion.div>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* Dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <ScrollBar />
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                    <motion.div animate={{ rotate: [0, 0.7, 0, 0] }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}>
                                        <PiMouseScrollFill className='absolute top-5 right-5 h-10 w-10 text-accent' />
                                    </motion.div>
                                    {/* Structure & Styles */}
                                    <h4>Structure & Styles :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {skills.skillStructureAndStyle.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    {/* Languages */}
                                    <h4>Langages :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {skills.skillLanguages.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    {/* Frameworks */}
                                    <h4>Frameworks :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {skills.skillFrameworks.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    {/* Database */}
                                    <h4>Bases de données :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {skills.skillDatabase.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    {/* Environnement */}
                                    <h4>Environnement de travail :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {skills.skillEnvironment.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    {/* Currently Learning */}
                                    <h4>En cours d'apprentissage :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {skills.skillCurrentlyLearning.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <ScrollBar />
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Soft */}
                        <TabsContent value='soft' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                    <motion.div animate={{ rotate: [0, 0.7, 0, 0] }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}>
                                        <PiMouseScrollFill className='absolute top-5 right-5 h-10 w-10 text-accent' />
                                    </motion.div>
                                    {/* Modeling */}
                                    <h4>Maquettage :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {softSkills.skillModeling.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    {/* Organization */}
                                    <h4>Organisation :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {softSkills.skillOrganization.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    {/* Visual */}
                                    <h4>Visuel :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {softSkills.skillVisual.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    {/* Communication */}
                                    <h4>Communication :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {softSkills.skillCommunication.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60 text-base'>{item.fieldName}</span>
                                                <span className='text-lg'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume