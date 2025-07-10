// Main JavaScript file for Event Locator

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Load featured events on home page
    if (document.getElementById('featuredEvents')) {
        loadFeaturedEvents();
    }

    // Set up event listeners
    setupEventListeners();

    // Initialize date filter with today's date as minimum
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(input => {
        input.min = today;
    });
}

function setupEventListeners() {
    // Search form submission
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }

    // Featured event cards click handlers
    document.addEventListener('click', function(e) {
        if (e.target.closest('.event-card')) {
            const eventCard = e.target.closest('.event-card');
            const eventId = eventCard.dataset.eventId;
            if (eventId) {
                navigateToEventDetails(eventId);
            }
        }
    });
}

function handleSearch(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const searchParams = {
        city: document.getElementById('citySearch')?.value || '',
        category: document.getElementById('categoryFilter')?.value || '',
        date: document.getElementById('dateFilter')?.value || ''
    };

    // Store search parameters in sessionStorage for the events page
    sessionStorage.setItem('searchParams', JSON.stringify(searchParams));
    
    // Navigate to events page
    window.location.href = 'events.html';
}

function loadFeaturedEvents() {
    const featuredEventsContainer = document.getElementById('featuredEvents');
    if (!featuredEventsContainer) return;

    const featuredEvents = EventsAPI.getFeaturedEvents().slice(0, 3);
    
    if (featuredEvents.length === 0) {
        featuredEventsContainer.innerHTML = '<div class="col-12 text-center"><p>No featured events available at the moment.</p></div>';
        return;
    }

    featuredEventsContainer.innerHTML = featuredEvents.map(event => createEventCard(event)).join('');
}

function createEventCard(event) {
    const categoryInfo = Utils.getCategoryInfo(event.category);
    const formattedDate = Utils.formatDate(event.date);
    const formattedTime = Utils.formatTime(event.time);
    const formattedPrice = Utils.formatPrice(event.price, event.currency);

    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card event-card h-100" data-event-id="${event.id}">
                <img src="${event.image}" class="card-img-top" alt="${event.name}">
                <div class="card-body d-flex flex-column">
                    <div class="mb-2">
                        <span class="badge ${categoryInfo.color}">${categoryInfo.name}</span>
                    </div>
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text  text-truncate-2 flex-grow-1">${event.description}</p>
                    <div class="event-meta mt-auto">
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="">
                                <i class="bi bi-calendar3 me-1"></i>${formattedDate}
                            </small>
                            <span class="event-price">${formattedPrice}</span>
                        </div>
                        <div class="mt-2">
                            <small class="">
                                <i class="bi bi-geo-alt me-1"></i>${event.location}
                            </small>
                        </div>
                        <div class="mt-2">
                            <small class="">
                                <i class="bi bi-clock me-1"></i>${formattedTime}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function navigateToEventDetails(eventId) {
    window.location.href = `event-details.html?id=${eventId}`;
}

// Utility functions
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3">Loading events...</p>
            </div>
        `;
    }
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-exclamation-triangle display-1 text-warning"></i>
                <h3 class="mt-3">Oops! Something went wrong</h3>
                <p class="">${message}</p>
                <button class="btn btn-primary" onclick="location.reload()">Try Again</button>
            </div>
        `;
    }
}

function showNoResults(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-search display-1 text-muted"></i>
                <h3 class="mt-3">No events found</h3>
                <p class="text-muted">Try adjusting your search criteria or browse all events.</p>
                <button class="btn btn-primary" onclick="clearFilters()">Clear Filters</button>
            </div>
        `;
    }
}

// Animation utilities
function fadeIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 10);
}

function animateCards() {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            fadeIn(card);
        }, index * 100);
    });
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Accessibility improvements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'visually-hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}
