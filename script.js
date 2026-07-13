// Banco de dados de animes
const animeDatabase = [
    {
        id: 1,
        title: "Attack on Titan",
        genre: "Ação, Fantasia",
        year: 2013,
        episodes: 87,
        status: "Completo",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Cenários pós-apocalípticos onde gigantes humanoides conhecidos como Titãs comem humanos. Eren Yeager jura vingança e entra no exército para lutar contra eles."
    },
    {
        id: 2,
        title: "Death Note",
        genre: "Psicológico, Thriller",
        year: 2006,
        episodes: 37,
        status: "Completo",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Um caderno sobrenatural que pode matar qualquer pessoa. Um gênio cai na tentação de usá-lo para moldar um novo mundo."
    },
    {
        id: 3,
        title: "Demon Slayer",
        genre: "Ação, Fantasia",
        year: 2019,
        episodes: 55,
        status: "Em Andamento",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Tanjiro, um jovem com dons especiais, batalha contra demônios para encontrar uma cura para sua irmã amaldiçoada."
    },
    {
        id: 4,
        title: "One Piece",
        genre: "Ação, Aventura",
        year: 1999,
        episodes: 1000,
        status: "Em Andamento",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Monkey D. Luffy busca se tornar o Rei dos Piratas em uma jornada épica cheia de aventuras e amizades."
    },
    {
        id: 5,
        title: "Naruto",
        genre: "Ação, Aventura",
        year: 2002,
        episodes: 720,
        status: "Completo",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Um jovem ninja com um poder selado em seu corpo busca ganhar reconhecimento e proteção dos seus companheiros."
    },
    {
        id: 6,
        title: "Steins;Gate",
        genre: "Ficção Científica, Thriller",
        year: 2011,
        episodes: 24,
        status: "Completo",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Um cientista amador descobre como enviar mensagens ao passado, causando efeitos colaterais perigosos."
    },
    {
        id: 7,
        title: "Fullmetal Alchemist",
        genre: "Ação, Fantasia",
        year: 2005,
        episodes: 51,
        status: "Completo",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Dois irmãos tentam usar a alquimia para restaurar seus corpos após um experimento desastroso."
    },
    {
        id: 8,
        title: "Tokyo Ghoul",
        genre: "Ação, Horror",
        year: 2014,
        episodes: 48,
        status: "Completo",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Um jovem se torna meio-ghoul após um acidente e descobre um mundo secreto de criaturas humanoides."
    },
    {
        id: 9,
        title: "Mob Psycho 100",
        genre: "Ação, Comédia",
        year: 2016,
        episodes: 25,
        status: "Completo",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Um adolescente com imensos poderes psíquicos tenta viver uma vida normal enquanto lida com seus dons."
    },
    {
        id: 10,
        title: "Code Geass",
        genre: "Ficção Científica, Ação",
        year: 2006,
        episodes: 50,
        status: "Completo",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Um estudante ganha o poder de compelir qualquer um a obedecer seus comandos e o usa para conquistar o mundo."
    },
    {
        id: 11,
        title: "Re:ZERO",
        genre: "Ficção Científica, Romance",
        year: 2016,
        episodes: 50,
        status: "Em Andamento",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Um jovem é teleportado para um mundo de fantasia e descobre que pode voltar ao passado quando morre."
    },
    {
        id: 12,
        title: "Jujutsu Kaisen",
        genre: "Ação, Fantasia",
        year: 2020,
        episodes: 47,
        status: "Em Andamento",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1578849278619-e8014ceb6a15?w=300&h=400&fit=crop",
        description: "Um jovem ingressa em uma escola de magia jujutsu para combater espíritos amaldiçoados sobrenaturais."
    }
];

// Estado da aplicação
let currentCategory = null;
let favorites = JSON.parse(localStorage.getItem('animeFavorites')) || [];
let currentAnimeId = null;

// Elementos do DOM
const trendingGrid = document.getElementById('trendingGrid');
const favoritesGrid = document.getElementById('favoritesGrid');
const modal = document.getElementById('animeModal');
const closeBtn = document.querySelector('.close');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryCards = document.querySelectorAll('.category-card');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// ==================== FUNÇÕES PRINCIPAIS ====================

// Renderizar cards de anime
function renderAnimeCards(animes, container) {
    container.innerHTML = '';
    
    if (animes.length === 0) {
        container.innerHTML = '<p class="empty-message">Nenhum anime encontrado. Tente outra busca!</p>';
        return;
    }

    animes.forEach(anime => {
        const card = createAnimeCard(anime);
        container.appendChild(card);
    });
}

// Criar card de anime
function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    
    const isFavorited = favorites.some(fav => fav.id === anime.id);
    
    card.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}">
        <div class="anime-info">
            <h3>${anime.title}</h3>
            <p>${anime.genre}</p>
            <div class="anime-rating">
                <span class="stars">${renderStars(anime.rating)}</span>
                <button class="favorite-btn ${isFavorited ? 'liked' : ''}" onclick="toggleFavoriteCard(event, ${anime.id})">
                    ${isFavorited ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    `;
    
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.favorite-btn')) {
            openModal(anime);
        }
    });
    
    return card;
}

// Renderizar estrelas
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '½';
    return stars + ` (${rating})`;
}

// Abrir modal com detalhes do anime
function openModal(anime) {
    currentAnimeId = anime.id;
    document.getElementById('modalImage').src = anime.image;
    document.getElementById('modalTitle').textContent = anime.title;
    document.getElementById('modalGenre').textContent = anime.genre;
    document.getElementById('modalYear').textContent = anime.year;
    document.getElementById('modalEpisodes').textContent = anime.episodes;
    document.getElementById('modalStatus').textContent = anime.status;
    document.getElementById('modalDescription').textContent = anime.description;
    
    const isFavorited = favorites.some(fav => fav.id === anime.id);
    const favBtn = document.getElementById('modalFavoriteBtn');
    favBtn.textContent = isFavorited ? '❤️ Remover dos Favoritos' : '❤️ Adicionar aos Favoritos';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Toggle favorito (card)
function toggleFavoriteCard(event, animeId) {
    event.stopPropagation();
    const anime = animeDatabase.find(a => a.id === animeId);
    
    const isFavorited = favorites.some(fav => fav.id === animeId);
    
    if (isFavorited) {
        favorites = favorites.filter(fav => fav.id !== animeId);
    } else {
        favorites.push(anime);
    }
    
    saveFavorites();
    renderAnimeCards(currentCategory ? filterByCategory(currentCategory) : animeDatabase, trendingGrid);
    updateFavorites();
}

// Toggle favorito (modal)
function toggleFavorite() {
    if (currentAnimeId === null) return;
    
    toggleFavoriteCard({ stopPropagation: () => {} }, currentAnimeId);
    openModal(animeDatabase.find(a => a.id === currentAnimeId));
}

// Atualizar seção de favoritos
function updateFavorites() {
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = '<p class="empty-message">Nenhum favorito adicionado ainda. Clique no ❤️ para adicionar!</p>';
    } else {
        renderAnimeCards(favorites, favoritesGrid);
    }
}

// Filtrar por categoria
function filterByCategory(category) {
    return animeDatabase.filter(anime => anime.genre.includes(category));
}

// Buscar animes
function searchAnimes(query) {
    const lowerQuery = query.toLowerCase();
    return animeDatabase.filter(anime =>
        anime.title.toLowerCase().includes(lowerQuery) ||
        anime.genre.toLowerCase().includes(lowerQuery) ||
        anime.description.toLowerCase().includes(lowerQuery)
    );
}

// Salvar favoritos no localStorage
function saveFavorites() {
    localStorage.setItem('animeFavorites', JSON.stringify(favorites));
}

// Scroll para seção de tendências
function scrollToTrending() {
    const trendingSection = document.getElementById('trending');
    trendingSection.scrollIntoView({ behavior: 'smooth' });
}

// ==================== EVENT LISTENERS ====================

// Busca
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        const results = searchAnimes(query);
        renderAnimeCards(results, trendingGrid);
        currentCategory = null;
    } else {
        renderAnimeCards(animeDatabase, trendingGrid);
        currentCategory = null;
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Categorias
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        currentCategory = category;
        const filtered = filterByCategory(category);
        renderAnimeCards(filtered, trendingGrid);
        
        // Scroll suave para trending
        document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal
closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Menu hamburger
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Atualizar link ativo do menu
const navButtons = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('href').slice(1) === current) {
            btn.classList.add('active');
        }
    });
});

// ==================== INICIALIZAÇÃO ====================

// Carregar animes ao iniciar
window.addEventListener('DOMContentLoaded', () => {
    renderAnimeCards(animeDatabase, trendingGrid);
    updateFavorites();
    
    // Adicionar animações ao scroll
    observeElements();
});

// Observer para animações ao scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('.anime-card').forEach(card => {
        observer.observe(card);
    });
}

// Reobservar quando novos cards são adicionados
const originalRender = renderAnimeCards;
window.renderAnimeCards = function(animes, container) {
    originalRender(animes, container);
    observeElements();
};