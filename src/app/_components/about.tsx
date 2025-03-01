import Image from "next/image";
import about1Img from "../../../public/about-1.png"
import about2Img from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";


export function About() {
    return (
        <section className="bg-[#FDF6EC] py-16">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="800">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="Imagem de um cachorro com gato"
                                fill
                                quality={100}
                                priority
                                className="object-cover hover:scale-110 duration-300"
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 border-white overflow-hidden rounded-lg">
                            <Image
                                src={about2Img}
                                alt="Imagem de um gato"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="800">
                        <h2 className="text-4xl font-bold ">SOBRE</h2>

                        <p>
                            Até que alguém ame um animal, uma parte de sua alma permanece adormecida. Acreditamos nisso e acreditamos no fácil
                            acesso a coisas que são boas para nossa mente, corpo e espírito. Com uma oferta inteligente, suporte excelente e uma solução
                            segura da finalização da compra você está em boas mãos.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006.
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinários.
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a 
                               href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`} 
                               target="_blank" 
                               className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md
                               hover:bg-[#bd3e32] transition-all">
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contato via WhatsApp
                            </a>

                            <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-[#e4d7c2] transition-all">
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço do loja
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}