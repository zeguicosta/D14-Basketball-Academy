export const fadeInUp = {
    initial: { opacity: 0, transform: 'translateY(-70%)' },
    whileInView: { opacity: 1, transform: 'translateY(0)' },
    viewport: { amount: 'all' },
    transition: { duration: 0.7, ease: 'easeInOut' }
};

export const fadeInLeft = {
    initial: { opacity: 0, transform: 'translateX(-70%)' },
    whileInView: { opacity: 1, transform: 'translateX(0)' },
    transition: { duration: 1.5 }
};
