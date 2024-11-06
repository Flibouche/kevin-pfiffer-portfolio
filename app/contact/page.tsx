"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

// Icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Components
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Téléphone',
        description: '06 69 53 77 87'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'kevin.pfiffer2@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Localisation',
        description: 'Strasbourg'
    },
];

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .send(
                'service_y3rr1zg',
                'template_bxvz90w',
                {
                    from_name: form.name,
                    to_name: "Kevin Pfiffer",
                    from_email: form.email,
                    to_email: "kevin.pfiffer2@gmail.com",
                    message: form.message
                },
                'ScuE2nS3m1Twxa2LR'
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setMessage('Votre message a bien été envoyé !');
                    setTimeout(() => setMessage(''), 5000);
                    setForm({ name: '', email: '', message: '' });
                },
                (error) => {
                    setMessage('Une erreur est survenue, veuillez réessayer plus tard.');
                    setTimeout(() => setMessage(''), 5000);
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className='py-6'
        >
            {message && <p className="bg-accent my-4 text-center text-white">{message}</p>}
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Envoyez-moi un message !</h3>
                            <p className="text-white/60">Je suis ouvert aux propositions d'alternance pour le titre de Concepteur Développeur d'Applications ou aux propositions d'emplois.</p>
                            {/* Input */}
                            <div className="flex flex-col gap-6">
                                <Input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Quel est votre nom ?"
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Quelle est votre adresse email ?"
                                />
                            </div>
                            {/* Textarea */}
                            <Textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="h-[200px]"
                                placeholder="Que voulez-vous me dire ?"
                            />
                            {/* Buttons */}
                            <Button size="md" className="max-w-40" type="submit">Envoyer</Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section >
    );
}

export default Contact;