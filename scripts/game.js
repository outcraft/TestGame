
var game  = null;

var Game = {
  width : 600,
  height : 800
};

Game.Main = function() {

};

Game.Main.prototype = {

  create: function() {
    /**Enable Physics**/
    game.physics.startSystem(Phaser.Physics.ARCADE);//Test
    game.physics.arcade.gravity.y = 1000;

    game.input.addPointer();



    this.player = new Player(this);

    console.log(this.player.game)
  },

  preload: function() {
    /**Loading Images**/
    game.load.image( "bullet", "assets/Bullet.png" );

    /**Loading SpriteSheets**/
    game.load.spritesheet("Player", "assets/Bloob.png", 16, 16);
  },

  update: function() {

    this.player.update(this.time.elapsed);


  }
};


/**Berrechnet die Ratio des Gerätes und gibt sie zurück @return Phaser.Point MultiRatio**/
function calculateRatio(width, height) {
    var deviceWidth = window.screen.width;
    var deviceHeight = window.screen.height;
    var designeResolutionWidth = width;
    var designeResolutionHeight = height;


    var ratio = (designeResolutionWidth * deviceHeight) / deviceWidth;
    var size = new Phaser.Point(designeResolutionWidth, ratio);

    return size;
}

window.onload = function() {

  var screenSize = calculateRatio( 800, 600 );

  game = new Phaser.Game(screenSize.x,screenSize.y, Phaser.AUTO, 'phaser-canvas', Game.Main);
  //game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  game.state.add("Main", Game.Main);
  game.state.start("Main");



}
