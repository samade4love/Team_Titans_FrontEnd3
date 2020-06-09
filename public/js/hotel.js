var linel = document.querySelector(".linely");
var lis = document.querySelector(".nav");
var lists = document.querySelectorAll(".nav li");

linel.addEventListener('click', () => {
    lis.classList.toggle('open')
});

// button
var butt = document.querySelector(".button");
var sub = document.querySelector(".sub-main01");
var lists = document.querySelectorAll(".sub-main01 p");

butt.addEventListener('click', () => {
    sub.classList.toggle('open')
});