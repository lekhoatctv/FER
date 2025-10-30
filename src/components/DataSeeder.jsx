import { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import './DataSeeder.css';

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
    },
    {
        name: "Paphiopedilum callosum",
        image: "https://images.unsplash.com/photo-1609205743073-72c67dc5c7be?w=500&h=400&fit=crop",
        origin: "Vietnam, Thailand",
        color: "Green, Brown",
        isSpecial: true,
        rating: 4.5,
        isNatural: true,
        category: "Paphiopedilum"
    },
    {
        name: "Epidendrum ibaguense",
        image: "https://images.unsplash.com/photo-1617781047781-59a2cfbb48d3?w=500&h=400&fit=crop",
        origin: "Ecuador, Colombia",
        color: "Orange, Red",
        isSpecial: false,
        rating: 4.1,
        isNatural: true,
        category: "Epidendrum"
    }
];

function DataSeeder() {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    const addLog = (message, type = 'info') => {
        setLogs(prev => [...prev, { message, type, time: new Date().toLocaleTimeString() }]);
    };

    const testConnection = async () => {
        setLoading(true);
        setLogs([]);
        addLog('Testing API connection...');

        try {
            const response = await axios.get(API_URL);
            addLog(`✅ Connection successful! Found ${response.data.length} orchids`, 'success');
            setStatus('Connected');
        } catch (error) {
            addLog(`❌ Connection failed: ${error.message}`, 'error');
            setStatus('Failed');
        } finally {
            setLoading(false);
        }
    };

    const seedData = async () => {
        setLoading(true);
        setLogs([]);
        addLog('🌱 Starting to seed data...');

        try {
            // Get existing data
            const existingData = await axios.get(API_URL);
            addLog(`Found ${existingData.data.length} existing orchids`);

            // Delete existing data
            for (const item of existingData.data) {
                await axios.delete(`${API_URL}/${item.id}`);
                addLog(`🗑️ Deleted: ${item.name}`, 'warning');
            }

            // Add new data
            for (const orchid of orchidsData) {
                const response = await axios.post(API_URL, orchid);
                addLog(`✅ Added: ${response.data.name}`, 'success');
            }

            addLog('🎉 Seeding completed successfully!', 'success');
            setStatus('Seeded');
        } catch (error) {
            addLog(`❌ Error: ${error.message}`, 'error');
            setStatus('Error');
        } finally {
            setLoading(false);
        }
    };

    const clearData = async () => {
        if (!window.confirm('Are you sure you want to delete all data?')) {
            return;
        }

        setLoading(true);
        setLogs([]);
        addLog('🗑️ Clearing all data...');

        try {
            const response = await axios.get(API_URL);
            for (const item of response.data) {
                await axios.delete(`${API_URL}/${item.id}`);
                addLog(`🗑️ Deleted: ${item.name}`, 'warning');
            }
            addLog('✅ All data cleared!', 'success');
            setStatus('Cleared');
        } catch (error) {
            addLog(`❌ Error: ${error.message}`, 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="seeder-container">
            <Navigation />
            <div className="seeder-content">
                <h1>🛠️ Data Seeder Tool</h1>
                <p className="seeder-subtitle">Manage MockAPI data for Lab 6</p>

                <div className="seeder-info">
                    <strong>API Endpoint:</strong> {API_URL}
                    {status && <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>}
                </div>

                <div className="seeder-actions">
                    <button onClick={testConnection} disabled={loading} className="btn-test">
                        🔍 Test Connection
                    </button>
                    <button onClick={seedData} disabled={loading} className="btn-seed">
                        🌱 Seed Data ({orchidsData.length} items)
                    </button>
                    <button onClick={clearData} disabled={loading} className="btn-clear">
                        🗑️ Clear All Data
                    </button>
                </div>

                {loading && <div className="loading-spinner">⏳ Processing...</div>}

                {logs.length > 0 && (
                    <div className="logs-container">
                        <h3>📝 Logs</h3>
                        <div className="logs">
                            {logs.map((log, index) => (
                                <div key={index} className={`log-item log-${log.type}`}>
                                    <span className="log-time">{log.time}</span>
                                    <span className="log-message">{log.message}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="seeder-help">
                    <h3>📖 Instructions:</h3>
                    <ol>
                        <li><strong>Test Connection:</strong> Verify that the API endpoint is working</li>
                        <li><strong>Seed Data:</strong> Clear existing data and populate with sample orchids</li>
                        <li><strong>Clear All Data:</strong> Remove all orchids from the database</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default DataSeeder;
