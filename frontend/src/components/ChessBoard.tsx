import { Color, PieceSymbol, Square } from "chess.js";
import { MOVE } from "../screens/Game";
import { useState } from "react";

export const  ChessBoard = ({ board, socket }: {
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    
    } | null)[][]
    socket: WebSocket;
}) => {
    const [from, setFrom] = useState<null | Square>(null);
    const [to, setTo] = useState<null | Square>(null);
    return <div className="text-white-200">
        {board.map((row, i) => {
            return <div key={i} className="flex">
                {row.map((square, j) => {
                    return <div onClick={() => {
                        if (!from) {
                            setFrom(square?.square ?? null);
                        } else {
                            setTo(square?.square ?? null);
                            socket.send(JSON.stringify({
                                type: MOVE,
                                payload: {
                                    from,
                                    to:square?.square
                                }
                            }))

                            console.log({
                                from,
                                to
                            })
                        }
                    }} key={j} className={`w-20 h-20 ${(i+j)%2 === 0 ? 'bg-board-dark': 'bg-board-light'}`}>
                        <div className="w-full justify-center flex h-full">
                            <div className="h-full justify-center flex flex-col">
                                {square ? square.type : ""}
                                </div>
                        </div>
                    </div>
                })}
            </div>
        })}
    </div>
}