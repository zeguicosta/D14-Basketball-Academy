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
            <nav className='fixed top-0 left-0 w-full bg-neutral-950 shadow-sm shadow-black/30 z-50'>
                <div className='flex justify-between items-center w-[92%] mx-auto'>
                    {/* Logo */}
                    <div>
                        <img className='w-20' src={Logo} alt="Logo" />
                    </div>

                    {/* Links de navegação */}
                    <div className={`duration-300 md:static absolute md:min-h-fit bg-neutral-950 min-h-[50vh] left-0 ${isOpen ? 'top-[90%]' : 'top-[-600%]'} md:w-auto w-full flex items-center px-5`}>
                        <div className='flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-2 text-white font-medium'>
                            <Link to='/' className='duration-150 rounded-lg px-5 py-2 border-[1px] border-transparent hover:bg-neutral-700 hover:border-neutral-500'>Início</Link>
                            <Link to='/treinamentos' className='duration-150 rounded-lg px-5 py-2 border-[1px] border-transparent hover:bg-neutral-700 hover:border-neutral-500'>Treinamentos</Link>
                            <Link to='/sobre' className='duration-150 rounded-lg px-5 py-2 border-[1px] border-transparent hover:bg-neutral-700 hover:border-neutral-500'>Sobre</Link>
                            <Link to='/contato' className='duration-150 rounded-lg px-5 py-2 border-[1px] border-transparent hover:bg-neutral-700 hover:border-neutral-500'>Contato</Link>
                            <Link to='/loja' className='duration-150 rounded-lg px-5 py-2 border-[1px] border-transparent hover:bg-neutral-700 hover:border-neutral-500'>Loja</Link>
                        </div>
                    </div>

                    {/* Ícones e Botão de Menu */}
                    <div className='flex items-center gap-[5px]'>
                        <button className='duration-100 rounded-xl p-2 border-[1px] border-transparent hover:border-neutral-500 hover:bg-neutral-700' onClick={() => openNewTab('https://www.instagram.com/d14basketball/')}>
                            <img src={Instagram} alt='Instagram' className='w-6' />
                        </button>
                        <button className='duration-100 rounded-xl p-2 border-[1px] border-transparent hover:border-neutral-500 hover:bg-neutral-700' onClick={() => openNewTab('https://wa.me/seu-numero')}>
                            <img src={WhatsApp} alt='WhatsApp' className='w-6' />
                        </button>
                        <button className='duration-100 rounded-xl p-2 border-[1px] border-transparent hover:border-neutral-500 hover:bg-neutral-700' onClick={() => openNewTab('mailto:seuemail@gmail.com')}>
                            <img src={Gmail} alt='Gmail' className='w-6' />
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
