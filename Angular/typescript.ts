var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
var myObj: object = { name:'Bill'};
var anythingVariable: any = "Hey";
anythingVariable = 25; 
var arrayOne: Array<boolean> = [true, false, true, true]; 
var arrayTwo: Array<any> = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };

// object constructor
var MyNode = (function () {
    function MyNode(val:number = 0): void {
        this.val = val;
        this.doSomething = function () :void {
            this._priv = 10;
        };
    }
    return MyNode;
}());

interface NodeInterface {
    val:number
}
var myNodeInstance:NodeInterface = new MyNode(1);

console.log(myNodeInstance.val);

function myFunction():void {
    console.log("Hello World");
    return;
}
function sendingErrors():never {
	throw new Error('Error message');
}