document.addEventListener('DOMContentLoaded', getnotes);

let container;
let stickers;
let note;
let note_title;
let note_content;
let image;
let utc;
let ip_check;
let url;
let i=1;
let movies2 =[]
let wazneid;
let storedNames;
let tablica=[];
let tablica_good=[];
let names = [];
let yes;
let no;
let globalneid;

function getnotes()
 {
              let  storedNames = JSON.parse(localStorage.getItem("names"));
      
             if (typeof storedNames !== 'undefined') {
                for(let i =0; i<storedNames.length;i++)
                {
                  globalneid = storedNames.length
                  console.log(globalneid)
                names.push(storedNames[i]);
                console.log(JSON.stringify(movies2) + "sielanka"); 
                let getnote = document.createElement('div');
                getnote.style.display = "inline-block"
                getnote.id = storedNames[i].id;
                
                getnote.className = 'notes';
                getnote.style.backgroundColor = storedNames[i].color;
              
                getnote.style.top = storedNames[i].currY;
                getnote.style.left = storedNames[i].currX;
                document.body.appendChild(getnote);
                
              
                getnote_title = document.createElement('h1');
                getnote_title.innerHTML = storedNames[i].title;
                getnote_title.style.textAlign = "center";
                getnote.appendChild(getnote_title);
                
                let getnote_content = document.createElement('p');
                let gettext = storedNames[i].content
                gettext = gettext.replace(/\n\r?/g, '<br />');
                getnote_content.innerHTML = gettext;
                getnote.appendChild(getnote_content);
                
                let getimage = document.createElement('div');
                getimage.style.position = "absolute"
                getimage.style.bottom = "5px"
                getimage.style.right = "40px"
                getimage.style.width = "63px"
                getimage.style.height = "63px"
                getimage.style.backgroundImage = 'url('+storedNames[i].url+')';
                getnote.appendChild(getimage);
                
                  
                let gettime = document.createElement('div');
                gettime.innerHTML = storedNames[i].data;
                gettime.style.width = "75px"
                gettime.style.height = "10px"
                gettime.style.position = "absolute"
                gettime.style.bottom = "4%"
                gettime.style.left = "40%"
                gettime.style.fontWeight = "bold"
                gettime.style.fontSize = "125%"
                gettime.style.paddingBottom = "10px"
                getnote.appendChild(gettime);
                /*
                let dp_check = document.createElement('div');
                dp_check.innerHTML = storedNames[i].id;
                dp_check.style.position = "absolute"
                dp_check.style.top = "10px"
                dp_check.style.right = "10px"
                dp_check.style.width = "63px"
                dp_check.style.height = "63px"
                getnote.appendChild(dp_check);
                */
                }}
              else{
                  console.log("brak danych w localstorage")
                  }       
        }
  

function add_note()
{
    container = document.getElementById("container")
    container.style.visibility='visible'      
}

function remove_note()
{

    localStorage.clear();
    window.location.reload(); 
}

function picture(x)
 {
  
    url = document.getElementById(x).title
    console.log(url + "LOL")
 } 

function klik()
{
   localStorage.setItem('names', JSON.stringify(names));
  let storedNames = JSON.parse(localStorage.getItem("names"));
  
  globalneid = storedNames.length

                let TOP; 
                let LEFT;
              
                note = document.createElement('div');
               
                note.id = "note"+ globalneid
                note.position = "absolute";
                wazneid = note.id;
                note.className = 'notes';
                note.style.backgroundColor = COLOR.value;  
                note.style.left=(500+(480*globalneid)+"px")
                note.style.top="0px"
 
                document.body.appendChild(note);
                
                note_title = document.createElement('h1');
                note_title.innerHTML = TITLE.value;
                
                note_title.style.textAlign = "center";
                note.appendChild(note_title);
                
                note_content = document.createElement('p');
                var text = CONTENT.value
                text = text.replace(/\n\r?/g, '<br />');
                note_content.innerHTML = text;
                note.appendChild(note_content);
                
                image = document.createElement('div');
                image.style.position = "absolute"
                image.style.bottom = "5px"
                image.style.right = "40px"
                image.style.width = "63px"
                image.style.height = "63px"
                image.style.backgroundImage = 'url('+url+')';
                note.appendChild(image);

                utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');    
                time = document.createElement('div');
                time.innerHTML = utc
                time.style.width = "75px"
                time.style.height = "10px"
                time.style.position = "absolute"
                time.style.bottom = "4%"
                time.style.left = "40%"
                time.style.fontWeight = "bold"
                time.style.fontSize = "125%"
                time.style.paddingBottom = "10px"
                note.appendChild(time);
                
                /*
                ip_check = document.createElement('div');
                ip_check.innerHTML = note.id
                ip_check.style.position = "absolute"
                ip_check.style.top = "10px"
                ip_check.style.right = "10px"
                ip_check.style.width = "63px"
                ip_check.style.height = "63px"
                note.appendChild(ip_check);
                */
                note.title = IMPORTANT.value
                
                TOP = note.offsetTop+'px';
              
                LEFT = note.offsetLeft+'px';

                    stickers = {
                        id: 'note'+ globalneid,
                        title: TITLE.value,
                        content: CONTENT.value,
                        color: COLOR.value,
                        important: IMPORTANT.value,
                        data: utc,
                        image: url,
                        currX: LEFT,
                        currY: TOP,
                        url: url
                    }
                    i++; 
                    names.push(stickers)
                    localStorage.setItem('names', JSON.stringify(names))

                    container.style.visibility='hidden'    
}


/*
function move(){

  let TOP;

  let LEFT;

  let m = document.getElementById(wazneid);
 
  m.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  var found = false;
  var index;


  

  function move(e) {
      m.style.top = e.clientY + 'px';
      m.style.left = e.clientX + 'px';
      TOP =  m.style.top;
      LEFT  = m.style.left;
      
  }

  function mouseUp() {
    window.removeEventListener('mousemove', move, true);
    
    for(var i = 0; i<names.length;i++)
    {
      console.log(names[i].id + m.id)
      if(names[i].id==m.id)
      {
        found = true;
        index = i;
       
      }
      
    }
  if(found == true)
      {
      names[index].currX = LEFT;
      names[index].currY = TOP;
      console.log(JSON.stringify(names) +"POZNIEJ");
      //names.push(stickers)
      localStorage.setItem('names', JSON.stringify(names))

      found = false;
      }
      else if(found == false)
      {
        localStorage.setItem('names', JSON.stringify(names))
      }
    
}

function mouseDown(e) {
    window.addEventListener('mousemove', move, true);
}

}



*/







/*

function zrobmyto(){
  if(JSON.parse(storedNames[(i-1)].important) == true)
{
// console.log("PRAWDA"+ document.querySelector("#note"+i).id)

tablica_good.push(document.querySelector("#note"+i).id)
//  document.querySelector("#note"+i).style.visibility = "visible";
}
else if(JSON.parse(storedNames[(i-1)].important) == false)
{
tablica.push(document.querySelector("#note"+i).id)
// console.log("FALSZYWE"+ document.querySelector("#note"+i).id)
// document.querySelector("#note"+i).style.visibility = "hidden";

}


}








function important(){
  yes = document.querySelector("#impyes");
  no = document.querySelector("#impno");

  if(yes.checked == true){
    for(var l=0;l<tablica.length;l++)
    {
    document.getElementById(tablica[l]).style.visibility='hidden';
    }
  }
  else if(no.checked == true){
    for(var l=0;l<tablica.length;l++)
    {
    document.getElementById(tablica[l]).style.visibility='visible';
    }
  }

   
   
}











function pokaz()
{
  important()
}




*/


