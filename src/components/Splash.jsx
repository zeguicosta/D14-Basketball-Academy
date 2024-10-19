import LogoGrande from '../assets/logogrande.png'

const Splash = ({ fadeOut }) => {
    return (
        <div className={`absolute inset-0 bg-neutral-950 flex items-center justify-center z-60 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <img className='animate-pulse w-96' src={LogoGrande} alt='Logo da Marca' />
        </div>
    )
}

export default Splash