import Phaser from 'phaser';

export default class extends Phaser.State {
  preload() {
    this.load.image('bg', '../assets/images/bg.png');
    this.load.image('pipe', '../assets/images/pipe_body.png');
    this.load.spritesheet('mikstura', '../assets/images/mikstura.png', 152, 136);
  };

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  };

  render() {
    this.state.start('Game');
  };
}
