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



//new code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BOM and DOM Example</title>
</head>
<body>
    <div id="myElement">Click me!</div>
    <script>
        // BOM Examples
        window.alert("Hello, World!"); // Displays an alert dialog

        console.log(navigator.userAgent); // Logs browser information

        console.log(screen.width); // Logs screen width

        // history.back(); // Uncomment to navigate back

        console.log(location.href); // Logs current URL

        // DOM Examples
        console.log(document.title); // Logs document title

        const element = document.getElementById("myElement");
        console.log(element); // Logs the element with ID 'myElement'

        element.innerHTML = "New Content";
        console.log(element.innerHTML); // Changes and logs inner HTML of the element

        const newElement = document.createElement("div");
        newElement.innerHTML = "I am a new element";
        document.body.appendChild(newElement);
        console.log(newElement); // Creates, appends, and logs a new element

        element.addEventListener("click", function() {
            alert("Element clicked!");
        }); // Adds click event listener to the element
    </script>
</body>
</html>
