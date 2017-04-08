const images = [
  {filename: "sun1.jpg", coords: null},
  {filename: "sun2.jpg", coords: null},
  {filename: "sun3.jpg", coords: null},
  {filename: "sun4.jpg", coords: null},
  {filename: "sun5.jpg", coords: null},
  {filename: "sun6.jpg", coords: null},
  {filename: "sun7.jpg", coords: null},
  {filename: "sun8.jpg", coords: null},
  {filename: "sun9.jpg", coords: null},
  {filename: "sun10.jpg", coords: null},
  {filename: "sun11.jpg", coords: null},
  {filename: "sun12.jpg", coords: null}
]

const $image = document.querySelector("#image")

var i = 0
const displayNextImage = () => {
  $image.src = `images/${images[i].filename}`
  i++
}

displayNextImage()

$image.addEventListener('click', evt => {
  images[i - 1].coords = {x: evt.pageX, y: evt.pageY}
  if (i >= images.length) {
    console.log(JSON.stringify(images))
  } else {
    displayNextImage()
  }
})
