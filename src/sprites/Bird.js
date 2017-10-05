import Phaser from 'phaser';

const frameNumber = 0;
const birdScale   = 0.4;
const spriteName  = 'mikstura';

export default class extends Phaser.Sprite {
  constructor({ game, x, y }) {
    const centeredX = x - 76 * birdScale;
    const centeredY = y - 68 * birdScale;

    // Initialize Bird
    super(game, centeredX, centeredY, spriteName, frameNumber)
    this.game = game;

    // Scale bird
    this.scale.setTo(birdScale);

    // Turn on physics for Bird
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.gravity.y = 1000;

    // Add keyboard listener
    this.spacebar = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    this.spacebar.onDown.add(this.jump, this);
  };

  spawn() {
    this.game.add.existing(this);
  };

  jump() {
    this.body.velocity.y = -350;
  }
}
