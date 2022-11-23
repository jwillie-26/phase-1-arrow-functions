// JavaScript callback Function
const names = ['stats','sev',nav]
const myForEach = (arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        cb(element)
    }
}

myForEach(names, (names)) {
    console.log(names)
}