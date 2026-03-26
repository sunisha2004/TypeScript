interface Details{
    hname:string;
    pin:number
    getName:()=>void
}
let username:string = "sunisha"
let marks:number[] = [20,30,40]
let address:Details = {
    hname:"malakkunnath",
    pin:679503,
    getName() {
        console.log(this.hname);
        
    },
}


// let useraddress:Details = {
//     hname:"asdddd",
//     pin:786788
// }


