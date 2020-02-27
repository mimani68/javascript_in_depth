function* salam() {
  yield 'one';
  yield 'two';
  yield 'three';
}

function salamTwo() {
  return new Promise((res, rej)=>{
    setTimeout(_=>res('bingo'), 1000)
    // rej('failed')
  });
}

(() => {
  console.log('main app');  // => {}
  // console.log(await salam());  // => {}
  // console.log(salam().next()); // => {"value":"one": "done":false}
  salamTwo()
    .then(o=>console.log(o)) // => {}
    .catch(o=>console.error(o)); // => {}
})();
