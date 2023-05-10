function merge() {
    const out = [];
    let a = 0;
    let b = 0;
    if(a <= b) {
        out.push(a);
        a++
    } else {
        out.push(b);
        b++
    }   
    while(a <= b) {
        if(a > b) {
            out.push(b);
            b++
        } else {
            out.push(a);
            a++ 
        }   
    }
    return out;
}

function mergeSort() {  
    if(arr.length > 1) {
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        mergeSort(left);
        mergeSort(right);
        merge(left, right);
    }
    return arr;
}

module.exports = { merge, mergeSort};