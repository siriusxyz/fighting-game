let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')


const updateGame = (p1, p2, gameState) => {
    if(p1.health<=0 || p2.health<=0)
  { game.isOver=true;
    gameState=game.isOver; 
    game.declareWinner( p1, p2, gameState);
  }

    
      p1NameDiv.innerText = p1.name;
      p2NameDiv.innerText = p2.name;
      p1HealthDiv.innerText=p1.health;
      p2HealthDiv.innerText=p2.health; 
    

  }

class Player{
    constructor(name, health, attackDamage)
     {
      this.name = name;
      this.health = health;
      this.attackDmg = attackDamage;
    }
    strike(player, enemy, attackDmg)
    {
    let damageAmount=Math.floor(Math.random()*attackDmg);
    enemy.health=enemy.health-damageAmount;
    updateGame(p1,p2,gameState)
    console.log(`${player.name} attacks ${enemy.name}`)
    }
  
    heal(player)
    {
    let hpAmount= Math.floor(Math.random()*5)+1;
    player.health= player.health + hpAmount;
    updateGame(p1,p2,game.isOver)
    console.log(`${player.name} is healed for ${hpAmount}`)
    }
   
 }

 let player1 = new Player('sneha', 100, 10)
 let player2 = new Player('ayush', 100, 10)
 let p1=player1;
 let p2=player2;

  class Game{
    constructor()
    {
      this.isOver=false; 
    }
    
    declareWinner( p1,p2,isOver){
      
      if(isOver==true && p1.health<=0)
      {
        resultDiv.innerText= `${p2.name} wins!`
      }
      else if(isOver==true && p2.health<=0)
      {
        resultDiv.innerText=`${p1.name} wins!`
      }
      else{ }
       document.getElementById('victory').play()
      
    }
    reset(p1,p2)
    {
      p1.health=100;
      p2.health=100;
      this.isOver=false;
      resultDiv.innerText=''
      updateGame(p1, p2, this.isOver)
      p1HealthDiv.innerText=100;
      p2HealthDiv.innerText=100;
    }
  
    play(p1,p2)
    { this.reset(p1,p2);
      while(!this.IsOver)
        {
          
            p1.strike(p1,p2, p1.attackDmg);
            p2.heal(p2);
            p2.strike(p2,p1, p2.attackDmg);
            p1.heal(p1);
          
        }
        this.declareWinner( p1, p2, this.isOver)
    }
   
    
  }
    
  let game = new Game();

  let gameState=game.isOver;


  
  document.addEventListener('keydown', function(e) {
    if(e.key=="q")
    {
      if (p2.health>0 && game.isOver==false) {
        p1.strike(p1,p2,p1.attackDmg);
        document.getElementById('p1attack').play()
      }
    }
  
  });
  
  document.addEventListener('keydown', function(e) {
    if(e.key=="a")
    {
      if(game.isOver==false && p1.health>0)
      {
        p1.heal(p1);
      }
    }
      document.getElementById('p1heal').play();
  
  });
  
  // ** Player 2 Controls **
  document.addEventListener('keydown', function(e) {
     if(e.key=="p")
    {
      if (p1.health>0 && game.isOver==false) {
        p2.strike(p2, p1, p2.attackDmg);
        document.getElementById('p2attack').play()
      }
    }
  
  });
  
  document.addEventListener('keydown', function(e) {
    if(e.key=="l")
    {
      if(game.isOver==false && p2.health>0)
      {
        p2.heal(p2);
      }
    }
      document.getElementById('p2heal').play();
  
  });
  
  
/*playButton.onclick = () => {
    result.innerText = game.play(p1,p2)
}*/