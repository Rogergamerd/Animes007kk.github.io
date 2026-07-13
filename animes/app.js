const BASE_URL = 'https://jikan.moe';
const animeGrid = document.getElementById('anime-grid');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const sectionTitle = document.getElementById('section-title');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageNumber = document.getElementById('page-number');

let currentPage = 1;
let currentSearch = '';

// Função para buscar dados da API
async function fetchAnimes(page = 1, search = '') {
    animeGrid.innerHTML = '<div class="loading">Carregando animes...</div>';
    
    let url = `${BASE_URL}/top/anime?page=${page}`;
    if (search) {
        url = `${BASE_URL}/anime?q=${encodeURIComponent(search)}&page=${page}`;
    }

    try {
        const response = await fetch(url);
        const result = await response.json();
        displayAnimes(result.data);
        updatePagination(result.pagination);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        animeGrid.innerHTML = '<div class="loading">Erro ao carregar os animes. Tente novamente mais tarde.</div>';
    }
}

// Função para renderizar os cards na tela
function displayAnimes(animes) {
    if (!animes || animes.length === 0) {
        animeGrid.innerHTML = '<div class="loading">Nenhum anime encontrado.</div>';
        return;
    }

    animeGrid.innerHTML = animes.map(anime => `
        <div class="anime-card">
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <div class="anime-info">
                <h3>${anime.title}</h3>
                <div class="anime-meta">
                    <span class="score">⭐ ${anime.score || 'N/A'}</span>
                    <span>${anime.type || 'TV'} (${anime.episodes || '?' } eps)</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Gerenciamento de paginação
function updatePagination(paginationData) {
    pageNumber.innerText = `Página ${currentPage}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = !paginationData.has_next_page;
}

// Eventos de Busca
searchButton.addEventListener('click', () => {
    currentSearch = searchInput.value.trim();
    currentPage = 1;
    sectionTitle.innerText = currentSearch ? `Resultados para: "${currentSearch}"` : 'Animes em Alta';
    fetchAnimes(currentPage, currentSearch);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Eventos de Paginação
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchAnimes(currentPage, currentSearch);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

nextBtn.addEventListener('click', () => {
    currentPage++;
    fetchAnimes(currentPage, currentSearch);
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Inicialização padrão do site
fetchAnimes();

