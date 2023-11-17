function render_element(title, content) {
    return `
        <div class="container-principal">
            <div class="container-titulo">
                <h2> ${title} </h2>
            </div>

            <div class="container-texto">
                ${content}    
            </div>
            
            <div class="container-bootom"> 
            <button class="btn btn-like">Gostei</button>
            <button class="btn btn-deslike">Não gostei</button>
            </div>
        </div>
    `
}

function busca_feeds() {
    fetch('http://127.0.0.1:8000/api/feeds/')
    .then((response) => response.json())
    .then((response) => {
        const feeds = response.map(feed => render_element(feed.title, feed.content))
        
        document.getElementById('lista-feeds').innerHTML = feeds.join()
    })
}

async function cria_feed(title, content) {
    await fetch('http://127.0.0.1:8000/api/feeds/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author: 1, title, content}),
    })
}

window.addEventListener('load', function () {
    busca_feeds()

    document.getElementById('form-cria-feed').addEventListener('submit', async (e) => {
        e.preventDefault()

        const title = document.getElementById('title')
        const content = document.getElementById('content')

        if (!title) {
            alert('O campo título é obrigatório')
            return
        }

        if (!content) {
            alert('O campo conteúdo é obrigatório')
            return
        }

        await cria_feed(title.value, content.value).then(() => {
            title.value = ''
            content.value = ''

            busca_feeds()
        })
            
    })
})