// Grab elements from the DOM
const searchBar = document.getElementById('searchBar');
const searchResults = document.getElementById('searchResults');
const teamMembers = document.querySelectorAll('.team-member');

// Store team member names & ids in an array
const members = Array.from(teamMembers).map(member => {
    return {
        id: member.id,
        name: member.querySelector('h2').innerText
    };
});

// Listen for typing in the search bar
searchBar.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = ""; // Clear old results

    if (query.length > 0) {
        // Filter team members by search query
        const filtered = members.filter(member => member.name.toLowerCase().includes(query));

        // Show matching results
        filtered.forEach(member => {
            const li = document.createElement('li');
            li.innerText = member.name;
            li.addEventListener('click', () => {
                // Scroll smoothly to the member's section
                document.getElementById(member.id).scrollIntoView({ behavior: 'smooth' });
                searchResults.innerHTML = ""; // Clear results after clicking
                searchBar.value = ""; // Reset search bar
            });
            searchResults.appendChild(li);
        });
    }
});

// Modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

// Add click event to every team member image
document.querySelectorAll(".team-member img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; // Show modal
        modalImg.src = img.src;       // Set modal image to clicked image
    });
});

// Close modal when clicking the X
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Optional: close modal when clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// About Me Photo Modal
const aboutImg = document.querySelector('.about-photo img');
const aboutModal = document.getElementById('aboutModal');
const aboutModalImg = document.getElementById('aboutModalImg');
const closeAbout = document.getElementById('closeAboutModal');

aboutImg.addEventListener('click', () => {
    aboutModal.style.display = 'flex';
    aboutModalImg.src = aboutImg.src;
});

// Close when clicking X
closeAbout.addEventListener('click', () => {
    aboutModal.style.display = 'none';
});

// Close when clicking outside the image
aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
});
