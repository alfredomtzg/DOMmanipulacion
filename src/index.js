/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :) -----')

const baseURL = "https://platzi-avo.vercel.app"
const url = "/api/avo"
const appNode = document.querySelector('#app')
const priceFormat = (price) => {
  const newPrice = new window.Intl
    .NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price)
  return newPrice
}

// window.fetch(url)
// .then((res)=> res.json())
// .then(responseJson => {
//   console.log(responseJson);
//   responseJson.data.forEach(item => {
//     console.log(item.name);
//   });
// })

const llamada = async () => {
  const response = await fetch(`${baseURL}${url}`)
  const responseJson = await response.json();

  const todosLosItem = []
  responseJson.data.forEach(item => {

    // crear imagen
    const image = document.createElement('img');
    image.src = `${baseURL}${item.image}`

    // crear el titulo
    const title = document.createElement('h2');
    title.textContent = (item.name)
    // title.style = "font-size:2rem"
    // or
    // title.style.fontSize = "2rem"
    // or added class
    title.className = "toBigger"

    // crear el precio
    const price = document.createElement('div');
    price.textContent = priceFormat(item.price)
    price.className = "text-xl"

    const container = document.createElement('div')
    container.append(title, image, price);
    // document.body.appendChild(container)
    todosLosItem.push(container)
  });
  appNode.append(...todosLosItem)
}
llamada()

