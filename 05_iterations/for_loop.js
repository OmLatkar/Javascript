for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        // console.log(`i:${i}, j:${j}`);
        console.log(i+'*'+j+' = '+i*j);  
    }
}

let arr=["a","b","c"]
for (let i = 0; i <= arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

for(let i=0;i<20;i++){
    if(i==5)
        continue
    else if(i==10)
        break;
    console.log(i);
}