export const fadeInUp = {
    initial: { opacity: 0, transform: 'translateY(-30%)' },
    whileInView: { opacity: 1, transform: 'translateY(0)' },
    transition: { duration: 1, ease: 'easeInOut' }
};

export const fadeInLeft = {
    initial: { opacity: 0, transform: 'translateX(-30%)' },
    whileInView: { opacity: 1, transform: 'translateX(0)' },
    transition: { duration: 1.2 }
};

export const fadeInRight = {
    initial: { opacity: 0, transform: 'translateX(10%)' },
    whileInView: { opacity: 1, transform: 'translateX(0)' },
    transition: { duration: 1.2 }
};

export const fadeInImage = {
    initial: { opacity: 0, transform: 'translateX(-10%)' },
    whileInView: { opacity: 1, transform: 'translateX(0)' },
    transition: { duration: 1.2 }
};

export const fadeInStart = {
    initial: { opacity: 0, transform: 'translateY(-30%)' },
    whileInView: { opacity: 1, transform: 'translateY(0)' },
    transition: { duration: 1, ease: 'easeInOut' }
};