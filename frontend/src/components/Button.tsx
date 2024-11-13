export const Button = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
    return (
        <button
            onClick={onClick}
            className={`
                flex
                justify-center
                mx-auto
                w-full
                max-w-sm
                relative 
                group 
                rounded-lg /* Reduced roundness */
                transition-all 
                active:translate-y-1 
                hover:shadow-[0_0_1px_1px_rgba(130,177,75,0.8)] 
                bg-gradient-to-b from-[#82B14B] to-[#7baa44]
            `}
        >
            {/* Button shadow/3D effect layers */}
            <div className="absolute inset-0 rounded-lg bg-[#5a8738] translate-y-1" />
            <div className="absolute inset-0 rounded-lg bg-[#6a9c43] translate-y-1" />

            {/* Main button content */}
            <div className="
                relative 
                flex
                items-center 
                justify-center
                gap-4 
                w-full
                px-8 /* Adjusted padding */
                py-2
                rounded-lg 
                bg-gradient-to-b 
                from-[#82B14B] 
                to-[#7baa44]
                text-left
                transition-all
                group-hover:shadow-[0_0_10px_1px_rgba(130,177,75,0.8)]  /* Increased glow effect */
            ">
                <div className="text-white text-2xl font-bold flex justify-center">{children}</div>
            </div>
        </button>
    );
};
