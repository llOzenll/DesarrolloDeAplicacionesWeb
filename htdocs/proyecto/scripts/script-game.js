// class Resources{
//     constructor(){
//         //Everything to download
//         this.toLoad= {
//             background:"#",
//         };

//         //all the images
//         this.images = {}

//         Object.keys(this.toLoad).forEach(key => {
//             const img = new Image();
//             img.src = this.toLoad[key];
//             this.images[key]= {
//                 image: img,
//                 isLoaded : false
//             }

//             img.onload = () => {
//                 this.images[key].isLoaded = true;
//             }
//         });
//     }
// }

// //an instance for the app
// const resources = new Resources();

// //draws

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext("2d");

// const draw = () => {
//     const background = resources.images.background;
//     if(background.isLoaded) ctx.drawImage(background.image, 0, 0)
// }

// setInterval(()=>{
//     draw();
// },1000);




