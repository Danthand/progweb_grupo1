let contents = [`<object type="text/html" data="paginas/htmlintro.html" width="400px" height="600px" ></object>`,
                `<object type="text/html" data="paginas/htmlid.html" width="400px" height="600px" ></object>`,
                    ]
let divContent = document.getElementsByClassName("content");

function loadMainContent(){
    document.getElementById("mainContent").innerHTML=`<h2 style="color: black;">Linguagens</h2> <img style="width="200px" height="200px" src="img/div_conteudo.jpg">`

}

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
    };
    reader.readAsText(file);
  }
  
  
function load_home(index) {
    document.getElementById("mainContent").innerHTML=contents[index]
}

