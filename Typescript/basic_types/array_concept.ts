let students:String[]=[];
students[0]="Vijay";
students[1]="Ajith";
students[2]="Kamal";
students.push("Rajini");
students.pop();
console.log(students); 

let numb:any[]=[1,3,5,7];
let double=numb.map(e=>e*2);
console.log(double);
let mixed=["name1",1,"name2",2];
console.log(mixed);
console.log(typeof(mixed));
let mixed_:(string|number)[];
mixed_=["name1",1,"name2",2];
console.log(mixed_);

let circles=[20,30,40];
let areas:number[]=[];
let area=0;
for(let i=0;i<circles.length;i++){
    area=Math.floor(Math.PI *circles[i]*circles[i]);
    areas.push(area);
}
console.log(areas);

let array:(string|number)[];
array=[789,87878,"rahul",8787]
console.log(array);