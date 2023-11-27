class Rectangle {
    // Constructor to initialize the rectangle with height and width
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Method to modify the height of the rectangle
    modifyHeight(newHeight) {
        this.height = newHeight;
    }

    // Method to modify the width of the rectangle
    modifyWidth(newWidth) {
        this.width = newWidth;
    }

    // Method to show the properties of the rectangle
    showProperties() {
        console.log(`Rectangle - Height: ${this.height}, Width: ${this.width}`);
    }

    
    calculatePerimeter() {
        return 2 * (this.height + this.width);
    }

    
    calculateArea() {
        return this.height * this.width;
    }
}


let myRectangle = new Rectangle(5, 10);

myRectangle.showProperties();

myRectangle.modifyHeight(8);
myRectangle.modifyWidth(12);

myRectangle.showProperties();

console.log(`Perimeter: ${myRectangle.calculatePerimeter()}`);
console.log(`Area: ${myRectangle.calculateArea()}`);
