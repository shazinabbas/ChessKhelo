// import { Bot, BookOpen, Eye, Globe, HelpCircle, MessageSquare, Search, Newspaper, Users, MoreHorizontal } from 'lucide-react'
// import { Bot, BookOpen,MessageSquare,} from 'lucide-react'

import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className="flex h-screen bg-[#312E2B]">
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Chess Board */}
            <div className="flex items-center justify-center">
              <img src="/chessboard1.png" alt="Chess Board" className="max-w-full h-auto" />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-white leading-tight">
                  Play Chess Online<br />
                  on the #1 Site!
                </h1>
                {/*   */}
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => navigate("/game")}                    
                    className={`
                        w-full 
                        relative 
                        group 
                        rounded-xl 
                        transition-all 
                        active:translate-y-1 
                        hover:shadow-[0_0_1px_1px_rgba(130,177,75,0.8)] 
                        ${"bg-gradient-to-b from-[#82B14B] to-[#7baa44]"}
                    `}>
                                  
                        {/* Button shadow/3D effect layers */}
                        <div className="absolute inset-0 rounded-xl bg-[#5a8738] translate-y-1" />
                        <div className="absolute inset-0 rounded-xl bg-[#6a9c43] translate-y-1" />

                        {/* Main button content */}
                        <div className="
                            relative 
                            flex 
                            items-center 
                            gap-4 
                            px-6 
                            py-4 
                            rounded-xl 
                            bg-gradient-to-b 
                            from-[#82B14B] 
                            to-[#7baa44]
                            text-left
                            transition-all
                            group-hover:shadow-[0_0_50px_0.25px_rgba(130,177,75,0.8)]  /* Increased glow effect */
                        ">
                                      
                        {/* Chess piece icon */}
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl transform -rotate-12">
                                ♟
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-3xl transform translate-x-1 -rotate-12">
                                👆
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="text-white">
                            <div className="text-2xl font-bold">Play</div>
                            <div className="text-sm text-white/90">Chess</div>
                        </div>
                    </div>
                </button> 
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}