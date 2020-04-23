function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.getArea =function () {
        return height*width
    }
    this.getChuVi=function () {
        return (height+width)*2

    }
}
function getRandomHex(){
    return Math.floor(Math.random()*255);
}
function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createRectangle() {
    var canvas =document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var color = getRandomColor();
    var height = Math.floor(Math.random() * innerHeight);
    var width = Math.floor(Math.random() * innerWidth);
    var x = Math.floor(Math.random() * innerWidth);
    var y = Math.floor(Math.random() * innerHeight);
    var rectangle = new Rectangle(height,width);
    ctx.fillStyle =color;
    ctx.fillRect(x,y,rectangle.width,rectangle.height);
    var area = rectangle.getArea();
    console.log("dien tich : " +area);
    var chuvi =rectangle.getChuVi();
    console.log("chu vi : "+chuvi);

}
 createRectangle()


