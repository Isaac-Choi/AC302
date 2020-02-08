var c=document.getElementById('cancan');
var ctx=c.getContext('2d');
var img=new Image();
img.src='snek.jpeg'
img.id='img1';
img.onload=function(){
	ctx.drawImage(img,10,10,400,300);
}
var img2=new Image();
img2.src='snek2.jpeg'
img2.id='img2';
img2.onload=function(){
	ctx.drawImage(img2,10,610,400,300);
}
var img3=new Image();
img3.src='snek3.jpeg'
img3.id='img3';
img3.onload=function(){
	ctx.drawImage(img3,10,310,400,300);
}
ctx.font='30px consolas';
ctx.fillStyle='firebrick';
ctx.fillText('AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',410,310);
ctx.strokeStyle='firebrick';
ctx.strokeText('1234567890!@#$%^&*()',410,610);
ctx.fillStyle='firebrick';
ctx.fillText('`~-_=+[]{}|;:/?<>,.',410,910);