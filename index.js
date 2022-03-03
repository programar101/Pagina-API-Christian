//let displayScreen =  new Image().src = "https://static.wikia.nocookie.net/memes-pedia/images/b/bb/Friki-Meme_%281%29.png/revision/latest/scale-to-width-down/230?cb=20140215151211&path-prefix=es";
//https://random.dog/woof.json?ref=apilist.fun
//https://api.imgflip.com/get_memes/61579
//data.data.memes[1].url
function callApi() {

    fetch("https://random.dog/woof.json?ref=apilist.fun")
        .then(response => response.json())
        .then(data => {
        console.log(data)

         if(data.url.includes('.mp4')){

       
            document.getElementById("displayScreen").innerHTML = `
    
                 <video id="mainDisplay" src="${data.url}" type="video/mp4" width="320" height="240" controls></video>
                `
            }else if(data.url.includes('.webm')){
            
                 document.getElementById("displayScreen").innerHTML = `
      
                    <p>Esto es un video .webm</p>
        
                      <video id="mainDisplay" src=""${data.url}" width="320" height="240" controls></video>
                         `

            }else{
                 document.getElementById("displayScreen").innerHTML = `
              
                  <img id="mainDisplay" src="${data.url}" />`
            }
    })}

const mainBtn = document.getElementById("mainBtn")

mainBtn.addEventListener("click", function () {
    
    callApi()
 
});
