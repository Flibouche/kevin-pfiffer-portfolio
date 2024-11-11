"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
        >
            <div className="block">
                <div className="w-full text-center hover:duration-500 hover:text-accent text-sm mb-5">
                    <Link href='/privacy-policy' className="hover:text-accent transition-all relative after:bg-accent after:absolute after:h-0.5 after:w-0 after:top-5 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                        Politique de confidentialité
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default PrivacyPolicy