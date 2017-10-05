import 'p2';
import 'pixi';
import Phaser from 'phaser';

import config from './config';

import BootState from './states/Boot';
import GameState from './states/Game';

class Game extends Phaser.Game {
  constructor() {
    const width = config.gameWidth;
    const height = config.gameHeight;

    super(width, height, Phaser.AUTO, 'content', null);

    this.state.add('Boot', BootState);
    this.state.add('Game', GameState);

    this.state.start('Boot');
  };
}

window.game = new Game();
