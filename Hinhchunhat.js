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
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function createRectangle() {
    let canvas =document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let color = getRandomColor();
    let height = Math.floor(Math.random() * innerHeight);
    let width = Math.floor(Math.random() * innerWidth);
    let x = Math.floor(Math.random() * innerWidth);
    let y = Math.floor(Math.random() * innerHeight);
    let rectangle = new Rectangle(height,width);
    ctx.fillStyle =color;
    ctx.fillRect(x,y,rectangle.width,rectangle.height);
    let area = rectangle.getArea();
    console.log("dien tich : " +area);
    let chuvi =rectangle.getChuVi();
    console.log("chu vi : "+chuvi);

}
 createRectangle()


