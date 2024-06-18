const header = document.getElementById("header")

const content = document.getElementById("content")

function getJoke(){
  fetch('https://api.blablagues.net/?rub=blagues').then((res)=> res.json()
).then((data) => {
  const joke = data.data.content;
  console.log(joke);
  header.textContent = joke.text_head
  content.textContent = joke.text !== "" ? data.data.content.text : joke.text_hidden; 
});
}
getJoke()

document.body.addEventListener("click", getJoke)

  emoji.textContent="🤣🤣🤣🤣🤣"

dev.addEventListener("mouseenter", ()=>{
dev ? dev.textContent = "koliefassoumathias@gmail.com" : dev.textContent ="Mathias_Dev_Kolie"
})


