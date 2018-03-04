/****Player Class****/


function Player(game) {
    this.game = game;
    this.sprite = game.add.sprite(0, 0 , "Player");
    this.bullets = game.add.group();

    console.log(this.bullets);

    //Init
    this.sprite.position.set( game.world.centerX, game.world.height - 30);
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.immovable = true;
}


Player.prototype = {

  setPosition : function(x, y) {
    this.sprite.position.set(x, y);
  },

  /**Die Update Function parameter dt ist DeltaTime )**/
  update : function( dt ) {

    if(game.input.activePointer.isDown) {
        var x = game.input.activePointer.x;
        var y = game.input.activePointer.y;

        var bullet = game.add.sprite( x, y, "bullet" );


    }
  }
}
