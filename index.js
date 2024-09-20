// // // // // // // Task 1
// // // // // // // // var x= 10;
// // // // // // // // var y=true;
// // // // // // // // var myObject={a:x,b:y,__proto__:Object};
// // // // // // // // console.log(myObject);

// // // // // // // // let anotherObjct;
// // // // // // // // anotherObjct={a:10,b:y,c:{a:10,b:5},__proto__:Object};

// // // // // // // // console.log(anotherObjct);


// // // // // // var temp=null 
// // // // // // temp = 15;
// // // // // // console.log(typeof(temp));

// // // // // // temp = false;

// // // // // // console.log(typeof(temp));

// // // // // var myPost = {postTitle:0, postLikes:0,shared:false};
// // // // // myPost.postLikes +=1;
// // // // // console.log(myPost.postLikes);

// // // // //  delete myPost.shared;

// // // // // console.log(myPost.postLikes);
// // // // // console.log(myPost.shared);

// // // // var myObject = {a:10};
// // // // var copyOfMyObject = {myObject,b:false};

// // // // console.log(copyOfMyObject);
// // // var i=1
// // // const myfunc = setInterval(function (){
// // //     console.log("Delayed" + " " + i);
// // //     i++;
// // // },3000);

// // // setTimeout(function() {
// // //     clearInterval(myfunc);
// // // },30000)

// // let a= 10;
// // var b =true;

// // console.log(a&&b);

// // let var1=9;
// // let var2="3";
// // console.log(var1%+var2);

// // class circle {
// //     constructor(radius) {
// //         this.radius = radius;
// //         this.draw = function () {
// //             console.log('draw');
// //         };
// //     }
// // }

// // circle.call({},1);

// // circle.apply({},[1,2,3,34]);

// // const ex= new circle(1);

// //primitive or value type
// // let x= 10;
// // let y = x;
// // y=20;

// // console.log(x,y);

// let x= {v:10};
// let y = x;
 
// x.v=20;

// console.log(x,y);


// const circle={
//     radius : 1,
//     draw(){
//         console.log("draw");
//     }
// };

//  for (let key in circle)
//    console.log(key) //radius //draw

// for (let key in circle)
//     console.log(key,circle[key]);
// {
//         console.log("draw");
//     }
    //radius
    //index.js:91 draw
    //index.js:94 radius 1
    //index.js:94 draw ƒ draw()

// for (let key of Object.keys(circle))
//     console.log(key);

// for (let key of Object.entries(circle))
//     console.log(key);

// const circle={
//     radius : 1,
//     draw(){
//         console.log("draw");
//     }
// };

// const e = Object.assign({},circle);
// console.log(e);

// const message ="Hi";

// const anotherMessage = new String("Hi");

// console.log(typeof(message));
// console.log(typeof(anotherMessage));

let pe = {
    name: 'Anoop',
    sirname : 'Sen',
    get FullName(){
        return (`${pe.name} ${pe.sirname}`);
    },

    Name(value){
        const p= value.split(" ");
        this.name = p[0];
        this.sirname= p[1];
        
    }
};

pe.Name("java pr");
console.log(pe);