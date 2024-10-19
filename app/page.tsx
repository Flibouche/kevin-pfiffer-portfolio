import { FiDownload } from 'react-icons/fi';

// Components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* Text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Junior Développeur Full Stack</span>
                        <h1 className="h1 mb-6">
                            Hello Moi c'est <br /> <span className="text-accent">Kevin Pfiffer</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Ancien chargé de communication, j'ai décidé d'entamer une reconversion
                            professionnelle pour devenir développeur web.
                        </p>
                        {/* Buttons and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                            >
                                <span>Télécharger mon CV</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles='flex gap-6'
                                    iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                                />
                            </div>
                        </div>
                    </div>
                    {/* Photo */}
                    <div className='order-1 xl:oder-none mb-8 xl:mb-0'>
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    )
}

export default Home