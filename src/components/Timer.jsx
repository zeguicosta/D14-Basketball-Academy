import { useEffect, useState } from "react";

const Timer = () => {
    const getNextSaturday = () => {
        const now = new Date();
        const nextSaturday = new Date();

        // Obter o dia da semana (0 = domingo, 6 = sabado)
        const dayOfWeek = now.getDay();

        // Calcular quantos dias faltam para o proximo sabado
        let daysUntilSaturday = (6 - dayOfWeek + 7) % 7;

        // Se for sabado e ja passou das 9h, adicionar 7 dias
        if (dayOfWeek === 6 && now.getHours() >= 9) {
            daysUntilSaturday = 7;
        } else if (dayOfWeek === 6 && now.getHours() < 9) {
            daysUntilSaturday = 0;
        }

        nextSaturday.setDate(now.getDate() + daysUntilSaturday);
        nextSaturday.setHours(9, 0, 0, 0); // Definir para 9h

        return nextSaturday;
    };

    const calculateTimeLeft = () => {
        const now = new Date();
        const nextSaturday = getNextSaturday();

        const difference = nextSaturday - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor(difference / (1000 * 60 * 60) % 24),
                minutos: Math.floor(difference / (1000 * 60) % 60),
                segundos: Math.floor(difference / (1000) % 60),
            };
        } else {
            timeLeft = {
                dias: 0,
                horas: 0,
                minutos: 0,
                segundos: 0,
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className="text-6xl font-medium flex gap-10">
                <div className="flex flex-col justify-center text-center gap-2">
                    {String(timeLeft.dias).padStart(2, '0')}
                    <h3 className="text-xl">Dias</h3>
                </div>
                <div className="flex flex-col justify-center text-center gap-2">
                    {String(timeLeft.horas).padStart(2, '0')}
                    <h3 className="text-xl">Horas</h3>
                </div>
                <div className="flex flex-col justify-center text-center gap-2">
                    {String(timeLeft.minutos).padStart(2, '0')}
                    <h3 className="text-xl">Minutos</h3>
                </div>
                <div className="flex flex-col justify-center text-center gap-2">
                    {String(timeLeft.segundos).padStart(2, '0')}
                    <h3 className="text-xl">Segundos</h3>
                </div>
            </div>
        </div>
    )
}

export default Timer