let n = 8;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("*" + " ");
    }
    process.stdout.write("\n");
    console.log();
}

// for(let i=1;i<=n;i++){
//     let s = "";
//     for(let j=1;j<=i;j++){
//         s += " * ";
//     }
//     console.log(s);
// }