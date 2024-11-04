import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-neutral-900 text-white lg:h-auto flex flex-wrap px-8 pt-24 pb-16 justify-around text-left gap-20">
            <div className="flex flex-col gap-10">
                <h3 className="font-semibold text-2xl">D14 Basketball Academy</h3>
                <p>Academia de basquete dedicada a quem deseja se destacar 
                nas quadras.</p>
            </div>
            <div className="flex gap-[10vh] sm:gap-[8vw] flex-col text-center sm:text-left sm:flex-row">
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl font-semibold">Sobre</h3>
                    <div className="flex flex-col gap-3">
                        <Link className="duration-100 hover:scale-105">
                            <p>História</p>
                        </Link>
                        <Link className="duration-100 hover:scale-105">
                            <p>Equipe</p>
                        </Link>
                        <Link className="duration-100 hover:scale-105">
                            <p>Legado</p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl font-semibold">Treinamentos</h3>
                    <div className="flex flex-col gap-3">
                        <Link className="duration-100 hover:scale-105">
                            <p>Coletivo</p>
                        </Link>
                        <Link className="duration-100 hover:scale-105">
                            <p>Personalizado</p>
                        </Link>
                        <Link className="duration-100 hover:scale-105">
                            <p>Camps</p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <h3 className="text-xl font-semibold">Contato</h3>
                    <div className="flex flex-col gap-3">
                        <Link className="duration-100 hover:scale-105">
                            <p>Instagram</p>
                        </Link>
                        <Link className="duration-100 hover:scale-105">
                            <p>WhatsApp</p>
                        </Link>
                        <Link className="duration-100 hover:scale-105">
                            <p>Gmail</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="h-[1px] w-[95%] bg-white"></div>

            <div className="flex">
                <div>
                    <h3>@2024 D14 Basketball Academy. Todos os direitos reservados.</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer