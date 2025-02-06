function rollDice(){
  

  const numOfDice = document.getElementById("rollInput").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];

  // How many times it's needed
  for (i = 0; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png">`)
  }

  diceResult.textContent =`dice = ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}
