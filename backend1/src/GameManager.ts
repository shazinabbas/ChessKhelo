


export class GameManager () {
    private games: Game[];
    constructor() {
        this.games = [];
    }
    createGame() {
        const game = new Game();
        this.games.push(game);
        return game;
    }
    getGame(gameId) {
        return this.games.find(game => game.id === gameId);
    }
}