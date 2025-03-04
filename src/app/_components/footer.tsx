import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'

import { FacebookLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
    return (
        <section className="bg-[#E84C3D] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-12">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image 
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    style={{ width: "auto", height: "auto" }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:flex lg:justify-around gap-8 lg:gap-20 mb-6 mt-16">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
                        <p className="mb-4 max-w-[280px]">Cuidando do seu melhor amigo com muito amor e dedicação.</p>
                        <a href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`} 
                           target="_blank" 
                        className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition-all">
                            Contato via WhatsApp
                        </a>
                    </div>
                    
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p>Email: test@email.com</p>
                        <p>Telefone: (xx) 99999-9999</p>
                        <p>Rua x, centro, Campo Grande - MS</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
                        <div className="flex gap-4">
                            <a href="#" target="_blank">
                                <FacebookLogo className="w-6 h-6 hover:scale-150 transition-all" />
                            </a>

                            <a href="#" target="_blank">
                                <InstagramLogo className="w-6 h-6 hover:scale-150 transition-all" />
                            </a>

                            <a href="#" target="_blank">
                                <YoutubeLogo className="w-6 h-6 hover:scale-150 transition-all" />
                            </a>
                        </div>
                    </div>
                </footer>
                </div>
            </div>
        </section>
    )
}