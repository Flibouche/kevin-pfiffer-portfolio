"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

// Icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaBootstrap, FaDocker, FaGithub, FaLaravel, FaTrello, FaFacebook, FaInstagram, FaEye, FaFistRaised, FaHandshake, FaGuitar } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiPhp, SiSymfony, SiObsidian, SiAdobeindesign, SiAdobephotoshop, SiAdobeillustrator, SiAdobelightroom, SiAdobepremierepro, SiAseprite, SiCsharp } from 'react-icons/si';
import { FaSquareXTwitter, FaArrowsTurnToDots } from 'react-icons/fa6';
import { IoLogoGameControllerB } from 'react-icons/io';
import { MdVolunteerActivism } from 'react-icons/md';
import { DiMysql, DiMongodb } from 'react-icons/di';
import { PiMouseScrollFill } from 'react-icons/pi';
import { BsArrowDownRight } from 'react-icons/bs';
import { VscVscode } from 'react-icons/vsc';

// Components
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

// About data
const about = {
    icon: '/assets/resume/user.svg',
    title: 'À propos de moi',
    description: "Je suis un jeune développeur web/mobile passionné par les nouvelles technologies et les jeux vidéo. J'ai une expérience en communication et en événementiel qui me permet de m'adapter rapidement à de nouveaux environnements et de travailler en équipe.",
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
            fieldName: "Langues",
            fieldValue: "Français, Anglais",
        },
        {
            fieldName: "Email",
            fieldValue: "kevin.pfiffer2@gmail.com",
        },
    ],
    skill: [
        {
            icon: <FaEye />,
            name: 'Curiosité',
            description: '',
        },
        {
            icon: <FaArrowsTurnToDots />,
            name: 'Adaptabilité',
            description: '',
        },
        {
            icon: <FaFistRaised />,
            name: 'Ténacité',
            description: '',
        },
        {
            icon: <FaHandshake />,
            name: 'Aisance relationnelle',
            description: '',
        },
    ],
    passion: [
        {
            icon: <IoLogoGameControllerB />,
            name: 'Jeux vidéo',
        },
        {
            icon: <FaGuitar />,
            name: 'Musique',
        },
        {
            icon: <SiAseprite />,
            name: 'Pixel Art',
        },
        {
            icon: <MdVolunteerActivism />,
            name: 'Bénévolat',
        },
    ]
}

// Experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Mes expériences',
    description: "Ancien chargé de communication, j'ai eu la chance d'avoir de nombreuses expériences professionnelles et bénévoles dans des domaines galvanisants.",
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
    description: "Parcours atypique mais riche en connaissances, j'ai suivi des formations variées tout le long de ma vie, ce qui m'a permis d'acquérir des compétences diverses.",
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

// Certification data
const certification = {
    icon: '/assets/resume/award.svg',
    title: 'Mes certifications',
    description: "Au cours de ma formation de développeur web et web mobile, j'ai eu l'occasion de suivre des modules de certification en conformité avec le RGPD et freeCodeCamp.",
    items: [
        {
            organism: 'CNIL',
            certification: 'Module 4: Le DPO et les outils de la conformité',
            deliverance: 'Septembre 2024',
            link: 'https://www.linkedin.com/in/kevin-pfiffer/details/certifications/1725288585800/single-media-viewer/?profileId=ACoAACfhG_UBdGlOnY4ORlQwD1ptXTlno2xfYFM',
        },
        {
            organism: 'CNIL',
            certification: 'Module 3: Les responsabilités des acteurs',
            deliverance: 'Août 2024',
            link: 'https://www.linkedin.com/in/kevin-pfiffer/details/certifications/1724832616198/single-media-viewer/?profileId=ACoAACfhG_UBdGlOnY4ORlQwD1ptXTlno2xfYFM'
        },
        {
            organism: 'CNIL',
            certification: 'Module 2: Les principes de la protection des données',
            deliverance: 'Août 2024',
            link: 'https://www.linkedin.com/in/kevin-pfiffer/details/certifications/1724832601485/single-media-viewer/?profileId=ACoAACfhG_UBdGlOnY4ORlQwD1ptXTlno2xfYFM'
        },
        {
            organism: 'CNIL',
            certification: 'Module 1: Le RGPD et ses notions clés',
            deliverance: 'Juillet 2024',
            link: 'https://www.linkedin.com/in/kevin-pfiffer/details/certifications/1720011455940/single-media-viewer/?profileId=ACoAACfhG_UBdGlOnY4ORlQwD1ptXTlno2xfYFM'
        },
        {
            organism: 'freeCodeCamp',
            certification: 'Responsive Web Design',
            deliverance: 'Avril 2024',
            link: 'https://www.linkedin.com/in/kevin-pfiffer/details/certifications/1712058368906/single-media-viewer/?profileId=ACoAACfhG_UBdGlOnY4ORlQwD1ptXTlno2xfYFM',
        }
    ]
}

// Skills data
const skills = {
    icon: '/assets/resume/gear.svg',
    title: 'Mes compétences',
    description: "Pendant mon parcours chez Elan Formation, j'ai pu découvrir et pratiquer de nombreux langages et outils de développement. Je développe mes compétences également pendant mon temps libre.",
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
        },
        {
            icon: <SiCsharp />,
            name: 'C#',
        }
    ]
}

const transversalSkills = {
    icon: '/assets/resume/gears.svg',
    title: 'Mes compétences transversales',
    description: "Je possède également des compétences transversales qui me permettent de m'organiser sur mes projets en plus de mes compétences de communicant.",
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
                        <TabsTrigger value="certification">Certifications</TabsTrigger>
                        <TabsTrigger value="skills">Hard skills</TabsTrigger>
                        <TabsTrigger value="transversal">Tranversal skills</TabsTrigger>
                        <TabsTrigger value="about">À propos de moi</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* Experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <div className='flex flex-col justify-center xl:flex-row xl:justify-start gap-3'>
                                    <img src={experience.icon} alt="Experience Icon" className='h-10' />
                                    <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                </div>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <PiMouseScrollFill className='absolute top-5 right-5 h-10 w-10 text-accent animate-bounce' />
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
                                <div className='flex flex-col justify-center xl:flex-row xl:justify-start gap-3'>
                                    <img src={education.icon} alt="Education Icon" className='h-10' />
                                    <h3 className='text-4xl font-bold'>{education.title}</h3>
                                </div>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <PiMouseScrollFill className='absolute top-5 right-5 h-10 w-10 text-accent animate-bounce' />
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

                        {/* Certification */}
                        <TabsContent value='certification' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <div className='flex flex-col justify-center xl:flex-row xl:justify-start gap-3'>
                                    <img src={certification.icon} alt="Certification Icon" className='h-10' />
                                    <h3 className='text-4xl font-bold'>{certification.title}</h3>
                                </div>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {certification.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <PiMouseScrollFill className='absolute top-5 right-5 h-10 w-10 text-accent animate-bounce' />
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {certification.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent'>{item.deliverance}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left line-clamp-2'>{item.certification}</h3>
                                                    <div className='flex items-center w-full justify-between'>
                                                        {/* Dot */}
                                                        <div className='flex flex-row items-center gap-3'>
                                                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                            <p className='text-white/60'>{item.organism}</p>
                                                        </div>
                                                        <Link href={item.link} target='_blank' className='group h-10 w-20 p-5 rounded-full bg-white/80 flex justify-center items-center'>
                                                            <BsArrowDownRight className='text-primary text-3xl group-hover:-rotate-45 transition-all duration-500 group-hover:text-accent' />
                                                        </Link>
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
                                    <div className='flex flex-col justify-center xl:flex-row xl:justify-start gap-3'>
                                        <img src={skills.icon} alt="Hard Skills Icon" className='h-10' />
                                        <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    </div>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                    <PiMouseScrollFill className='absolute top-5 right-5 h-10 w-10 text-accent animate-bounce' />
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

                        {/* Transversal skills */}
                        <TabsContent value='transversal' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <div className='flex flex-col justify-center xl:flex-row xl:justify-start gap-3'>
                                        <img src={transversalSkills.icon} alt="Transerval Skills Icon" className='h-10' />
                                        <h3 className='text-4xl font-bold'>{transversalSkills.title}</h3>
                                    </div>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{transversalSkills.description}</p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                    <PiMouseScrollFill className='absolute top-5 right-5 h-10 w-10 text-accent animate-bounce' />
                                    {/* Modeling */}
                                    <h4>Maquettage :</h4>
                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                        {transversalSkills.skillModeling.map((skill, index) => {
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
                                        {transversalSkills.skillOrganization.map((skill, index) => {
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
                                        {transversalSkills.skillVisual.map((skill, index) => {
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
                                        {transversalSkills.skillCommunication.map((skill, index) => {
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
                                <div className='flex flex-col justify-center xl:flex-row xl:justify-start gap-3'>
                                    <img src={about.icon} alt="About Me Icon" className='h-10' />
                                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                                </div>
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
                            <h4 className='mt-5'>Soft skills :</h4>
                            <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                {about.skill.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[50px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-3xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
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
                            <h4 className='mt-5'>Mes passions :</h4>
                            <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                {about.passion.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[50px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-3xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
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
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume