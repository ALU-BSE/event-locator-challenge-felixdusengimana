// JavaScript for event-details.html page

document.addEventListener('DOMContentLoaded', function() {
    initializeEventDetailsPage();
});

let currentEvent = null;

function initializeEventDetailsPage() {
    // Get event ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    if (!eventId) {
        showError();
        return;
    }
    
    // Load event details
    loadEventDetails(eventId);
    
    // Set up event listeners
    setupEventListeners();
}

function loadEventDetails(eventId) {
    try {
        const event = EventsAPI.getEventById(eventId);
        
        if (!event) {
            showError('Event not found');
            return;
        }
        
        currentEvent = event;
        displayEventDetails(event);
        loadRelatedEvents(eventId);
        
    } catch (error) {
        console.error('Error loading event details:', error);
        showError('Failed to load event details');
    }
}

function displayEventDetails(event) {
    const categoryInfo = Utils.getCategoryInfo(event.category);
    const formattedDate = Utils.formatDate(event.date);
    const formattedTime = Utils.formatTime(event.time);
    const formattedPrice = Utils.formatPrice(event.price, event.currency);
    
    // Update page title
    document.title = `${event.name} - Event Locator`;
    
    // Update breadcrumb
    const breadcrumbEventName = document.getElementById('breadcrumbEventName');
    if (breadcrumbEventName) {
        breadcrumbEventName.textContent = event.name;
    }
    
    // Update event details
    updateElement('eventCategory', categoryInfo.name);
    updateElement('eventTitle', event.name);
    updateElement('eventDate', formattedDate);
    updateElement('eventTime', formattedTime);
    updateElement('eventLocation', event.location);
    updateElement('eventPrice', formattedPrice);
    updateElement('sidebarPrice', formattedPrice);
    updateElement('eventOrganizer', event.organizer);
    updateElement('eventDescription', event.description);
    
    // Update venue information
    updateElement('venueName', event.venue);
    updateElement('venueAddress', event.address);
    
    // Update contact information
    updateElement('organizerEmail', event.organizerEmail);
    updateElement('organizerPhone', event.organizerPhone);
    
    // Update available spots
    const availableSpots = document.getElementById('availableSpots');
    if (availableSpots) {
        if (event.availableSpots > 100) {
            availableSpots.textContent = 'Available';
            availableSpots.className = 'badge bg-success';
        } else if (event.availableSpots > 10) {
            availableSpots.textContent = `${event.availableSpots} left`;
            availableSpots.className = 'badge bg-warning text-dark';
        } else if (event.availableSpots > 0) {
            availableSpots.textContent = `Only ${event.availableSpots} left!`;
            availableSpots.className = 'badge bg-danger';
        } else {
            availableSpots.textContent = 'Sold Out';
            availableSpots.className = 'badge bg-secondary';
            
            // Disable booking button
            const bookBtn = document.getElementById('bookNowBtn');
            if (bookBtn) {
                bookBtn.disabled = true;
                bookBtn.innerHTML = '<i class="bi bi-x-circle me-2"></i>Sold Out';
            }
        }
    }
    
    // Update event image
    const eventImage = document.getElementById('eventImage');
    if (eventImage) {
        eventImage.src = event.image;
        eventImage.alt = event.name;
    }
    
    // Update event highlights
    const highlightsList = document.getElementById('eventHighlights');
    if (highlightsList && event.highlights) {
        highlightsList.innerHTML = event.highlights
            .map(highlight => `<li><i class="bi bi-check-circle text-success me-2"></i>${highlight}</li>`)
            .join('');
    }
    
    // Update category badge styling
    const categoryBadge = document.getElementById('eventCategory');
    if (categoryBadge) {
        categoryBadge.className = `badge ${categoryInfo.color}`;
    }
}

function loadRelatedEvents(eventId) {
    const relatedEvents = EventsAPI.getRelatedEvents(eventId, 3);
    const relatedEventsContainer = document.getElementById('relatedEvents');
    
    if (!relatedEventsContainer || relatedEvents.length === 0) {
        // Hide the related events section if no related events
        const relatedSection = relatedEventsContainer?.closest('section');
        if (relatedSection) {
            relatedSection.style.display = 'none';
        }
        return;
    }
    
    relatedEventsContainer.innerHTML = relatedEvents
        .map(event => createRelatedEventCard(event))
        .join('');
}

function createRelatedEventCard(event) {
    const categoryInfo = Utils.getCategoryInfo(event.category);
    const formattedDate = Utils.formatDate(event.date);
    const formattedPrice = Utils.formatPrice(event.price, event.currency);
    
    return `
        <div class="col-md-4 mb-4">
            <div class="card event-card h-100" data-event-id="${event.id}">
                <img src="${event.image}" class="card-img-top" alt="${event.name}" loading="lazy">
                <div class="card-body">
                    <div class="mb-2">
                        <span class="badge ${categoryInfo.color}">${categoryInfo.name}</span>
                    </div>
                    <h6 class="card-title">${event.name}</h6>
                    <p class="card-text text-muted small text-truncate-2">${event.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-2">
                        <small class="text-muted">${formattedDate}</small>
                        <span class="text-primary fw-bold small">${formattedPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function setupEventListeners() {
    // Book now button
    const bookNowBtn = document.getElementById('bookNowBtn');
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', handleBooking);
    }
    
    // Related event cards
    document.addEventListener('click', function(e) {
        if (e.target.closest('.event-card')) {
            const eventCard = e.target.closest('.event-card');
            const eventId = eventCard.dataset.eventId;
            if (eventId && eventId !== currentEvent?.id.toString()) {
                window.location.href = `event-details.html?id=${eventId}`;
            }
        }
    });
}

function handleBooking() {
    if (!currentEvent) return;
    
    // Simulate booking process
    const bookBtn = document.getElementById('bookNowBtn');
    if (bookBtn) {
        const originalContent = bookBtn.innerHTML;
        bookBtn.disabled = true;
        bookBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';
        
        setTimeout(() => {
            // Simulate successful booking
            showBookingSuccess();
            bookBtn.disabled = false;
            bookBtn.innerHTML = originalContent;
        }, 2000);
    }
}

function showBookingSuccess() {
    // Create and show a success modal or alert
    const alertHtml = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="bi bi-check-circle me-2"></i>
            <strong>Booking Successful!</strong> You have successfully booked your spot for ${currentEvent.name}.
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertAdjacentHTML('afterbegin', alertHtml);
        
        // Scroll to top to show the alert
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateElement(id, content) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = content;
    }
}

function showError(message = 'Event not found') {
    const container = document.querySelector('.container');
    if (container) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-exclamation-triangle display-1 text-warning"></i>
                <h2 class="mt-3">Oops! ${message}</h2>
                <p class="text-muted">The event you're looking for might not exist or has been removed.</p>
                <div class="mt-4">
                    <a href="events.html" class="btn btn-primary me-3">Browse All Events</a>
                    <a href="index.html" class="btn btn-outline-secondary">Go Home</a>
                </div>
            </div>
        `;
    }
}

// Social sharing and calendar functions
function shareEvent() {
    if (!currentEvent) return;
    
    if (navigator.share) {
        navigator.share({
            title: currentEvent.name,
            text: currentEvent.description,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback: copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showTemporaryMessage('Event link copied to clipboard!');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showTemporaryMessage('Event link copied to clipboard!');
        });
    }
}

function addToCalendar() {
    if (!currentEvent) return;
    
    const startDate = new Date(`${currentEvent.date}T${currentEvent.time}`);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // Assume 2-hour duration
    
    const formatDate = (date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(currentEvent.name)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(currentEvent.description)}&location=${encodeURIComponent(currentEvent.location)}`;
    
    window.open(calendarUrl, '_blank');
}

function getDirections() {
    if (!currentEvent) return;
    
    const address = encodeURIComponent(currentEvent.address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    
    window.open(mapsUrl, '_blank');
}

function showTemporaryMessage(message) {
    const alertHtml = `
        <div class="alert alert-info alert-dismissible fade show" role="alert">
            <i class="bi bi-info-circle me-2"></i>${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertAdjacentHTML('afterbegin', alertHtml);
        
        // Auto-dismiss after 3 seconds
        setTimeout(() => {
            const alert = container.querySelector('.alert');
            if (alert) {
                alert.remove();
            }
        }, 3000);
    }
}

// Export functions for global access
window.shareEvent = shareEvent;
window.addToCalendar = addToCalendar;
window.getDirections = getDirections;
