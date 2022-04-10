canvas = new fabric.Canvas("ranger_canvas");
var ranger_image;
var ranger_height = 400;
var ranger_width = 350;
var ranger_x = 10;
var ranger_y = 30;

function ranger_create(rangerImage, x, y){
    fabric.Image.fromURL(rangerImage, function(image){
        ranger_image = image;
        ranger_image.scaleToWidth(ranger_width);
        ranger_image.scaleToHeight(ranger_height);
        ranger_image.set({
            top: x,
            left: y
        });
        canvas.add(ranger_image);
    });
}

window.addEventListener('keydown', my_keydown);
function my_keydown(i){
    keypressed = i.keyCode;
    if(keypressed == '82'){
        ranger_create('rr.jpg', ranger_y, ranger_x);
    }
    if(keypressed == '71'){
        ranger_create('gr.png', ranger_y, ranger_x + 250);
    }
    if(keypressed == '89'){
        ranger_create('yr.png', ranger_y, ranger_x + 420);
    }
    if(keypressed == '80'){
        ranger_create('pr.png', ranger_y, ranger_x + 670);
    }
    if(keypressed == '66'){
        ranger_create('br.png', ranger_y, ranger_x + 770);
    }
    
}