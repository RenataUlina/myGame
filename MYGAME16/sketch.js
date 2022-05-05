var Fondo
var Jugador
var JugadorImg

function preload(){
  Fondo=loadImage("imagenes/fondoEspacial.jpg")
  JugadorImg=loadImage("imagenes/Jett.png")
}

function setup(){
  Jugador = createSprite(630,630,50,70);
  Jugador.addImage("Jett",JugadorImg);
  Jugador.scale= 0.4;
}

function draw(){
  createCanvas(displayWidth,displayHeight);
  background(Fondo);
  
  if(keyDown("D")){
    Jugador.x = Jugador.x+10;
  }
  if(keyDown("A")){
    Jugador.x = Jugador.x-10;
  }
  if(keyDown("S")){
    Jugador.y = Jugador.y+10;
  }
  if(keyDown("W")){
    Jugador.y = Jugador.y-10;
  }



  drawSprites();
}