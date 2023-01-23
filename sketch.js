var bg,bgImg;
var player;
var bgGame;
var alvoImg;
var startImg;
var gameOverImg;
var INICIO = 0, INTRO = 1, GAME = 2, OVER = 3;
var button_inicio;

//estados do jogo: inicio, intro, game, over.
var gameState = INICIO;

//carregar imagens da pasta
function preload(){

  bgImg = loadImage("assets/tela-inicial.jpg")
  bgGame = loadImage("assets/jogo.jpg")
  alvoImg = loadImage("assets/alvo.png")
  startImg = loadImage("assets/start.png")
  gameOverImg = loadImage("assets/game-over.png")
  
}

function setup() { 

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.addImage(bgGame)
  bg.scale = 3.0  
    
  //botao de inicio
  botton_inicio = createSprite(displayWidth/2, displayHeight/2, 360, 360)
  button_inicio.addImage(startImg)
  button_inicio.scale = 1
  

//criando o sprite do jogador
/*player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)*/


}

function draw() {
  background(0); 
  
  //informacao que aparece no incio do jogo
  if(gameState == INICIO) {
    bg.addImage(bgImg)
  }
  
  //instrucoes do inico do jogo
  if(gameState == INTRO){

  }
  
  //codigos para o jogo funcionar
  if(gameState == GAME){
    bg.addImage(bgGame)
  }
  
  //game over e restart 
  if(gameState == OVER){

  }

 

  drawSprites();

}
