var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();

var EE = new Image();
EE.src = "TT.jpg";

// Start Print from Left top
var x = 20; 
var y = 400;
// size 
var size = 258;

canvas.width = 1024;
canvas.height = 1024;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function AddUserPhoto() {
    var fileInput = document.getElementById("AddUserPhoto");
    img.src = URL.createObjectURL(fileInput.files[0]);


    img.onload = function () {
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(img, 0, 0, img.width, img.height, x, y, size, size);
        
        // draw our circle mask
        ctx.globalCompositeOperation = 'destination-in';

        ctx.beginPath();
        ctx.arc(
            x + (size/2), // x
            y + (size/2), // y
            size / 2, // radius
            0, // start angle
            2 * Math.PI // end angle
        );
        ctx.fill();

        ctx.globalCompositeOperation = 'destination-over';

        ctx.drawImage(EE,0,0);
        // ctx.drawImage(EE, 0, 0, img.width, img.height, 0, 0, 1024, 1024);

        ctx.globalCompositeOperation = 'source-over';
        fillTextEE();

        ctx.globalCompositeOperation = 'destination-over';


        fixOnload(); // Don't Remove this -- EE
    };
}

function fixOnload() {
    img.onload = function () {
        // alert("Here");
        ctx.globalCompositeOperation = 'source-over';
    }
}

function downloadEE() {
    // get the data URL of the canvas
    var dataURL = canvas.toDataURL("image/jpg", 1.0);
    // create an anchor element
    var a = document.createElement("a");
    a.download = "EE.jpg";
    a.href = dataURL;
    // simulate a click on the anchor element
    a.click();
}


function fillTextEE() {
    ctx.font = '35px GE_Hili_Book';
    ctx.fillStyle = '#796647';
    ctx.textAlign = 'center';

    ctx.fillText(document.getElementById("txtName").value, canvas.width / 2, 710);
    ctx.fillText(document.getElementById("txtName1").value, canvas.width / 2, 780);

}



function clipEE() {
    img.src = "TT.jpg";
    ctx.drawImage(img,0,0);


}
