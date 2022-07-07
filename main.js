classical="";
folk="";
instrumental="";
pop="";
rock="";
hindi="";
english="";
tamil="";
punjabi="";
french="";
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();
}
function preload(){
    classical=loadSound('(CLASSICAL).mp3');
    folk=loadSound('(FOLK).mp3');
    instrumental=loadSound('(INSTRUMENTAL).mp3');
    pop=loadSound('(POP).mp3');
    rock=loadSound('(ROCK).mp3');
    hindi=loadSound('Hindi.mp3.mp3');
    english=loadSound('English.mp3');
    tamil=loadSound('TAMIL.mp3');
    french=loadSound('FRENCH.mp3');
    punjabi=loadSound('PUNJABI.mp3');
}