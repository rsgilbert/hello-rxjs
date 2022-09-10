const btn = document.querySelector('#click-me')

// using vanilla js
// btn.addEventListener('click', e => {
//     console.log(e)
// })

// using rxjs
/** @type {import('rxjs')} */
var rxjs 

let clickCount = 0
rxjs.fromEvent(btn, 'click')
    .pipe(rxjs.throttleTime(2000))
    .pipe(rxjs.map(e => ({ x: e.clientX, y: e.clientY })))
    .subscribe(coordinates => console.log('click count is', ++clickCount, 'coordinates', coordinates))

