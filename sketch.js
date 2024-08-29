function setup() {
  createCanvas(600, 450);
 } 
  let palavra;

function setup() {
  createCanvas(600, 450);
  
  
  let palavras = ["cirilo", "maria joaquina"]
  
  palavra = random(palavras);
}

function inicializaCores() {
  
  background("purple");
  fill("lightgreen");
  textSize(70);
  textAlign(CENTER, CENTER);
}

function draw() {
  
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 300, 200);

}

         
