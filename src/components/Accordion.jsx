import { useState } from "react"
import SetaPreta from '../assets/seta3.png'

const FAQ = ({ title, answer }) => {
    const [accordingOpen, setAccordingOpen] = useState(false);

    return (
        <div className="py-2">
            <button onClick={() => setAccordingOpen(!accordingOpen)} className="flex justify-between items-center w-full">
                <h3 className="font-bold text-neutral-800 text-lg text-left">{title}</h3>
                {accordingOpen ? <img className="w-8 duration-200 rotate-180" src={SetaPreta} /> : <img className="w-8 duration-200" src={SetaPreta} />}
            </button>

            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-neutral-600 text-md ${
                accordingOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
            }`}>
                <div className="overflow-hidden">{answer}</div>
            </div>
        </div>
    )
}

export default FAQ