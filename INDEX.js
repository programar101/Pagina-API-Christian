let displayScreen =  new Image().src = "https://static.wikia.nocookie.net/memes-pedia/images/b/bb/Friki-Meme_%281%29.png/revision/latest/scale-to-width-down/230?cb=20140215151211&path-prefix=es";

function apiOn() {

    fetch("https://random.dog/woof.json?ref=apilist.fun")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("displayScreen").innerHTML = `
            <img src="${data.url}" />
        `
    })

    const mainBtn = document.getElementById("mainBtn")
    
 }

mainBtn.addEventListener("click", function () {



   apiOn()



})




