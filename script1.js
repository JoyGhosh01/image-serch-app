const api_key = "HttrsmJ0x-Qiecjv0ZyM5Sbu9r6MOtSoFJSD_wJuMY8";

const formelem = document.querySelector("form");
const inputelem = document.getElementById("Search_input");
const searchbtn = document.querySelector("#search_button"); 
const searchResults = document.querySelector(".search_results");
const search_result = document.querySelector(".search_result");
const showMore = document.querySelector("#show_more_button");

let inputdata = "";
let page = 1;

async function searchImages(){
    inputdata = inputelem.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${api_key}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
 
    if(page === 1){
        searchResults.innerHTML = "";
    } 

    results.map((result)=>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search_result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });
    page++;
    if(page>1){
        showMore.style.display = "block";
    }
}

formelem.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
    searchImages()
})

showMore.addEventListener("click",()=>{
    searchImages()
})