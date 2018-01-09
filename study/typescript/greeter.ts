interface LabelledValue {
    label: string;
    size : number;
}

function printLabel(labelledObj: LabelledValue) {
    // console.log(labelledObj.label);
    let x : number = labelledObj.size;

    // console.log(++x);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


class fruits  {

    color : string;
    count : number;

    public colorsArray : string[] = ['red' , 'green', 'yellow', 'orange'];
}

class Apple extends fruits
{
    x:Array<any> = this.colorsArray;

    private get() {
       return this.x;
    }

    public getIndexByColor(color : string) {

        let y = this.get();

        for (let i = 0; i < y.length ; i++)
        {
            if(y[i] === color)
            {
                return i;
            }
        }

        return null;
    }
}

let getObject = new Apple();

console.log( getObject.getIndexByColor('orange'));