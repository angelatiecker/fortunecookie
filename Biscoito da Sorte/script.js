const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
const btnCookie = document.querySelector('.btnCookie')
const btnReset = document.querySelector('.btnReset')
const phraseOpenedCookie = document.querySelector('.phraseOpenedCookie')
const phrasesList = [
  "A maior de todas as torres começa no solo.",
  "Não compense na ira o que lhe falta na razão.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "Sem o fogo do entusiasmo, não há o calor da vitória."
]

btnCookie.addEventListener('click', showPhraseOpenedCookie)
btnReset.addEventListener('click', handleToggle)

function showPhraseOpenedCookie() {
  handleToggle()
  phraseOpenedCookie.innerText = phrasesList[Math.round(Math.random() * (phrasesList.length - 1))]
  console.log(phraseOpenedCookie.innerText)
}

function handleToggle() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}