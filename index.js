const testUrl = 'http://localhost:3000/cases'


function fetchCovers() {
    fetch(testUrl)
        .then(response => response.json())
        .then(res => showCovers(res))
        .catch(err => console.log(err.message))
}

fetchCovers()


function showCovers(res) {
    const viewCovers = document.querySelector('span')
    const coverList = res
    coverList.forEach(cover => {
        console.log(cover)
        const coverDiv = document.createElement('div')
        const viewCover = document.createElement('button')
        viewCover.innerText = 'View Cover'
        viewCover.id = cover.id
        coverDiv.id = cover.id
        coverDiv.setAttribute('class', 'cover')
        coverDiv.innerText = `$${cover.price}, ${cover.phoneSize}, ${cover.color}, ${cover.material}`
        coverDiv.appendChild(viewCover)
        viewCovers.appendChild(coverDiv)
    })
    
}



window.onload=function(){
    const form = document.querySelector('form')
    console.log(`${form} form`)
    const button = document.getElementById('postButton')
    console.log(`${button} button`)
    button.addEventListener('click', submitCover)

    function submitCover(e){
        e.preventDefault();
        // const allform = e.target.elements;
        // console.log(allform)
        const newCover = {
            coverSize: form.coverSize.value,
            coverMaterial: form.coverMaterial.value,
            coverColor: form.coverColor.value
        }
        console.log(newCover)
        postCover(newCover)
            .then(res => console.log(res))
            // .then(addToBookList)
            .catch(err => console.log(err.message))
    }

    async function postCover(newCover){
        const url = 'http://localhost:3000/cases';
        const options = {method: 'POST', // or 'PUT'
            body: JSON.stringify(newCover),
            headers: {
            'Content-Type': 'application/json'
            }}
        const response = await fetch(url, options)
        const cover = await response.json()
        return cover;
    }
  }

