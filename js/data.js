// Mock Data for Anndaan Platform

const mockFoodFeed = [
    {
        id: 1,
        donor: "Bistro Green",
        title: "Assorted Sandwiches & Wraps",
        quantity: "15 servings",
        expiry: "2 hours",
        distance: "0.8 km",
        type: "fresh",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        urgent: true,
        donorRating: "4.9/5",
        contactPhone: "+1 (555) 123-4567",
        exactAddress: "142 Greenway Blvd, Downtown",
        lat: 40.7128, lng: -74.0060,
        mockMapUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        donor: "Downtown Bakery",
        title: "Day-old Bread & Pastries",
        quantity: "3 large boxes",
        expiry: "12 hours",
        distance: "1.2 km",
        type: "packaged",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        urgent: false,
        donorRating: "4.7/5",
        contactPhone: "+1 (555) 987-6543",
        exactAddress: "88 Baker Street",
        lat: 40.7150, lng: -74.0100,
        mockMapUrl: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        donor: "Tech Park Cafeteria",
        title: "Vegetarian Pasta Trays",
        quantity: "30 servings",
        expiry: "3 hours",
        distance: "2.5 km",
        type: "cooked",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        urgent: true,
        donorRating: "4.5/5",
        contactPhone: "+1 (555) 555-5555",
        exactAddress: "Building 4, Silicon Valley Park",
        lat: 37.3875, lng: -122.0575,
        mockMapUrl: "https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        donor: "FreshMart Supermarket",
        title: "Imperfect Produce Bundle",
        quantity: "10 kg",
        expiry: "2 days",
        distance: "3.0 km",
        type: "fresh",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        urgent: false,
        donorRating: "4.8/5",
        contactPhone: "+1 (555) 321-4321",
        exactAddress: "900 Market Ave",
        lat: 34.0522, lng: -118.2437,
        mockMapUrl: "https://images.unsplash.com/photo-1478860409689-dcbd9e19d5e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        donor: "Taste of Italy Diner",
        title: "Unserved Pizzas and Garlic Bread",
        quantity: "12 servings",
        expiry: "4 hours",
        distance: "1.5 km",
        type: "cooked",
        image: "https://images.unsplash.com/photo-1513104890-38f1cb04a287?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        urgent: true,
        donorRating: "4.6/5",
        contactPhone: "+1 (555) 888-2222",
        exactAddress: "404 Romano Plaza",
        lat: 40.7300, lng: -73.9900,
        mockMapUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        donor: "Green Leaf Catering",
        title: "Assorted Event Salads",
        quantity: "40 servings",
        expiry: "1.5 hours",
        distance: "0.5 km",
        type: "fresh",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        urgent: true,
        donorRating: "4.9/5",
        contactPhone: "+1 (555) 777-1111",
        exactAddress: "Convention Center Hall A",
        lat: 40.7505, lng: -74.0010,
        mockMapUrl: "https://images.unsplash.com/photo-1582215712217-152f20bdcf47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        donor: "Daily Roast Coffee Shop",
        title: "Oatmeal and Breakfast Muffins",
        quantity: "25 items",
        expiry: "24 hours",
        distance: "1.8 km",
        type: "packaged",
        image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        urgent: false,
        donorRating: "4.8/5",
        contactPhone: "+1 (555) 666-3333",
        exactAddress: "89 Espresso Lane",
        lat: 40.7420, lng: -73.9850,
        mockMapUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        donor: "Grand Hotel Banquets",
        title: "Mixed Curry & Rice Combos",
        quantity: "50 servings",
        expiry: "5 hours",
        distance: "4.2 km",
        type: "cooked",
        image: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        urgent: true,
        donorRating: "5.0/5",
        contactPhone: "+1 (555) 000-9999",
        exactAddress: "Grand Hotel Service Entrance",
        lat: 40.7600, lng: -73.9700,
        mockMapUrl: "https://images.unsplash.com/photo-1541888040715-4be08411b43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const mockAIInsights = {
    prediction: {
        surplus: 24,
        confidence: 89,
        reason: "Friday evening patterns + Local festival"
    },
    impact: {
        co2Saved: 125, // kg
        mealsDonated: 450,
        taxBenefit: "$850"
    }
};
