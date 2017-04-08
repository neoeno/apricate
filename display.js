const images = [{"filename":"sun1.jpg","coords":{"x":192,"y":506}},{"filename":"sun2.jpg","coords":{"x":328,"y":364}},{"filename":"sun3.jpg","coords":{"x":510,"y":327}},{"filename":"sun4.jpg","coords":{"x":444,"y":352}},{"filename":"sun5.jpg","coords":{"x":730,"y":253}},{"filename":"sun6.jpg","coords":{"x":713,"y":250}},{"filename":"sun7.jpg","coords":{"x":715,"y":182}},{"filename":"sun8.jpg","coords":{"x":1066,"y":417}},{"filename":"sun9.jpg","coords":{"x":878,"y":413}},{"filename":"sun10.jpg","coords":{"x":859,"y":505}},{"filename":"sun11.jpg","coords":{"x":1162,"y":305}},{"filename":"sun12.jpg","coords":{"x":1027,"y":697}}]

const distanceSquared = (a, b) => {
  var sum = 0
  var n
  for (n = 0; n < a.length; n++) {
    sum += Math.pow(a[n] - b[n], 2)
  }
  return sum
}


const euclideanDistance = (a, b) => {
  return Math.sqrt(distanceSquared(a,b))
}

const selectImage = ({x, y}) => {
  const sortedByDistance = images.sort((image1, image2) => {
    return euclideanDistance([image1.coords.x, image1.coords.y], [x, y]) - euclideanDistance([image2.coords.x, image2.coords.y], [x, y])
  })
  return sortedByDistance[0]
}

const $preload = document.querySelector("#preload")
const preloadImages = () => {
  images.forEach(image => {
    const $img = document.createElement('img')
    $img.src = `images/${image.filename}`
    $preload.appendChild($img)
  })
}

const $image = document.querySelector("#image")
const displayImage = image => {
  $image.src = `images/${image.filename}`
}

preloadImages()
document.addEventListener('mousemove', evt => {
  const scaleFactors = {x: 1440/window.innerWidth, y: 799/window.innerHeight}
  displayImage(selectImage({x: evt.pageX * scaleFactors.x, y: evt.pageY * scaleFactors.y}))
})
