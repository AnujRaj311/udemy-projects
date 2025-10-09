let image = document.querySelector('.image');
let color = document.querySelector('#color');
let width = document.querySelector('#width');
let radius = document.querySelector('#radius');
let padding = document.querySelector('#padding');
let blurF = document.querySelector('#blur');

width.addEventListener('input', function() {
  let widthValue = width.value;
  image.style.width = widthValue + '%';
});

color.addEventListener('input', function() {
    let colorValue = color.value;
    image.style.backgroundColor = colorValue;
})

padding.addEventListener('input', function() {
    let paddingValue = padding.value;
    image.style.padding = paddingValue + 'px';
})

radius.addEventListener('input', function() {
    let radiusValue = radius.value;
    image.style.borderRadius = radiusValue + 'px';
})

blurF.addEventListener('input', function() {
    let blurValue = blurF.value;
    image.style.filter = `blur(${blurValue}px)`;
})
