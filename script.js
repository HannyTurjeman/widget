// Hanny Turjeman
const $list = document.getElementById('list');



const urlElement = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init ";

async function getTodos(url) {
    let listItems = await fetch(url);
    listItems= await listItems.json();
    listItemsList= listItems.list;
    console.log(listItemsList);


    listItemsList.forEach(item => {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        aElement.href = item.url;
        const imgElement = document.createElement('img');
        imgElement.src = item.thumbnail[0].url;

        const h2Element = document.createElement('h2');
        h2Element.innerText = item.name;

        const pElement = document.createElement('p');
        pElement.innerText = item.branding;


        // liElement.innerText = todo.title;
        aElement.appendChild(imgElement);
        aElement.appendChild(h2Element);
        aElement.appendChild(pElement);
        liElement.appendChild(aElement);
        $list.appendChild(liElement);
    });
}

getTodos(urlElement);
