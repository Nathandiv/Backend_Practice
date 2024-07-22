const fs= require ('fs');

console.log("Number 1");

const readfile = fs.readFileSync(`./Hlelo.txt`,"utf-8");

console.log("roadfile");

fs.readFile(`./Nathan.txt`,"utf-8",(error,data) => {
    if (error){
        console.log('you have an error message' + error);
    }else {
        console.log(data)
    }
}


)

// fs.writeFile("./Nathan.txt", "Welocome Nathan", (err) => {
//     if (err) {
//       console.log(" This was an error");
//     } else {
//       console.log("File created ");
//     }
//   });
//   const readFilee  = fs.readFileSync('./Nathan.txt', 'utf-8');

//   console.log(readFilee);

// fs.writeFile("./Hlelo.txt", "Welocome Hlelo", (err) => {
//     if (err) {
//       console.log(" This was an error");
//     } else {
//       console.log("File created ");
//     }
//   });
//   const readFilee  = fs.readFileSync('./Hlelo.txt', 'utf-8');

//   console.log(readFilee);

