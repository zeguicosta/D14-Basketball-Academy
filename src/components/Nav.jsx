import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../assets/logo.png'
import Instagram from '../assets/instagram.png'
import WhatsApp from '../assets/whatsapp.png'
import Gmail from '../assets/gmail.png'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = document.querySelector('.nav-links');

    const handleClick = () => {
        setIsOpen(!isOpen);
        navLinks.classList.toggle('top-[9%]')
    }
    
    const openNewTab = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer');
    }

    return (
        <div className='bg-neutral-950'>
            <div className='bg-neutral-950 flex justify-between items-center w-[92%] mx-auto'>
                <div>
                    <img className='w-20' src={Logo} alt="Logo" />
                </div>
                <div className='nav-links duration-300 md:static absolute md:min-h-fit bg-neutral-950 min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
                    <div className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white font-medium'>
                        <Link to='/' className='hover:scale-105'>Início</Link>
                        <Link to='/' className='hover:scale-105'>Treinamentos</Link>
                        <Link to='/' className='hover:scale-105'>Sobre</Link>
                        <Link to='/' className='hover:scale-105'>Contato</Link>
                        <Link to='/' className='hover:scale-105'>Materiais</Link>
                    </div>
                </div>
                <div className='flex items-center gap-[3vw] md:gap-[1vw]'>
                    <Link onClick={() => openNewTab('https://www.instagram.com/d14basketball/')}>
                        <img src={Instagram} alt='Instagram' className='w-6 duration-100 hover:scale-110' />
                    </Link>
                    <Link onClick={() => openNewTab('https://www.instagram.com/d14basketball/')}>
                        <img src={WhatsApp} alt='WhatsApp' className='w-6 duration-100 hover:scale-110' />
                    </Link>
                    <Link onClick={() => openNewTab('https://www.instagram.com/d14basketball/')}>
                        <img src={Gmail} alt='Gmail' className='w-6 duration-100 hover:scale-110' />
                    </Link>
                    <img className='w-8 cursor-pointer md:hidden' onClick={handleClick} src={isOpen ? Close : Menu} alt='Menu' />
                </div>
            </div>
        </div>
    )
}

export default Nav