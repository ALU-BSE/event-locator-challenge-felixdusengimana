// Sample events data for the Event Locator application
const eventsData = [
    {
        id: 1,
        name: "Summer Music Festival",
        category: "music",
        date: "2025-08-15",
        time: "18:00",
        location: "Central Park, New York",
        city: "New York",
        venue: "Central Park Great Lawn",
        address: "Central Park, New York, NY 10024",
        price: 75,
        currency: "USD",
        organizer: "NYC Music Events",
        organizerEmail: "info@nycmusicevents.com",
        organizerPhone: "+1 (555) 123-4567",
        description: "Join us for an unforgettable evening of live music featuring top artists from around the world. This outdoor festival celebrates the best of summer with multiple stages, food vendors, and a vibrant atmosphere that brings the community together.",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "10+ world-class performers",
            "Multiple food trucks and vendors",
            "Family-friendly environment",
            "VIP packages available",
            "Professional sound and lighting"
        ],
        availableSpots: 1500,
        featured: true
    },
    {
        id: 2,
        name: "Tech Innovation Conference",
        category: "technology",
        date: "2025-07-22",
        time: "09:00",
        location: "Convention Center, San Francisco",
        city: "San Francisco",
        venue: "Moscone Convention Center",
        address: "747 Howard St, San Francisco, CA 94103",
        price: 299,
        currency: "USD",
        organizer: "TechForward",
        organizerEmail: "events@techforward.com",
        organizerPhone: "+1 (555) 987-6543",
        description: "Discover the latest trends and innovations in technology at this premier conference. Network with industry leaders, attend workshops, and gain insights into the future of tech. Perfect for developers, entrepreneurs, and tech enthusiasts.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "50+ expert speakers",
            "Hands-on workshops",
            "Networking opportunities",
            "Startup showcase",
            "Latest tech demos"
        ],
        availableSpots: 800,
        featured: true
    },
    {
        id: 3,
        name: "Food & Wine Tasting",
        category: "food",
        date: "2025-08-05",
        time: "19:00",
        location: "Waterfront Restaurant, Miami",
        city: "Miami",
        venue: "Bayfront Waterfront Restaurant",
        address: "1 Bayfront Park Dr, Miami, FL 33132",
        price: 120,
        currency: "USD",
        organizer: "Miami Culinary Society",
        organizerEmail: "tastings@miamiculinary.com",
        organizerPhone: "+1 (555) 246-8135",
        description: "Experience an exquisite evening of gourmet food and wine pairings featuring local chefs and sommeliers. Enjoy stunning waterfront views while sampling the finest cuisine Miami has to offer.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "5-course tasting menu",
            "Wine pairings included",
            "Meet the chefs",
            "Waterfront dining",
            "Limited seating"
        ],
        availableSpots: 60,
        featured: false
    },
    {
        id: 4,
        name: "Basketball Championship Finals",
        category: "sports",
        date: "2025-07-28",
        time: "20:00",
        location: "Sports Arena, Los Angeles",
        city: "Los Angeles",
        venue: "Downtown Sports Arena",
        address: "1111 S Figueroa St, Los Angeles, CA 90015",
        price: 150,
        currency: "USD",
        organizer: "LA Sports Entertainment",
        organizerEmail: "tickets@lasports.com",
        organizerPhone: "+1 (555) 369-2580",
        description: "Don't miss the thrilling championship finals! Watch the city's best teams compete for the ultimate prize in this high-energy basketball showdown. Great atmosphere guaranteed!",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "Championship finals",
            "Premium seating available",
            "Halftime entertainment",
            "Food and beverages",
            "Player meet & greet"
        ],
        availableSpots: 2500,
        featured: true
    },
    {
        id: 5,
        name: "Modern Art Exhibition",
        category: "art",
        date: "2025-08-10",
        time: "14:00",
        location: "Metropolitan Museum, New York",
        city: "New York",
        venue: "Metropolitan Museum of Art",
        address: "1000 5th Ave, New York, NY 10028",
        price: 25,
        currency: "USD",
        organizer: "Metropolitan Museum",
        organizerEmail: "exhibitions@metmuseum.org",
        organizerPhone: "+1 (555) 147-2589",
        description: "Explore contemporary masterpieces in this special exhibition featuring works from renowned modern artists. Guided tours available throughout the day.",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "Contemporary masterpieces",
            "Guided tours included",
            "Interactive displays",
            "Artist interviews",
            "Photography allowed"
        ],
        availableSpots: 300,
        featured: false
    },
    {
        id: 6,
        name: "Business Networking Summit",
        category: "business",
        date: "2025-07-30",
        time: "08:30",
        location: "Business Center, Chicago",
        city: "Chicago",
        venue: "Chicago Business Center",
        address: "233 S Wacker Dr, Chicago, IL 60606",
        price: 199,
        currency: "USD",
        organizer: "Chicago Business Alliance",
        organizerEmail: "summit@chicagobusiness.com",
        organizerPhone: "+1 (555) 852-9630",
        description: "Connect with industry professionals and expand your business network at this premier summit. Features keynote speakers, panel discussions, and ample networking opportunities.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "Industry expert speakers",
            "Networking sessions",
            "Panel discussions",
            "Business card exchange",
            "Refreshments included"
        ],
        availableSpots: 400,
        featured: false
    },
    {
        id: 7,
        name: "Jazz Night Under the Stars",
        category: "music",
        date: "2025-08-20",
        time: "20:30",
        location: "Rooftop Venue, Nashville",
        city: "Nashville",
        venue: "Skyline Rooftop",
        address: "505 Broadway, Nashville, TN 37203",
        price: 45,
        currency: "USD",
        organizer: "Nashville Jazz Society",
        organizerEmail: "events@nashvillejazz.com",
        organizerPhone: "+1 (555) 741-8520",
        description: "Experience smooth jazz under the beautiful night sky. This intimate concert features local jazz legends and up-and-coming artists in a stunning rooftop setting.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "Intimate rooftop setting",
            "Local jazz legends",
            "City skyline views",
            "Craft cocktails available",
            "Limited seating"
        ],
        availableSpots: 120,
        featured: true
    },
    {
        id: 8,
        name: "AI & Machine Learning Workshop",
        category: "technology",
        date: "2025-08-12",
        time: "10:00",
        location: "Tech Hub, Seattle",
        city: "Seattle",
        venue: "Seattle Tech Hub",
        address: "400 Dexter Ave N, Seattle, WA 98109",
        price: 179,
        currency: "USD",
        organizer: "Seattle Tech Academy",
        organizerEmail: "workshops@seattletech.edu",
        organizerPhone: "+1 (555) 963-7410",
        description: "Dive deep into artificial intelligence and machine learning concepts in this hands-on workshop. Perfect for developers looking to expand their skills in AI.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "Hands-on coding exercises",
            "Expert instructors",
            "Take-home projects",
            "Certification provided",
            "Lunch included"
        ],
        availableSpots: 50,
        featured: false
    },
    {
        id: 9,
        name: "Gourmet Street Food Festival",
        category: "food",
        date: "2025-08-25",
        time: "12:00",
        location: "Downtown Plaza, Portland",
        city: "Portland",
        venue: "Pioneer Courthouse Square",
        address: "701 SW 5th Ave, Portland, OR 97204",
        price: 0,
        currency: "USD",
        organizer: "Portland Food Collective",
        organizerEmail: "festival@portlandfood.org",
        organizerPhone: "+1 (555) 159-3570",
        description: "Discover amazing street food from local vendors and food trucks. This free festival celebrates Portland's diverse culinary scene with live music and family activities.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "Free admission",
            "30+ food vendors",
            "Live music performances",
            "Family-friendly activities",
            "Local craft beer"
        ],
        availableSpots: 5000,
        featured: true
    },
    {
        id: 10,
        name: "Marathon Running Event",
        category: "sports",
        date: "2025-09-05",
        time: "07:00",
        location: "City Center, Boston",
        city: "Boston",
        venue: "Boston Common",
        address: "139 Tremont St, Boston, MA 02111",
        price: 89,
        currency: "USD",
        organizer: "Boston Running Club",
        organizerEmail: "marathon@bostonrunning.org",
        organizerPhone: "+1 (555) 486-2170",
        description: "Join thousands of runners in this annual marathon through Boston's historic streets. Multiple race categories available for all skill levels.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "Multiple race distances",
            "Historic route",
            "Finisher medals",
            "Professional timing",
            "Post-race celebration"
        ],
        availableSpots: 3000,
        featured: false
    },
    {
        id: 11,
        name: "Photography Workshop",
        category: "art",
        date: "2025-08-18",
        time: "09:00",
        location: "Art Center, Denver",
        city: "Denver",
        venue: "Denver Art Center",
        address: "100 W 14th Ave Pkwy, Denver, CO 80204",
        price: 95,
        currency: "USD",
        organizer: "Denver Photography Guild",
        organizerEmail: "workshops@denverphoto.com",
        organizerPhone: "+1 (555) 357-8240",
        description: "Learn advanced photography techniques from professional photographers. Covers both digital and film photography with hands-on practice sessions.",
        image: "https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "Professional instruction",
            "Equipment provided",
            "Outdoor shooting session",
            "Portfolio review",
            "Certificate of completion"
        ],
        availableSpots: 25,
        featured: false
    },
    {
        id: 12,
        name: "Startup Pitch Competition",
        category: "business",
        date: "2025-08-08",
        time: "18:00",
        location: "Innovation Hub, Austin",
        city: "Austin",
        venue: "Austin Innovation Hub",
        address: "1000 E 41st St, Austin, TX 78751",
        price: 35,
        currency: "USD",
        organizer: "Austin Startup Community",
        organizerEmail: "pitch@austinstartup.com",
        organizerPhone: "+1 (555) 681-4920",
        description: "Watch innovative startups pitch their ideas to a panel of investors and industry experts. Network with entrepreneurs and investors in Austin's thriving startup scene.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlights: [
            "12 startup presentations",
            "Expert judge panel",
            "Networking reception",
            "Prize awards",
            "Investor meetings"
        ],
        availableSpots: 200,
        featured: false
    }
];

// Utility functions for working with events data
const EventsAPI = {
    // Get all events
    getAllEvents() {
        return eventsData;
    },

    // Get event by ID
    getEventById(id) {
        return eventsData.find(event => event.id === parseInt(id));
    },

    // Get featured events
    getFeaturedEvents() {
        return eventsData.filter(event => event.featured);
    },

    // Filter events by criteria
    filterEvents(filters) {
        let filteredEvents = [...eventsData];

        if (filters.city && filters.city.trim()) {
            filteredEvents = filteredEvents.filter(event => 
                event.city.toLowerCase().includes(filters.city.toLowerCase())
            );
        }

        if (filters.category && filters.category.trim()) {
            filteredEvents = filteredEvents.filter(event => 
                event.category === filters.category
            );
        }

        if (filters.date && filters.date.trim()) {
            filteredEvents = filteredEvents.filter(event => 
                event.date === filters.date
            );
        }

        return filteredEvents;
    },

    // Search events by name or description
    searchEvents(query) {
        if (!query || !query.trim()) {
            return eventsData;
        }

        const searchTerm = query.toLowerCase();
        return eventsData.filter(event => 
            event.name.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.category.toLowerCase().includes(searchTerm) ||
            event.city.toLowerCase().includes(searchTerm)
        );
    },

    // Sort events by different criteria
    sortEvents(events, sortBy) {
        const sortedEvents = [...events];

        switch (sortBy) {
            case 'date':
                return sortedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
            case 'name':
                return sortedEvents.sort((a, b) => a.name.localeCompare(b.name));
            case 'category':
                return sortedEvents.sort((a, b) => a.category.localeCompare(b.category));
            case 'price':
                return sortedEvents.sort((a, b) => a.price - b.price);
            default:
                return sortedEvents;
        }
    },

    // Get events by category
    getEventsByCategory(category) {
        return eventsData.filter(event => event.category === category);
    },

    // Get events by city
    getEventsByCity(city) {
        return eventsData.filter(event => 
            event.city.toLowerCase() === city.toLowerCase()
        );
    },

    // Get upcoming events (from current date)
    getUpcomingEvents() {
        const today = new Date();
        return eventsData.filter(event => new Date(event.date) >= today);
    },

    // Get related events (same category, different event)
    getRelatedEvents(eventId, limit = 3) {
        const currentEvent = this.getEventById(eventId);
        if (!currentEvent) return [];

        return eventsData
            .filter(event => 
                event.category === currentEvent.category && 
                event.id !== eventId
            )
            .slice(0, limit);
    }
};

// Category information for display
const categories = {
    music: {
        name: 'Music',
        icon: 'bi-music-note-beamed',
        color: 'category-music'
    },
    sports: {
        name: 'Sports',
        icon: 'bi-trophy',
        color: 'category-sports'
    },
    technology: {
        name: 'Technology',
        icon: 'bi-laptop',
        color: 'category-technology'
    },
    food: {
        name: 'Food & Drink',
        icon: 'bi-cup-straw',
        color: 'category-food'
    },
    art: {
        name: 'Art & Culture',
        icon: 'bi-palette',
        color: 'category-art'
    },
    business: {
        name: 'Business',
        icon: 'bi-briefcase',
        color: 'category-business'
    }
};

// Utility functions for formatting
const Utils = {
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(hours, minutes);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    },

    formatPrice(price, currency = 'USD') {
        if (price === 0) return 'Free';
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(price);
    },

    getCategoryInfo(categoryKey) {
        return categories[categoryKey] || {
            name: categoryKey,
            icon: 'bi-calendar',
            color: 'bg-secondary'
        };
    }
};
