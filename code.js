document.getElementById("button").addEventListener("click", function(){
    var url = "https://www.youtube.com/results?search_query=" + document.getElementById('text').value;
    window.open(url);
})


document.getElementById("text")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    // console.log(event)
    if (event.key == "Enter") {
        console.log("Working!");
        document.getElementById("button").click();
    }
});