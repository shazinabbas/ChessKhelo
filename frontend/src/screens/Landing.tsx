// import { Bot, BookOpen, Eye, Globe, HelpCircle, MessageSquare, Search, Newspaper, Users, MoreHorizontal } from 'lucide-react'
import { Bot, BookOpen,MessageSquare,} from 'lucide-react'

export const Landing = () => {
  return (
    <div className="flex h-screen bg-[#312E2B]">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-[#272522] p-4 flex flex-col overflow-y-auto">
        <div className="mb-8">
          <img src="/logo.png" alt="Chess.com Logo" className="w-32 mx-auto" />
        </div>
        <nav className="space-y-4 mb-8">
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <Bot className="w-5 h-5" />
            Play
          </a>
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Puzzles
          </a>
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Learn
          </a>
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Watch
          </a>
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <Newspaper className="w-5 h-5" />
            News
          </a>
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Social
          </a>
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <MoreHorizontal className="w-5 h-5" />
            More
          </a>
        </nav>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1B1917] text-white pl-10 pr-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <div className="space-y-2 mb-8">
          <button className="w-full bg-[#82B14B] hover:bg-[#729C42] text-white py-2 rounded font-medium">
            Sign Up
          </button>
          <button className="w-full bg-[#1B1917] hover:bg-[#2B2826] text-white py-2 rounded font-medium">
            Log In
          </button>
        </div>

        <div className="mt-auto space-y-2 text-sm">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white">
            <Globe className="w-4 h-4" />
            English
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-white">
            <HelpCircle className="w-4 h-4" />
            Support
          </button>
        </div>
      </aside> */}

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
                <div className="flex gap-8 text-gray-300">
                  <div>
                    <div className="text-2xl font-bold">15,025,821</div>
                    <div className="text-sm">Games Today</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">184,428</div>
                    <div className="text-sm">Playing Now</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-[#82B14B] hover:bg-[#729C42] text-white p-4 rounded-lg flex items-center justify-center gap-2">
                  <Bot className="w-6 h-6" />
                  <div>
                    <div className="text-xl font-bold">Play Online</div>
                    <div className="text-sm opacity-90">Play with someone at your level</div>
                  </div>
                </button>
                <button className="w-full bg-[#666666] hover:bg-[#555555] text-white p-4 rounded-lg flex items-center justify-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  <div>
                    <div className="text-xl font-bold">Play Bots</div>
                    <div className="text-sm opacity-90">Play vs customizable training bots</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Puzzles Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Solve Chess Puzzles</h2>
              <button className="bg-[#82B14B] hover:bg-[#729C42] text-white px-8 py-3 rounded-lg text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Solve Puzzles
              </button>
            </div>
            <div className="flex justify-center">
              <img src="/chessboard1.png" alt="Chess Puzzle" className="max-w-[400px] w-full h-auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}