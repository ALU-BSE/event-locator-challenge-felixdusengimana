// JavaScript for events.html page

// Utility functions
// Utility functions for events page
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-exclamation-triangle display-1 text-warning"></i>
                <h3 class="mt-3">Oops! Something went wrong</h3>
                <p class="text-muted">${message}</p>
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

document.addEventListener('DOMContentLoaded', function() {
    initializeEventsPage();
});

let currentEvents = [];
let currentFilters = {};

function initializeEventsPage() {
    // Load search parameters from home page if any
    loadSearchParameters();
    
    // Load all events initially
    loadEvents();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize date filter
    const today = new Date().toISOString().split('T')[0];
    const dateFilter = document.getElementById('dateFilterEvents');
    if (dateFilter) {
        dateFilter.min = today;
    }
}

function loadSearchParameters() {
    const searchParams = sessionStorage.getItem('searchParams');
    if (searchParams) {
        const params = JSON.parse(searchParams);
        
        // Populate form fields
        if (params.city) {
            const cityInput = document.getElementById('cityFilterEvents');
            if (cityInput) cityInput.value = params.city;
        }
        
        if (params.category) {
            const categorySelect = document.getElementById('categoryFilterEvents');
            if (categorySelect) categorySelect.value = params.category;
        }
        
        if (params.date) {
            const dateInput = document.getElementById('dateFilterEvents');
            if (dateInput) dateInput.value = params.date;
        }
        
        // Store filters
        currentFilters = params;
        
        // Clear session storage
        sessionStorage.removeItem('searchParams');
    }
}

function setupEventListeners() {
    // Filter form submission
    const filterForm = document.getElementById('eventFilters');
    if (filterForm) {
        filterForm.addEventListener('submit', handleFilterSubmit);
    }
    
    // Sort dropdown change
    const sortSelect = document.getElementById('sortEvents');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSortChange);
    }
    
    // Real-time filtering (debounced)
    const cityInput = document.getElementById('cityFilterEvents');
    if (cityInput) {
        cityInput.addEventListener('input', debounce(applyFilters, 300));
    }
    
    // Event card clicks
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

function loadEvents() {
    // Show loading spinner and hide events container
    const eventsContainer = document.getElementById('eventsList');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const noResults = document.getElementById('noResults');
    
    if (eventsContainer) eventsContainer.innerHTML = '';
    if (loadingSpinner) loadingSpinner.style.display = 'block';
    if (noResults) noResults.classList.add('d-none');
    
    try {
        // Simulate API call delay (reduced for better UX)
        setTimeout(() => {
            let events = EventsAPI.getAllEvents();
            
            // Apply filters if any
            if (Object.keys(currentFilters).length > 0) {
                events = EventsAPI.filterEvents(currentFilters);
            }
            
            // Sort events by date by default
            events = EventsAPI.sortEvents(events, 'date');
            
            currentEvents = events;
            displayEvents(events);
            updateEventCount(events.length);
            
        }, 100); // Reduced from 500ms to 100ms
        
    } catch (error) {
        console.error('Error loading events:', error);
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        showError('eventsList', 'Failed to load events. Please try again.');
    }
}

function displayEvents(events) {
    const eventsContainer = document.getElementById('eventsList');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const noResults = document.getElementById('noResults');
    
    if (loadingSpinner) loadingSpinner.style.display = 'none';
    
    if (events.length === 0) {
        eventsContainer.innerHTML = '';
        if (noResults) noResults.classList.remove('d-none');
        return;
    }
    
    if (noResults) noResults.classList.add('d-none');
    
    eventsContainer.innerHTML = events.map(event => createEventCard(event)).join('');
    
    // Animate cards
    setTimeout(() => {
        animateCards();
    }, 100);
    
    // Announce to screen readers
    announceToScreenReader(`${events.length} events found`);
}

function createEventCard(event) {
    const categoryInfo = Utils.getCategoryInfo(event.category);
    const formattedDate = Utils.formatDate(event.date);
    const formattedTime = Utils.formatTime(event.time);
    const formattedPrice = Utils.formatPrice(event.price, event.currency);
    
    return `
        <div class="col-md-6 col-lg-4 col-xl-3 mb-4">
            <div class="card event-card h-100" data-event-id="${event.id}">
                <img src="${event.image}" class="card-img-top" alt="${event.name}" loading="lazy">
                <div class="card-body d-flex flex-column">
                    <div class="mb-2">
                        <span class="badge ${categoryInfo.color}">
                            <i class="${categoryInfo.icon} me-1"></i>${categoryInfo.name}
                        </span>
                        ${event.featured ? '<span class="badge bg-warning text-dark ms-1">Featured</span>' : ''}
                    </div>
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text text-muted text-truncate-3 flex-grow-1">${event.description}</p>
                    <div class="event-meta mt-auto">
                        <div class="mb-2">
                            <small class="text-muted">
                                <i class="bi bi-calendar3 me-1"></i>${formattedDate}
                            </small>
                        </div>
                        <div class="mb-2">
                            <small class="text-muted">
                                <i class="bi bi-clock me-1"></i>${formattedTime}
                            </small>
                        </div>
                        <div class="mb-2">
                            <small class="text-muted">
                                <i class="bi bi-geo-alt me-1"></i>${event.city}
                            </small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="event-price fw-bold">${formattedPrice}</span>
                            <small class="text-success">
                                <i class="bi bi-people me-1"></i>${event.availableSpots} spots
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleFilterSubmit(e) {
    e.preventDefault();
    applyFilters();
}

function applyFilters() {
    const filters = {
        city: document.getElementById('cityFilterEvents')?.value || '',
        category: document.getElementById('categoryFilterEvents')?.value || '',
        date: document.getElementById('dateFilterEvents')?.value || ''
    };
    
    currentFilters = filters;
    
    let filteredEvents = EventsAPI.filterEvents(filters);
    
    // Apply current sort
    const sortBy = document.getElementById('sortEvents')?.value || 'date';
    filteredEvents = EventsAPI.sortEvents(filteredEvents, sortBy);
    
    currentEvents = filteredEvents;
    displayEvents(filteredEvents);
    updateEventCount(filteredEvents.length);
}

function handleSortChange(e) {
    const sortBy = e.target.value;
    const sortedEvents = EventsAPI.sortEvents(currentEvents, sortBy);
    currentEvents = sortedEvents;
    displayEvents(sortedEvents);
}

function clearFilters() {
    // Clear form inputs
    const form = document.getElementById('eventFilters');
    if (form) {
        form.reset();
    }
    
    // Reset filters
    currentFilters = {};
    
    // Reload all events
    loadEvents();
    
    // Collapse filters
    const filtersCollapse = document.getElementById('filtersCollapse');
    if (filtersCollapse) {
        const bsCollapse = new bootstrap.Collapse(filtersCollapse, {
            hide: true
        });
    }
}

function updateEventCount(count) {
    const eventCountElement = document.getElementById('eventCount');
    if (eventCountElement) {
        const suffix = count === 1 ? 'event' : 'events';
        eventCountElement.textContent = `Showing ${count} ${suffix}`;
    }
}

function navigateToEventDetails(eventId) {
    window.location.href = `event-details.html?id=${eventId}`;
}

// Search functionality
function searchEvents(query) {
    if (!query.trim()) {
        displayEvents(currentEvents);
        return;
    }
    
    const searchResults = EventsAPI.searchEvents(query);
    displayEvents(searchResults);
    updateEventCount(searchResults.length);
}

// Export functions for global access
window.clearFilters = clearFilters;
window.searchEvents = searchEvents;
