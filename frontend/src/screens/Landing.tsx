// import { Bot, BookOpen, Eye, Globe, HelpCircle, MessageSquare, Search, Newspaper, Users, MoreHorizontal } from 'lucide-react'
// import { Bot, BookOpen,MessageSquare,} from 'lucide-react'

import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

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
                <Button onClick={() => navigate('/game')}>Play Chess</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}