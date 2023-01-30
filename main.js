const h1 = document.querySelector('h1')
h1.addEventListener('click',getBeer)
const beer = document.querySelector('#beer')


async function getBeer(){
    const data = await fetch('/api')
    const res = await data.json()
    console.log(res[beer.value])
}