//let displayScreen =  new Image().src = "https://static.wikia.nocookie.net/memes-pedia/images/b/bb/Friki-Meme_%281%29.png/revision/latest/scale-to-width-down/230?cb=20140215151211&path-prefix=es";
//https://random.dog/woof.json?ref=apilist.fun
//https://api.imgflip.com/get_memes/61579
//data.data.memes[1].url
function callApi() {

    fetch("https://random.dog/woof.json?ref=apilist.fun")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        if(data==data.mp4){

       
        document.getElementById("displayScreen").innerHTML = `
        <p>Esto es un video</p>
        <video src=""${data.url}" width="640" height="480"></video>
        `
             }else{
                document.getElementById("displayScreen").innerHTML = `
              
                <img src="${data.url}" />`
            }
    })

const mainBtn = document.getElementById("mainBtn")
    
 }

mainBtn.addEventListener("click", function () {
   callApi()
})
