import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialProps {
    containerStyles: string
    iconStyles: string
}

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/Flibouche' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/kevin-pfiffer/' },
]

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className={iconStyles}
                        target="_blank"
                    >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social