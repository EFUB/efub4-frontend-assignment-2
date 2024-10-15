function forEach<T>(arr: T[], callback: (item: T) => void){
    for(let i=0;i< arr.length ;i++) {
        callback(arr[i]);
    }
}

const arr = [1, 2, 3];
arr.forEach((it) => console.log(it));