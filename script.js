document.addEventListener('DOMContentLoaded', function () {
const bigImg = document.getElementById("b-img");
const smallImg = document.getElementById("s-img");

const imageurl = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',
    'img/12.jpg',
    'img/13.jpg'

]

    imageurl.forEach((url)=>{
        const img = document.createElement('img');
        img.src =  url;
        img.width = '80'
        img.alt = 'js from images';
        smallImg.appendChild(img)

          img.addEventListener('click', function () {

            while (bigImg.firstChild) {
                bigImg.removeChild(bigImg.firstChild);
            }

            const clickedImg = document.createElement('img');
            clickedImg.src = url;
            clickedImg.width = '300';
            clickedImg.height = '245';
            clickedImg.alt = 'js from images';
            bigImg.appendChild(clickedImg);
        });

        smallImg.appendChild(img);
           
        })





});