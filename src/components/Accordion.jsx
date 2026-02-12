import { useState } from "react"
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ title, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`
                rounded-xl border-2 transition-all duration-300 overflow-hidden
                ${isOpen
                    ? 'border-[#54AE21]/40 bg-[#54AE21]/5 shadow-sm'
                    : 'border-black/8 bg-white hover:border-[#54AE21]/25'
                }
            `}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left p-5 gap-4 group"
            >
                <span className="flex-1 min-w-0">
                    <span className={`font-medium text-base transition-colors ${isOpen ? 'text-[#54AE21]' : 'text-black group-hover:text-black/80'}`}>
                        {title}
                    </span>
                </span>
                <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${isOpen ? 'bg-[#54AE21]/15 text-[#54AE21] rotate-180' : 'bg-black/5 text-black/60 group-hover:bg-[#54AE21]/10 group-hover:text-[#54AE21]'}`}>
                    <ChevronDown className="w-5 h-5" />
                </span>
            </button>

            <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0 text-black/75 text-[15px] leading-relaxed">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQAccordion