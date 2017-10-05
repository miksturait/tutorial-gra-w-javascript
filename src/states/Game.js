import Phaser from 'phaser';
import Bird from '../sprites/Bird';

export default class extends Phaser.State {
  create() {
    // Add background
    this.game.add.sprite(0, 0, 'bg');

    // Add bird
    this.bird = new Bird({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY
    });

    // Spawn bird
    this.bird.spawn();

    this._generatePipe()
  };

  update() {
    if (this.bird.y < 0 || this.bird.y > this.world.height - this.bird.height) {
      this._restartGame();
    }
  };

  _restartGame() {
    this.state.start('Game');
  };

  _generatePipe() {
    const holeSize = 20;

    this.game.add.sprite(0, 0, 'pipe');
  }
}
