function changecode (){
    document.getElementById("paragraph").innerHTML="welcome to the page";
}
function changetext(){
document.getElementById("passage").innerHTML="hello hinali hear";
window.alert("hello");
}

function changeimage(){
    document.getElementById("image1").src="https://i.pinimg.com/originals/12/56/d9/1256d94041134dec321317aa8adad53f.jpg"
}

var photo=0;
var allphoto=["https://i.pinimg.com/originals/b9/0a/35/b90a35932463940f1e8c502bf73caa45.png","https://images.squarespace-cdn.com/content/v1/5c889617b7c92c97c7a58f8b/1596040463742-FB7N8Q1G7MLT1MFNQIMR/ke17ZwdGBToddI8pDm48kGcNvyupxJ9o2M93d6Frgb0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcfqfFwqLipS8wxZJV_Cg-EpbwXR30FUJ_EExd4o8QfPsWKGrKX0uvt7bAQbDwUl2-/Dancing%2BEarth%2BGroup%2BSilhouette_AMT%2BProductions.jpg","https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/Dancing_Dance_Female_Color-1296x728-Header-1296x728.jpg?w=1155&h=1528","https://previews.123rf.com/images/vicdd/vicdd1109/vicdd110900334/10737729-the-dancing-girl-with-colorful-spots-and-splashes-on-a-light-background-vector-illustration-.jpg"];
function nextslide(){
 document.getElementById("image1").src=allphoto[photo];
 photo++;
 if(photo==3){
 photo=0;
 }
