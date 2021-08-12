

var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_object = "";

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top: player_y,    
left:player_x


});
canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_object = Img;
    
    block_object.scaleToWidth(block_image_width);
    block_object.scaleToHeight(block_image_height);
    block_object.set({
    top: player_y,    
    left:player_x
    
    
    });
    canvas.add(block_object);
    });
    }
    
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

if(e.shiftKey == true && keyPressed == '80' ){
 console.log("p and shift pressed together bud :)");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
    }


    if(e.shiftKey == true && keyPressed == '77' ){
        console.log(" m and shift pressed together bud :(");
       block_image_width = block_image_width - 10;
       block_image_height = block_image_height - 10;
       document.getElementById("current_width").innerHTML = block_image_width;
       document.getElementById("current_height").innerHTML = block_image_height;
    }


    if( keyPressed == '38'){
        console.log("up");
        up();
    }
    
    if( keyPressed == '40'){
        console.log("down");
        down();
    }
    
    if( keyPressed == '37'){
        console.log("left");
        left();
    }


    if( keyPressed == '39'){
        console.log("right");
        right();
    }
    
    if( keyPressed == '87'){
        console.log("w");
        new_image("wall.jpg");
    }
    
    if( keyPressed == '71'){
        console.log("g");
        new_image("ground.png");
    }
    
    if( keyPressed == '76'){
        console.log("l");
        new_image("light_green.png");
    }

    if( keyPressed == '84'){
        console.log("t");
        new_image("trunk.jpg");
    }


    if( keyPressed == '82'){
        console.log("r");
        new_image("roof.jpg");
    }

    if( keyPressed == '68'){
        console.log("d");
        new_image("dark_green.png");
    }
    if( keyPressed == '89'){
        console.log("y");
        new_image("yellow_wall.png");
    }

    if( keyPressed == '85'){
        console.log("u");
        new_image("unique.png");
    }


    if( keyPressed == '67'){
        console.log("c");
        new_image("cloud.jpg");
    }
                }

function up(){

if(player_y >=0){
player_y = player_y - block_image_height;
console.log("block_image_height =" + block_image_height);
console.log("When Up arrow key is pressed, X = " + player_x + ", Y = " + player_y );
canvas.remove(player_object);
player_update();
}
}


function down(){

if(player_y <=500){
    player_y = player_y + block_image_height;
    console.log("block_image_height =" + block_image_height);
    console.log("When Down arrow key is pressed, X = " + player_x + ", Y = " + player_y );
    canvas.remove(player_object);
    player_update();
    }
}
    
function left(){
    if(player_x >=0){
        player_x = player_x - block_image_width;
        console.log("block_image_width =" + block_image_width);
        console.log("When Left arrow key is pressed, X = " + player_x + ", Y = " + player_y );
        canvas.remove(player_object);
        player_update();
        }
}

function right(){
if(player_x <=850){
    player_x = player_x + block_image_width;
    console.log("block_image_width =" + block_image_width);
    console.log("When Right arrow key is pressed, X = " + player_x + ", Y = " + player_y );
    canvas.remove(player_object);
    player_update();
    }
}


