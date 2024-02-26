const pianoKeys = document.querySelectorAll(".piano-keys .key");//pega todos os elementos q tem essas classes
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio("/src/tunes/a.wav");//carrega audio
let mapedKeys = [];


const playTune = (key)=>{
    audio.src = `./src/tunes/${key}.wav`;//muda dinamicamente
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)// aqui esta pegando o elemento q tem o data-key equivalente da letra, q sera clicada logo mais

    //aqui adiciona e retira a classe active
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active")
    },150)// a cada 150 milisegundos ele ira remover a classe "active"
};

//utiliza dataset
pianoKeys.forEach((key)=>{
    //key é a variavel pos data, do dataset
    key.addEventListener("click",()=> playTune(key.dataset.key));

    mapedKeys.push(key.dataset.key);//aqui foi inserido as teclas mapeadas 
})

//controlar o piano pelo teclado, capturando a tecla apertada

//captura de tecla apertada
document.addEventListener("keydown",(e)=>{
    if(mapedKeys.includes(e.key)){//somente as teclas mapeadas fazem alguma coisa
        playTune(e.key)//ativa o som ao apertar/clicar a tecla
    }
    
})


//volume
const handleVolume = (e)=>{
    //audio.volume = parseFloat(e.target.value);
    audio.volume = e.target.value;

}
volumeSlider.addEventListener("input", handleVolume);


//mostrar teclas
const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"));//toggle verifica se exite a classe, se tiver ele add, senao ele remove. tipo um liga/desliga  
}
keysCheck.addEventListener("click", showHideKeys)