function logicaGame(){
    const container = document.querySelector('.container')
    function creatCards(){
        let cardInnerHtml = ''
        for (let index = 0; index < 9; index++) {
            cardInnerHtml+=`<div class="card_velha" id='${index}'></div>`
            
        }

        container.innerHTML = cardInnerHtml

    }

    creatCards()
    const cards = document.querySelectorAll('.card_velha')

    function zerarGame(){

    }
    let idElement;
    let position = {
        jogadaAnterior:'',
        jogadaAtual:''
    }
    function ganhou(ganhador){
        setTimeout(()=>{
            if(!ganhador){
                alert(`velha`)
            }else{

                alert(`${ganhador} ganhou`)
            }
            zerarGame()
        },500)
        
    }
    let armazenaJogadas = [
        null,null,null,
        null,null,null,
        null,null,null
    ];
    function setPosition(jagadoAnterior,jogadaAtual){
       
    }
    let proXyGanhador = new Proxy(armazenaJogadas,{
        set(target,prop, value){

            if(armazenaJogadas[0]=== 1 && armazenaJogadas[1] === 1  && armazenaJogadas[2] ===1){
                ganhou('X')
                
            }else if(armazenaJogadas[0]=== 0 && armazenaJogadas[1] === 0  && armazenaJogadas[2] ===0){
                ganhou('O')
            }else if(armazenaJogadas[3]=== 1 && armazenaJogadas[4] === 1  && armazenaJogadas[5] ===1){
                ganhou('X')
            }
            else if(armazenaJogadas[3]=== 0 && armazenaJogadas[4] === 0  && armazenaJogadas[5] ===0){
                ganhou('O')
            }
            else if(armazenaJogadas[6]=== 1 && armazenaJogadas[7] === 1  && armazenaJogadas[8] ===1){
                ganhou('X')
            }
            else if(armazenaJogadas[6]=== 0 && armazenaJogadas[7] === 0  && armazenaJogadas[8] ===0){
                ganhou('0')
            }
            else if(armazenaJogadas[2]=== 1 && armazenaJogadas[4] === 1  && armazenaJogadas[6] ===1){
                ganhou('X')
            }
            else if(armazenaJogadas[2]=== 0 && armazenaJogadas[4] === 0  && armazenaJogadas[6] ===0){
                ganhou('O')
            }
            else if(armazenaJogadas[0]=== 1 && armazenaJogadas[4] === 1  && armazenaJogadas[8] ===1){
                ganhou('X')
            }
            else if(armazenaJogadas[0]=== 0 && armazenaJogadas[4] === 0  && armazenaJogadas[8] ===0){
                ganhou('O')
            }
            else if(armazenaJogadas[0]=== 1 && armazenaJogadas[3] === 1  && armazenaJogadas[6] ===1){
                ganhou('X')
            }
            
            else if(!armazenaJogadas.includes(null)){
                ganhou('')
                
            }

            return Reflect.set(...arguments)
        }
    });
    let ProxyGame = new Proxy(position,{
        set(target,prop, value){
            
            
            if(prop === 'jogadaAtual' && armazenaJogadas.includes(null)){
                if(target[prop] === 'X'){
                    armazenaJogadas[Number(idElement)] = 1;
                    proXyGanhador[Number(idElement)] = 1;
                }else{
                    armazenaJogadas[Number(idElement)] = 0;
                    proXyGanhador[Number(idElement)] = 0;
                }
                

                console.log(armazenaJogadas);
            }

            return Reflect.get(...arguments);
        }
    })

    function zerarGame(){
        position['jogadaAnterior'] = '';
        position['jogadaAtual'] = '';
        
        armazenaJogadas =  armazenaJogadas.map((item,index)=>{
           
            return null
        })
        cards.forEach(item=> item.textContent = '');
        


        
    }
    
    
    let valuePosition = [0,1];
    function logicaX(event){
         idElement = event.currentTarget.getAttribute('id');
        let elementDom = event.currentTarget;
        if(position['jogadaAnterior'] === '' && armazenaJogadas.includes(null)){
            position['jogadaAnterior'] = 'X';
            position['jogadaAtual'] = 'X';


            ProxyGame['jogadaAnterior'] = 'X';
            ProxyGame['jogadaAtual'] = 'X';
            elementDom.textContent = position['jogadaAtual'];

        }else if(position['jogadaAtual'] === 'X' && armazenaJogadas.includes(null)){
            position['jogadaAnterior'] = 'X';
            position['jogadaAtual'] = 'O';


            ProxyGame['jogadaAnterior'] = 'X';
            ProxyGame['jogadaAtual'] = 'O';
            
            elementDom.textContent = position['jogadaAtual'];

        }else if(position['jogadaAtual'] === 'O' && armazenaJogadas.includes(null)){

            position['jogadaAnterior'] = 'O';

            position['jogadaAtual'] = 'X';

            ProxyGame['jogadaAnterior'] = 'O';
            ProxyGame['jogadaAtual'] = 'X';
           
            elementDom.textContent = position['jogadaAtual'];
        }
    }
    Array.prototype.map.call(cards,(item)=>{
        
        item.addEventListener('click',logicaX);
    })



}
logicaGame();





window.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
            "https://shell.cdn.office.net/shellux/o365/versionless/suiteux.shell.plus.4c28b58da90da611738a.js",
            "https://statica.akamai.odsp.cdn.office.net/bld/_layouts/15/16.0.20711.12006/activitymonitor.js"
        ]);
      })
    );
  });