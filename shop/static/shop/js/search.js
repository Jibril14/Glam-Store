/**
 * Template Name: My Personal Template
 * Author: Abdullahi Abdulwasiu J
 * License: ""
 */

const search = document.querySelector(".search-bar");

const btn = document.querySelector(".search-bar button");
const input = document.querySelector(".search-bar .input");

btn.addEventListener("click", () => {
    search.classList.toggle("active");  
    input.focus();
});

input.addEventListener('input', function (evt){
  btn.type = "submit"
 //console.log(this.value)
})
 //document.getElementById("search-btn").type = "submit"
