// Application Logic File

const translations = {
    EN: {
        navHome: "Home",
        navFeed: "Live Feed",
        navDonor: "Donor Hub",
        navNGO: "NGO View",
        navVol: "Volunteer Hub",
        btnDonate: "Donate Food",
        heroTitle: "Transforming <span>Surplus</span> Into Sustenance",
        heroSubtitle: "Join the smart network connecting excess food with those who need it most. Powered by AI and real-time GPS matching.",
        heroBtnShare: "I Have Food to Share",
        heroBtnNeed: "I Need Food for NGO",
        toastTheme: "Theme Updated",
        toastThemeMsg: "Switched to Light/Dark Mode.",
        toastLang: "Language Changed",
        toastLangMsg: "Interface language updated to"
    },
    HI: {
        navHome: "होम",
        navFeed: "लाइव फ़ीड",
        navDonor: "दाता हब",
        navNGO: "एनजीओ व्यू",
        navVol: "स्वयंसेवक हब",
        btnDonate: "भोजन दान करें",
        heroTitle: "अतिरिक्त को <span>पोषण</span> में बदलें",
        heroSubtitle: "जरूरतमंदों के साथ अतिरिक्त भोजन को जोड़ने वाले स्मार्ट नेटवर्क से जुड़ें। एआई और रीयल-टाइम जीपीएस द्वारा संचालित।",
        heroBtnShare: "मेरे पास साझा करने के लिए भोजन है",
        heroBtnNeed: "मुझे एनजीओ के लिए भोजन चाहिए",
        toastTheme: "थीम अपडेट की गई",
        toastThemeMsg: "लाइट/डार्क मोड में स्विच किया गया।",
        toastLang: "भाषा बदल गई",
        toastLangMsg: "इंटरफ़ेस की भाषा बदल दी गई"
    },
    MR: {
        navHome: "मुख्य पृष्ठ",
        navFeed: "थेट फीड",
        navDonor: "दाता हब",
        navNGO: "एनजीओ दृश्य",
        navVol: "स्वयंसेवक हब",
        btnDonate: "अन्न दान करा",
        heroTitle: "अतिरिक्त अन्नाला <span>पोषणात</span> बदला",
        heroSubtitle: "ज्यांना गरज आहे अशा लोकांसोबत अतिरिक्त अन्नाला जोडणाऱ्या स्मार्ट नेटवर्कमध्ये सामील व्हा.",
        heroBtnShare: "माझ्याकडे शेअर करण्यासाठी अन्न आहे",
        heroBtnNeed: "मला एनजीओसाठी अन्न हवे आहे",
        toastTheme: "थीम अपडेट केली",
        toastThemeMsg: "लाईट/डार्क मोडमध्ये स्विच केले.",
        toastLang: "भाषा बदलली",
        toastLangMsg: "इंटरफेसची भाषा बदलली"
    }
};

let currentLang = 'EN';

document.addEventListener('DOMContentLoaded', () => {
    // Nav Navigation Logic
    const contentBox = document.getElementById('app-content');
    const navButtons = document.querySelectorAll('.nav-btn');

    // Make navigate and actions global for onclick attributes
    window.app = {
        navigate,
        showToast,
        addFood,
        reserveFood,
        acceptDelivery,
        showFoodDetails,
        closeModal,
        toggleLangMenu,
        selectLang,
        toggleTheme
    };

    // Initialize View
    navigate('home');

    // Attach Nav Events
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.target.getAttribute('data-target');
            navigate(target);
        });
    });

    function navigate(viewName) {
        // Update Active Nav
        navButtons.forEach(btn => {
            if (btn.getAttribute('data-target') === viewName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Render View View Content
        contentBox.innerHTML = '';
        const viewEl = document.createElement('div');
        viewEl.className = 'container fade-in';
        
        switch (viewName) {
            case 'home':
                viewEl.innerHTML = renderHome();
                break;
            case 'feed':
                viewEl.innerHTML = renderFeed();
                break;
            case 'donor-dashboard':
                viewEl.innerHTML = renderDonorDashboard();
                break;
            case 'ngo-dashboard':
                viewEl.innerHTML = renderNGODashboard();
                break;
            case 'volunteer-dashboard':
                viewEl.innerHTML = renderVolunteerDashboard();
                break;
            default:
                viewEl.innerHTML = renderHome();
        }
        
        contentBox.appendChild(viewEl);
        applyTranslations();
    }

    function applyTranslations() {
        // Fallback to EN if language not mapped fully yet
        const t = translations[currentLang] || translations['EN'];
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });
    }

    /* --- Core Real-World Features (GPS & Notifications) --- */
    function showToast(title, message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icon = type === 'success' ? 'ph-check-circle' : 'ph-warning-circle';
        
        toast.innerHTML = `
            <i class="ph-fill ${icon}"></i>
            <div class="toast-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        `;
        
        container.appendChild(toast);
        
        // Trigger reflow for animation
        setTimeout(() => toast.classList.add('show'), 50);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }

    function addFood(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.querySelector('[name="title"]').value;
        const type = form.querySelector('[name="type"]').value.toLowerCase().split(' ')[0];
        const quantity = form.querySelector('[name="quantity"]').value;
        const expiry = form.querySelector('[name="expiry"]').value;

        // Show loading toast for GPS
        showToast("Locating...", "Fetching GPS coordinates for precise matching.", "success");

        // Simulate HTML5 Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => submitFood(title, type, quantity, expiry, pos.coords),
                (err) => submitFood(title, type, quantity, expiry, null) // Fallback if blocked
            );
        } else {
            submitFood(title, type, quantity, expiry, null);
        }
    }

    function submitFood(title, type, quantity, expiry, coords) {
        // Format GPS coords or use dummy local distance if unavailable
        const locationStr = coords ? `Dist: 0.1km (${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)})` : 'Dist: 0.5 km';
        
        mockFoodFeed.unshift({
            id: Date.now(),
            donor: "Current User",
            title: title || "Surplus Food",
            quantity: quantity + " servings",
            expiry: expiry + " hours",
            distance: locationStr,
            type: type || "fresh",
            image: "https://images.unsplash.com/photo-1490818387583-1b5ba45227fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            urgent: expiry <= 2
        });

        setTimeout(() => {
            app.showToast("Donation Live & Broadcasted!", "Local NGOs have been pinged with your exact location.", "success");
            app.navigate('feed');
        }, 1000);
    }

    function reserveFood(id, title, donor) {
        // Find and remove the item from feed to simulate it being taken
        const idx = mockFoodFeed.findIndex(item => item.id == id);
        if(idx > -1) mockFoodFeed.splice(idx, 1);
        
        app.showToast("Food Claimed!", `You successfully claimed ${title}.`, "success");
        app.navigate('feed'); // Refresh feed

        // Simulate Real-time Message to Donor
        setTimeout(() => {
            app.showToast(`📩 Message to ${donor}`, `An NGO claimed your food! A volunteer is dispatching now.`, "urgent");
        }, 2500);
    }

    function acceptDelivery(title) {
        app.showToast("Route Assigned", `You are now navigating to pick up: ${title}`, "success");
        
        // Simulate Real-time Message to Receiver
        setTimeout(() => {
            app.showToast(`📩 Notification sent to NGO`, `The volunteer has picked up the food. ETA: 12 minutes.`, "urgent");
        }, 2500);
    }

    function showFoodDetails(id) {
        const item = mockFoodFeed.find(f => f.id === id);
        if(!item) return;

        let modal = document.getElementById('food-detail-modal');
        if(!modal) {
            modal = document.createElement('div');
            modal.id = 'food-detail-modal';
            modal.className = 'modal-backdrop';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="ph-fill ph-map-pin"></i> Pickup Information</h3>
                    <button class="modal-close" onclick="app.closeModal()"><i class="ph ph-x"></i></button>
                </div>
                <div class="modal-body fade-in">
                    <div>
                        <div class="donor-info-card">
                            <h4 style="margin-bottom: 1rem; color: var(--color-primary-300); font-size: 1.25rem;">${item.donor}</h4>
                            <div class="d-row">
                                <i class="ph-fill ph-star"></i>
                                <span>Rating: ${item.donorRating}</span>
                            </div>
                            <div class="d-row">
                                <i class="ph-fill ph-phone"></i>
                                <span>${item.contactPhone}</span>
                            </div>
                            <div class="d-row">
                                <i class="ph-fill ph-map-pin"></i>
                                <span>${item.exactAddress}</span>
                            </div>
                            <div class="d-row">
                                <i class="ph-fill ph-clock"></i>
                                <span>Expires in: <strong style="color:var(--color-accent-rose)">${item.expiry}</strong></span>
                            </div>
                        </div>

                        <div class="donor-info-card" style="background: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.2);">
                            <h4 style="margin-bottom: 1rem; display:flex; align-items:center; gap:0.5rem">
                                <i class="ph-fill ph-package"></i> Package Details
                            </h4>
                            <p style="margin-bottom: 0.5rem; color: var(--color-text-primary);"><strong>Item:</strong> ${item.title}</p>
                            <p style="margin-bottom: 1rem; color: var(--color-text-primary);"><strong>Quantity:</strong> ${item.quantity}</p>
                            <p><strong>Category:</strong> <span class="badge badge-${item.type}" style="margin-left: 0.5rem;">${item.type}</span></p>
                        </div>
                        
                        <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="app.closeModal(); app.reserveFood(${item.id}, '${item.title}', '${item.donor}')">
                            <i class="ph-fill ph-hand-heart"></i> Confirm & Claim Food
                        </button>
                    </div>

                    <div style="display:flex; flex-direction:column; gap: 1rem;">
                        <h4 style="display:flex; justify-content:space-between; align-items:center;">
                            <span><i class="ph-fill ph-crosshair"></i> Accurate Location</span>
                            <span style="font-size:0.875rem; color:var(--color-text-tertiary)">${item.lat}, ${item.lng}</span>
                        </h4>
                        <div class="modal-map" style="background-image: url('${item.mockMapUrl}')">
                            <div class="modal-map-pin">
                                <i class="ph-fill ph-map-pin"></i>
                            </div>
                        </div>
                        <button class="btn btn-outline" style="width:100%" onclick="app.showToast('Navigating', 'Connecting to Navigation Services...', 'success')">
                            <i class="ph-fill ph-navigation-arrow"></i> Open Turn-by-Turn Directions
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(() => modal.classList.add('show'), 10);
    }

    function closeModal() {
        const modal = document.getElementById('food-detail-modal');
        if(modal) {
            modal.classList.remove('show');
            setTimeout(() => { modal.innerHTML = ''; }, 300);
        }
    }

    // Language Dropdown Logic
    function toggleLangMenu() {
        const menu = document.getElementById('lang-menu');
        if (menu) {
            menu.classList.toggle('show');
        }
    }

    function selectLang(code, name) {
        currentLang = code;
        document.getElementById('current-lang').innerText = code;
        applyTranslations();
        
        const t = translations[currentLang] || translations['EN'];
        app.showToast(t.toastLang, `${t.toastLangMsg} ${name}`, 'success');
        toggleLangMenu(); // close
    }

    // Theme Toggle Logic
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        const icon = document.getElementById('theme-icon');
        if(document.body.classList.contains('light-theme')) {
            icon.classList.remove('ph-moon');
            icon.classList.add('ph-sun');
        } else {
            icon.classList.remove('ph-sun');
            icon.classList.add('ph-moon');
        }
        
        const t = translations[currentLang] || translations['EN'];
        app.showToast(t.toastTheme, t.toastThemeMsg, 'success');
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-dropdown-wrapper')) {
            const menu = document.getElementById('lang-menu');
            if (menu && menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        }
    });
});

/* --- View Renderers --- */

function renderHome() {
    return `
        <div class="hero-section">
            <div class="hero-grid">
                <div class="hero-content">
                    <h1 class="slide-up" data-i18n="heroTitle">Transforming <span>Surplus</span> Into Sustenance</h1>
                    <p class="slide-up" style="animation-delay: 0.1s" data-i18n="heroSubtitle">Join the smart network connecting excess food with those who need it most. Powered by AI and real-time GPS matching.</p>
                    <div class="hero-actions slide-up" style="animation-delay: 0.2s">
                        <button class="btn btn-primary" onclick="app.navigate('donor-dashboard')" data-i18n="heroBtnShare">I Have Food to Share</button>
                        <button class="btn btn-outline" onclick="app.navigate('ngo-dashboard')" data-i18n="heroBtnNeed">I Need Food for NGO</button>
                    </div>
                </div>
                <div class="ai-widget glass-panel slide-up" style="animation-delay: 0.3s">
                    <div class="ai-card">
                        <div class="icon-wrapper">
                            <i class="ph ph-brain"></i>
                        </div>
                        <h3>AI Predictive Analytics</h3>
                        <p>Our model predicts surplus trends to help restaurants cook smarter.</p>
                        
                        <div class="metric-grid">
                            <div class="metric">
                                <span class="value">89%</span>
                                <span class="label">Accuracy</span>
                            </div>
                            <div class="metric">
                                <span class="value">4.2T</span>
                                <span class="label">CO₂ Saved</span>
                            </div>
                        </div>
                        <button class="btn btn-accent" style="margin-top: 1.5rem; width: 100%" onclick="app.navigate('feed')">View Live Feed <i class="ph ph-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderFeed() {
    let cardsHtml = mockFoodFeed.map(item => `
        <div class="food-card glass-panel fade-in">
            <div class="food-card-img" style="background-image: url('${item.image}')">
                <div class="food-card-badges">
                    ${item.urgent ? '<span class="badge badge-urgent"><i class="ph-fill ph-warning-circle"></i> Urgent</span>' : ''}
                    <span class="badge badge-${item.type}">${item.type}</span>
                </div>
            </div>
            <div class="food-card-content">
                <div class="food-meta">
                    <span><i class="ph ph-storefront"></i> ${item.donor}</span>
                </div>
                <h3 class="food-title">${item.title}</h3>
                <div class="food-meta" style="margin-top:0.5rem">
                    <span><i class="ph ph-package"></i> ${item.quantity}</span>
                    <span><i class="ph ph-clock"></i> Exp: ${item.expiry}</span>
                    <span><i class="ph ph-map-pin"></i> ${item.distance}</span>
                </div>
                <div class="food-actions">
                    <button class="btn btn-outline btn-sm" onclick="app.showFoodDetails(${item.id})">Details</button>
                    <button class="btn btn-primary btn-sm" onclick="app.reserveFood(${item.id}, '${item.title}', '${item.donor}')"><i class="ph ph-hand-heart"></i> Reserve</button>
                </div>
            </div>
        </div>
    `).join('');

    if(mockFoodFeed.length === 0) {
        cardsHtml = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem;"><i class="ph ph-check-circle" style="font-size: 3rem; color: var(--color-accent-emerald);"></i><h3>No surplus right now!</h3><p>All food has been successfully claimed.</p></div>`;
    }

    return `
        <div style="padding: 2rem 0;">
            <div class="section-header fade-in">
                <div>
                    <h2>Live Surplus Feed</h2>
                    <p>Available food rescues in your area right now automatically synced via GPS.</p>
                </div>
                <div class="filters">
                    <button class="btn btn-outline btn-sm" onclick="app.showToast('Location Updated', 'Refreshed Feed based on your current GPS coordinates.', 'success')"><i class="ph ph-crosshair"></i> Use My Location</button>
                </div>
            </div>
            <div class="feed-grid">
                ${cardsHtml}
            </div>
        </div>
    `;
}

function renderDonorDashboard() {
    return `
        <div style="padding: 2rem 0;">
            <div class="section-header fade-in">
                <div>
                    <h2>Donor Innovation Hub</h2>
                    <p>List food, track your impact, and view AI predictions.</p>
                </div>
            </div>
            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s">
                <div class="main-col">
                    <div class="glass-panel" style="margin-bottom: 2rem;">
                        <h3><i class="ph ph-plus-circle"></i> List New Surplus Food</h3>
                        <p style="margin-bottom: 1.5rem">Help local communities by listing what you can't sell today. GPS will attach automatically.</p>
                        <form onsubmit="app.addFood(event)">
                            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
                                <div class="form-group">
                                    <label>Food Item / Title</label>
                                    <input type="text" name="title" class="form-control" placeholder="e.g. 20 Assorted Pastries" required>
                                </div>
                                <div class="form-group">
                                    <label>Food Category</label>
                                    <select name="type" class="form-control">
                                        <option>Cooked Meal</option>
                                        <option>Fresh Produce</option>
                                        <option>Packaged Goods</option>
                                        <option>Baked Goods</option>
                                    </select>
                                </div>
                            </div>
                            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
                                <div class="form-group">
                                    <label>Estimated Servings/Quantity</label>
                                    <input type="number" name="quantity" class="form-control" placeholder="e.g. 20" required>
                                </div>
                                <div class="form-group">
                                    <label>Expires In (Hours)</label>
                                    <input type="number" name="expiry" class="form-control" placeholder="e.g. 4" required>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary" style="margin-top: 1rem;"><i class="ph ph-navigation-arrow"></i> Broadcast via GPS</button>
                        </form>
                    </div>
                </div>

                <div class="side-col">
                    <div class="glass-panel" style="margin-bottom: 1rem; border-color: rgba(14, 165, 233, 0.4)">
                        <h4 style="display:flex; align-items:center; gap:0.5rem; color: var(--color-primary-300);">
                            <i class="ph-fill ph-brain"></i> AI Forecast
                        </h4>
                        <div style="margin: 1rem 0;">
                            <span style="font-size:2rem; font-weight:700; display:block;">${mockAIInsights.prediction.surplus} meals</span>
                            <span style="color:var(--color-text-tertiary); font-size:0.875rem">Predicted surplus tonight</span>
                        </div>
                        <p style="font-size:0.875rem; background:rgba(14, 165, 233, 0.1); padding:0.5rem; border-radius:0.5rem">
                            💡 Tip: Consider preparing 10% less inventory today based on historical Friday sales data.
                        </p>
                    </div>

                    <div class="glass-panel">
                        <h4 style="margin-bottom: 1rem;">Your Impact Score</h4>
                        <div class="metric" style="margin-bottom: 0.5rem">
                            <span class="value">${mockAIInsights.impact.co2Saved} kg</span>
                            <span class="label">CO₂ Emissions Prevented 🌱</span>
                        </div>
                        <div class="metric">
                            <span class="value">${mockAIInsights.impact.taxBenefit}</span>
                            <span class="label">Est. Tax Deductions 🧾</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderNGODashboard() {
    return `
        <div style="padding: 2rem 0;">
            <div class="section-header fade-in">
                <div>
                    <h2>NGO / Receiver View</h2>
                    <p>Discover localized food donations ready for pickup.</p>
                </div>
                <button class="btn btn-primary" onclick="app.showToast('Volunteer Pinged', 'A local delivery partner is en route.', 'success')"><i class="ph ph-moped"></i> Call Volunteer Delivery</button>
            </div>
            
            <div class="fade-in" style="animation-delay: 0.1s">
                <div class="map-placeholder">
                    <div class="map-overlay">
                        <i class="ph-fill ph-crosshair"></i>
                        <h3>GPS Targeting Active</h3>
                        <p>Showing ${mockFoodFeed.length} active donations within 5km radius</p>
                    </div>
                </div>
                
                <h3 style="margin-bottom: 1rem;">Urgent Pickups Nearby</h3>
                <div class="feed-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
                    ${mockFoodFeed.filter(item => item.urgent || item.distance.includes('0.8')).map(item => `
                        <div class="food-card glass-panel">
                            <div class="food-card-content" style="padding: 1rem">
                                <h4 style="margin-bottom: 0.5rem">${item.title}</h4>
                                <div class="food-meta" style="margin-bottom: 1rem">
                                    <span><i class="ph ph-storefront"></i> ${item.donor}</span>
                                    <span><i class="ph ph-map-pin"></i> ${item.distance}</span>
                                </div>
                                <button class="btn btn-outline btn-sm" style="width: 100%; margin-bottom: 0.5rem" onclick="app.showFoodDetails(${item.id})">View Accurate Location & Details</button>
                                <button class="btn btn-accent btn-sm" style="width: 100%" onclick="app.reserveFood(${item.id}, '${item.title}', '${item.donor}')">Claim & Dispatch Volunteer</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderVolunteerDashboard() {
    return `
        <div style="padding: 2rem 0;">
            <div class="section-header fade-in">
                <div>
                    <h2>Volunteer Delivery Hub 🚴</h2>
                    <p>Accept pending rescue tasks and deliver food securely.</p>
                </div>
                <div class="filters">
                    <span class="badge badge-fresh" style="font-size: 1rem; padding: 0.5rem 1rem;"><i class="ph-fill ph-navigation-arrow"></i> Online</span>
                </div>
            </div>

            <div class="dashboard-grid fade-in" style="animation-delay: 0.1s">
                <div class="main-col">
                    <h3 style="margin-bottom: 1rem;">Active Logistics Requests</h3>
                    
                    <div class="glass-panel" style="margin-bottom: 1rem; border-left: 4px solid var(--color-primary-500);">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <h4>Pickup: Bistro Green (0.8km)</h4>
                                <p style="color: var(--color-text-secondary); font-size: 0.875rem;">Dropoff: Hope Shelter (2.1km)</p>
                                <div style="margin-top: 0.5rem;">
                                    <span class="badge badge-urgent">15 Servings</span>
                                </div>
                            </div>
                            <button class="btn btn-primary" onclick="this.disabled=true; this.innerHTML='En Route...'; app.acceptDelivery('Assorted Sandwiches');">Accept Task</button>
                        </div>
                    </div>

                    <div class="glass-panel" style="margin-bottom: 1rem; opacity: 0.8;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <h4>Pickup: Tech Park Cafeteria (2.5km)</h4>
                                <p style="color: var(--color-text-secondary); font-size: 0.875rem;">Dropoff: Downtown Community Center (4.3km)</p>
                                <div style="margin-top: 0.5rem;">
                                    <span class="badge" style="background: rgba(255,255,255,0.1)">30 Vegetarian Pasta Trays</span>
                                </div>
                            </div>
                            <button class="btn btn-outline" onclick="this.disabled=true; this.innerHTML='En Route...'; app.acceptDelivery('Vegetarian Pasta Trays');">Accept Task</button>
                        </div>
                    </div>
                </div>
                
                <div class="side-col">
                    <div class="glass-panel" style="text-align:center;">
                        <div style="width: 80px; height:80px; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary-500), var(--color-accent-emerald)); display:flex; align-items:center; justify-content:center; margin: 0 auto 1rem; font-size: 2.5rem; color: white;">
                            <i class="ph-fill ph-star"></i>
                        </div>
                        <h3>Hero Status</h3>
                        <p style="color: var(--color-text-secondary); margin-bottom: 1rem;">You're in the top 5% of local rescuers!</p>
                        
                        <div class="metric" style="margin-bottom: 0.5rem; text-align:left;">
                            <span class="value">42</span>
                            <span class="label">Successful Drops</span>
                        </div>
                        <div class="metric" style="text-align:left;">
                            <span class="value">38.5 km</span>
                            <span class="label">Distance Covered</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
