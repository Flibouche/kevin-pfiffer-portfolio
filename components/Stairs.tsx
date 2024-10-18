import { motion } from "framer-motion";

// Variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// Calculer l'index inversé pour le délai échelonné
const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index;
}

const Stairs = () => {
    return (
        <>
            {/* Rendre 6 divs motion, chacune représentant une marche de l'escalier.
            Chaque div aura la même animation définie par l'objet stairsAnimation.
            Le délai pour chaque div est calculé dynamiquement en fonction de son index inversé,
            créant un effet échelonné avec un délai décroissant pour chaque marche suivante.
            */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut',
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-white relative"
                    />
                )
            })}
        </>
    )
}

export default Stairs