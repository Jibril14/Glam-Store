/**
 * Template Name: My Personal Template
 * Author: Abdullahi Abdulwasiu J
 * License: ""
 */

 const imgs = document.querySelector(".image-container");
 const leftBtn = document.getElementById("left-btn");
 const rightBtn = document.getElementById("right-btn");
 
 const img = document.querySelectorAll("#imgs img");
 
 let idx = 0;
 
 let interval = setInterval(run, 5000);
 
 function run() {
     idx++;
     changeImage();
 }
 
 function changeImage() {
     if (idx > img.length - 1) {
         idx = 0;
     } else if (idx < 0) {
         idx = img.length - 1;
     }
 
     imgs.style.transform = `translateX(${-idx * 400}px)`;
 }
 
 function resetInterval() {
     clearInterval(interval);
     interval = setInterval(run, 5000);
 }
 rightBtn.addEventListener("click", () => {
     idx += 1;
     changeImage();
     resetInterval();
     console.log("Move right");
 });
 
 leftBtn.addEventListener("click", () => {
     idx -= 1;
     changeImage();
     resetInterval();
     console.log("Move left");
 });
 