//Not allowed to write two constructor

class Demo
{

    constructor()
    {
        this.No1 = 0;
        this.No2 = 0;

        console.log("Inside Default Constructor");
    }

    constructor(A,B)
    {
        this.No1 = A;
        this.No2 = B;

        console.log("Inside parameterised Constructor");
    }
}

function main()
{
    let obj1 = new Demo();
    let obj2 = new Demo(10,20);
    
    
}

main();