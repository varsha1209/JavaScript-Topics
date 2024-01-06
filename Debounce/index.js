let counter = 0;
function getData() {
    console.log("fetching data", counter++)
} //calling in every key up event


function myDebounce(fun, d) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fun();
        }, d)
    }
}
const getDataWithDebounceMethod = myDebounce(getData, 1000)
