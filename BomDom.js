Bom   


window --> window.alert("hi")

navigator ---> (console.log(navigator.userAgent))

screen --- > console.log(screen.width)

history --> history.back()

location ---> console.log(location.href)


DOM 


selecting elemnet -- > document.getElementById('myElement')

changing content  --> elemnet.innerHTML = "New Content"

create elemt --> const newElement = document.createElement("div")

adding event listner --> elemnet.addEventListner("click", function(){
    alert("element clicked")
})




<!DOCTYPE html>
<html>
<body>
<div id="myElement"> Click me! </div>
<h2>BOM AND DOM</h2>


<script>
window.alert("heello")
console.log('mydatapavan',navigator.userAgent)
console.log('my screen width',screen.width)
history.back()
console.log(location.href)
console.log(document.title)


//dom 

const element = document.getElementById("myElement");
console.log(element)

element.innerHTML = "New Content" ;
console.log(element.innerHTML);

cnst newElement = document.createElement("div");
newElement.innerHTML = "I am a new element";
console.log(newElement)

element.addEventListner("click", function (){
alert("element clicked");
});
</script>

</body>
</html>
