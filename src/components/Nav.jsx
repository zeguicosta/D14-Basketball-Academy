import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/logo.png';
import Instagram from '../assets/instagram.png';
import WhatsApp from '../assets/whatsapp.png';
import Gmail from '../assets/gmail.png';
import Menu from '../assets/menu.svg';
import Close from '../assets/close.svg';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const openNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <nav className='fixed top-0 left-0 w-full bg-neutral-950 z-50'>
                <div className='flex justify-between items-center w-[92%] mx-auto'>
                    {/* Logo */}
                    <div>
                        <img className='w-20' src={Logo} alt="Logo" />
                    </div>

                    {/* Links de navegação */}
                    <div className={`duration-300 md:static absolute md:min-h-fit bg-neutral-950 min-h-[50vh] left-0 ${isOpen ? 'top-[90%]' : 'top-[-600%]'} md:w-auto w-full flex items-center px-5`}>
                        <div className='flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-2 text-white font-medium'>
                            <Link to='/' className='duration-150 rounded-sm px-5 py-2 hover:bg-white hover:text-neutral-700'>Início</Link>
                            <Link to='/treinamentos' className='duration-150 rounded-sm px-5 py-2 hover:bg-white hover:text-neutral-700'>Treinamentos</Link>
                            <Link to='/sobre' className='duration-150 rounded-sm px-5 py-2 hover:bg-white hover:text-neutral-700'>Sobre</Link>
                            <Link to='/contato' className='duration-150 rounded-sm px-5 py-2 hover:bg-white hover:text-neutral-700'>Contato</Link>
                            <Link to='/materiais' className='duration-150 rounded-sm px-5 py-2 hover:bg-white hover:text-neutral-700'>Materiais</Link>
                        </div>
                    </div>

                    {/* Ícones e Botão de Menu */}
                    <div className='flex items-center gap-[3vw] md:gap-[1vw]'>
                        <button onClick={() => openNewTab('https://www.instagram.com/d14basketball/')}>
                            <img src={Instagram} alt='Instagram' className='w-6 duration-100 hover:scale-110' />
                        </button>
                        <button onClick={() => openNewTab('https://wa.me/seu-numero')}>
                            <img src={WhatsApp} alt='WhatsApp' className='w-6 duration-100 hover:scale-110' />
                        </button>
                        <button onClick={() => openNewTab('mailto:seuemail@gmail.com')}>
                            <img src={Gmail} alt='Gmail' className='w-6 duration-100 hover:scale-110' />
                        </button>
                        {/* Botão de Menu (hamburger) */}
                        <button className='w-8 cursor-pointer md:hidden' onClick={handleClick}>
                            <img src={isOpen ? Close : Menu} alt='Menu' />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={handleClick}></div>
            )}
        </>
    );
};

export default Nav;
