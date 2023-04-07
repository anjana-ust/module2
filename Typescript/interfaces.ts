interface paint{
    drawPoint():void;
}
interface paint2D{
    draw2DImage():void;
}
class Circle implements paint,paint2D{
    draw2DImage(): void {
        console.log("drawing a 2d");
    }
    drawPoint(): void {
        console.log("drawing line");
    }
}
var cir = new Circle();
cir.drawPoint();
cir.draw2DImage();