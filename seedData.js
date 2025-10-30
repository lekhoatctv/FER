import axios from 'axios';

const API_URL = 'https://6729bb776d5fa4901b6e0a77.mockapi.io/orchids';

const orchidsData = [
    {
        name: "Dendrobium nobile",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop",
        origin: "Himalaya, India",
        color: "Pink, White",
        isSpecial: true,
        rating: 4.8,
        isNatural: true,
        category: "Dendrobium"
    },
    {
        name: "Phalaenopsis amabilis",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=400&fit=crop",
        origin: "Indonesia, Philippines",
        color: "White",
        isSpecial: true,
        rating: 4.9,
        isNatural: true,
        category: "Phalaenopsis"
    },
    {
        name: "Cattleya trianae",
        image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=500&h=400&fit=crop",
        origin: "Colombia",
        color: "Purple, Pink",
        isSpecial: true,
        rating: 4.7,
        isNatural: true,
        category: "Cattleya"
    },
    {
        name: "Oncidium sphacelatum",
        image: "https://images.unsplash.com/photo-1594736797933-d0fa7e62e85b?w=500&h=400&fit=crop",
        origin: "Mexico, Guatemala",
        color: "Yellow, Brown",
        isSpecial: false,
        rating: 4.3,
        isNatural: true,
        category: "Oncidium"
    },
    {
        name: "Vanda coerulea",
        image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=500&h=400&fit=crop",
        origin: "Thailand, Myanmar",
        color: "Blue, Purple",
        isSpecial: true,
        rating: 4.6,
        isNatural: true,
        category: "Vanda"
    },
    {
        name: "Cymbidium ensifolium",
        image: "https://images.unsplash.com/photo-1583993030531-c8b6e7ba2d2b?w=500&h=400&fit=crop",
        origin: "China, Japan",
        color: "Green, Yellow",
        isSpecial: false,
        rating: 4.2,
        isNatural: true,
        category: "Cymbidium"
    }
];

async function seedData() {
    console.log('🌱 Starting to seed data to MockAPI...');

    try {
        // Delete all existing data first (optional)
        const existingData = await axios.get(API_URL);
        for (const item of existingData.data) {
            await axios.delete(`${API_URL}/${item.id}`);
            console.log(`🗑️  Deleted existing orchid: ${item.name}`);
        }

        // Add new data
        for (const orchid of orchidsData) {
            const response = await axios.post(API_URL, orchid);
            console.log(`✅ Added: ${response.data.name}`);
        }

        console.log('🎉 Seeding completed successfully!');
    } catch (error) {
        console.error('❌ Error seeding data:', error.message);
    }
}

seedData();
