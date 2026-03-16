const apiKey = "fcc123eff43d44e6ad2426b7b161013e";

const newsContainer = document.getElementById("newsContainer");
const categorySelect = document.getElementById("category");
const loadBtn = document.getElementById("loadNews");

async function fetchNews(category="general"){

newsContainer.innerHTML = "<p>Loading news...</p>";

try{

const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

const response = await fetch(url);
const data = await response.json();

displayNews(data.articles);

}
catch(error){
newsContainer.innerHTML = "<p>Error loading news.</p>";
}

}

function displayNews(articles){

newsContainer.innerHTML="";

articles.forEach(article => {

const card = document.createElement("div");
card.className="card";

card.innerHTML = `
<img src="${article.urlToImage || 'https://via.placeholder.com/300'}">
<div class="card-content">
<h3>${article.title}</h3>
<p>${article.description || ""}</p>
<a href="${article.url}" target="_blank">Read More</a>
</div>
`;

newsContainer.appendChild(card);

});

}

loadBtn.addEventListener("click",()=>{
fetchNews(categorySelect.value);
});

window.addEventListener("load",()=>{
fetchNews();
});