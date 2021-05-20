const convertFahrToCelsius = x => {
    let temp = x - 32;
    if (x instanceof Array) {
        return (`[${x}] is not a valid number but an array`);
    } else if (x.constructor === Object) {
        return (JSON.stringify(x) + ` is not a valid number but an object`);
    } else if ( !Number(x)) {
        return (`${x} is not a valid number but a string`)
    } else {
        return (temp * 5 / 9).toFixed(4);
    }
};


const checkYuGiOh = n => {
    if (!Number(n)) {
        return `invalid parameter: ${n}`;
    } else {
        let x = Number(n), arr = [...Array(x)].map((_, index) => index + 1);
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0 && arr[i] % 3 === 0 && arr[i] % 5 === 0) {
                arr[i] = 'yu-gi-oh';
            } else if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
                arr[i] = 'yu-gi';
            } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
                arr[i] = 'gi-oh';
            } else if (arr[i] % 2 === 0 && arr[i] % 5 === 0) {
                arr[i] = 'yu-oh';
            } else if (arr[i] % 2 === 0) {
                arr[i] = 'yu';
            } else if (arr[i] % 3 === 0) {
                arr[i] = 'gi';
            } else if (arr[i] % 5 === 0) {
                arr[i] = 'oh';
            }
        } return arr;
    }
};