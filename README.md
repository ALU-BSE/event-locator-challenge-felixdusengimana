# Event Locator Web Application

A modern, responsive web application that allows users to search for and discover events happening in their city. Built with HTML, CSS, JavaScript, and Bootstrap 5.

![Event Locator Screenshot](https://via.placeholder.com/800x400/0d6efd/ffffff?text=Event+Locator+Screenshot)

## Features

### 🏠 Home Page
- Beautiful hero section with search functionality
- Filter events by city, category, and date
- Featured events showcase
- Responsive navigation

### 📅 Events List Page
- Display all events with filtering and sorting options
- Real-time search and filtering
- Responsive event cards with detailed information
- Pagination and loading states

### 📍 Event Details Page
- Comprehensive event information
- Venue details and contact information
- Booking functionality
- Social sharing and calendar integration
- Related events suggestions

### 🎨 Design Features
- Fully responsive design using Bootstrap 5
- Modern and clean UI/UX
- Smooth animations and transitions
- Dark mode support (system preference)
- Accessibility-friendly

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling with modern features
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5** - Responsive framework and components
- **Bootstrap Icons** - Beautiful iconography

## Project Structure

```
event_locator/
├── index.html              # Home page
├── events.html            # Events listing page
├── event-details.html     # Event details page
├── css/
│   └── style.css         # Custom styles
├── js/
│   ├── events-data.js    # Event data and API simulation
│   ├── script.js         # Main JavaScript functionality
│   ├── events.js         # Events page specific functionality
│   └── event-details.js  # Event details page functionality
├── images/               # Image assets (placeholder)
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd event_locator
   ```

2. **Open in a web browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using Live Server (VS Code extension)
   # Right-click on index.html and select "Open with Live Server"
   ```

3. **Access the application**
   - Direct file access: `file:///path/to/event_locator/index.html`
   - Local server: `http://localhost:8000`

## Usage

### Searching for Events
1. Visit the home page
2. Enter your city in the search form
3. Optionally filter by category and date
4. Click "Search Events" to view results

### Browsing Events
1. Navigate to the "Events" page
2. Use the filters to narrow down events
3. Sort events by date, name, or category
4. Click on any event card to view details

### Viewing Event Details
1. Click on an event from the home page or events list
2. View comprehensive event information
3. Book tickets using the "Book Now" button
4. Share the event or add it to your calendar

## Event Categories

The application supports the following event categories:
- 🎵 **Music** - Concerts, festivals, performances
- 🏆 **Sports** - Games, tournaments, competitions
- 💻 **Technology** - Conferences, workshops, meetups
- 🍽️ **Food & Drink** - Tastings, festivals, culinary events
- 🎨 **Art & Culture** - Exhibitions, shows, cultural events
- 💼 **Business** - Networking, conferences, seminars

## Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (576px - 767px)
- **Small Mobile** (<576px)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Features in Detail

### Search and Filtering
- **Real-time search** with debounced input
- **Multi-criteria filtering** (city, category, date)
- **Sorting options** (date, name, category, price)
- **Clear filters** functionality

### User Experience
- **Loading states** with spinners
- **Error handling** with user-friendly messages
- **Smooth animations** for better interaction
- **Keyboard navigation** support
- **Screen reader** announcements

### Data Management
- **Simulated API** with realistic event data
- **Local storage** for search preferences
- **Session storage** for cross-page data
- **Optimized rendering** for large datasets

## Customization

### Adding New Events
Edit the `eventsData` array in `js/events-data.js`:

```javascript
{
    id: 13,
    name: "Your Event Name",
    category: "music", // music, sports, technology, food, art, business
    date: "2025-08-30",
    time: "19:00",
    location: "Venue Name, City",
    city: "City Name",
    // ... other properties
}
```

### Styling Customization
- Modify CSS variables in `css/style.css` for color schemes
- Add custom CSS classes for new components
- Override Bootstrap variables for global changes

### Adding New Categories
1. Add category to `categories` object in `js/events-data.js`
2. Update category options in HTML forms
3. Add corresponding CSS class for styling

## Performance Optimizations

- **Lazy loading** for images
- **Debounced search** to reduce API calls
- **Efficient DOM manipulation**
- **CSS animations** using transforms
- **Responsive images** with appropriate sizing

## Accessibility Features

- **Semantic HTML** structure
- **ARIA labels** and roles
- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** support
- **Focus management**

## Future Enhancements

- [ ] User authentication and profiles
- [ ] Event creation and management
- [ ] Payment gateway integration
- [ ] Real-time notifications
- [ ] Social media integration
- [ ] Advanced search with location services
- [ ] Mobile app version
- [ ] Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Developer**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)

## Acknowledgments

- Bootstrap team for the amazing framework
- Unsplash for placeholder images
- Bootstrap Icons for the icon set
- The web development community for inspiration

---

Made with ❤️ by [Your Name]
