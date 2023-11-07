"use strict";

let title = document.querySelector("h1");
title.animate(
    {
        transform: ["rotate(0)","rotate(10deg)", "rotate(-10deg)","rotate(10deg)", "rotate(-10deg)","rotate(0)"],
    },
    {
        duration: 1000,
    }
);

let clouds = document.getElementById("clouds").children;
let viewwidth = window.innerWidth;
document.getElementById("clouds").style.opacity = 1;
let count = 0;
Array.from(clouds).forEach(cloud => {
    let delay = Math.floor(Math.random() * 11 * 1000 + 10000);
    let addspeed = Math.floor(Math.random() * 11 * 1000 + 10000);

    if(count === 0) { delay = 0; };
    cloud.animate(
        {
            marginLeft: ["100%", "-20%"],
            // transform: ["translateX("+ viewwidth +"px)", "translateX(-"+ viewwidth +"px)"],
            visibility: ["hidden", "visible"],
        },
        {
            delay: delay,
            duration: 10000 + addspeed,
            iterations: Infinity,
        }
    );
    count += 1;
});
