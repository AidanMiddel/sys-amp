const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

context.beginPath();
context.moveTo(200,100);
context.lineTo(150,200);
context.moveTo(200,100);
context.lineTo(600,150);
context.moveTo(600,150);
context.lineTo(550,250);
context.moveTo(550,250);
context.lineTo(150,200);
context.stroke();

context.beginPath();
context.moveTo(600, 150);
context.lineTo(650, 200);
context.moveTo(650, 200);
context.lineTo(550, 250);
context.stroke();

context.beginPath();
context.moveTo(550, 250);
context.lineTo(550, 400);
context.moveTo(650, 200);
context.lineTo(650, 350);
context.moveTo(650, 350);
context.lineTo(550, 400);
context.stroke();

context.beginPath();
context.moveTo(550, 400);
context.lineTo(150, 350);
context.lineTo(150,200);
context.stroke();