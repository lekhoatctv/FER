import { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

const API_URL = 'https://69039d30d0f10a340b2518ee.mockapi.io/Orchids';

function TestAPI() {
    const [status, setStatus] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const testConnection = async () => {
        setLoading(true);
        setStatus('Testing connection...');
        try {
            const response = await axios.get(API_URL);
            setStatus('✅ SUCCESS! Connected to MockAPI');
            setData(response.data);
        } catch (error) {
            setStatus(`❌ ERROR: ${error.message}`);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    const addSampleData = async () => {
        setLoading(true);
        setStatus('Adding sample orchid...');
        try {
            const sampleOrchid = {
                name: 'Phalaenopsis Amabilis',
                origin: 'Vietnam',
                color: 'White',
                rating: 4.8,
                category: 'Phalaenopsis',
                isSpecial: true,
                isNatural: true,
                image: 'https://images.unsplash.com/photo-1583119208909-870d28b3e1e9?w=500'
            };
            const response = await axios.post(API_URL, sampleOrchid);
            setStatus('✅ Sample data added successfully!');
            setData(response.data);
        } catch (error) {
            setStatus(`❌ ERROR: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', background: '#f5f5f5', paddingTop: '70px' }}>
            <Navigation />
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
                <div style={{ background: 'white', padding: '30px', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <h1 style={{ color: '#333', marginBottom: '20px' }}>🧪 Test MockAPI Connection</h1>

                    <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '4px', marginBottom: '20px' }}>
                        <p style={{ margin: 0, fontFamily: 'monospace', fontSize: '14px' }}>
                            API URL: <strong>{API_URL}</strong>
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                        <button
                            onClick={testConnection}
                            disabled={loading}
                            style={{
                                padding: '10px 20px',
                                background: '#333',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            {loading ? 'Testing...' : 'Test Connection'}
                        </button>

                        <button
                            onClick={addSampleData}
                            disabled={loading}
                            style={{
                                padding: '10px 20px',
                                background: '#555',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            {loading ? 'Adding...' : 'Add Sample Data'}
                        </button>
                    </div>

                    {status && (
                        <div style={{
                            padding: '15px',
                            background: status.includes('SUCCESS') || status.includes('✅') ? '#e8f5e9' : '#ffebee',
                            border: `1px solid ${status.includes('SUCCESS') || status.includes('✅') ? '#4caf50' : '#f44336'}`,
                            borderRadius: '4px',
                            marginBottom: '20px',
                            fontSize: '14px'
                        }}>
                            {status}
                        </div>
                    )}

                    {data && (
                        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '4px', overflow: 'auto' }}>
                            <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Response Data:</h3>
                            <pre style={{ margin: 0, fontSize: '12px', fontFamily: 'monospace' }}>
                                {JSON.stringify(data, null, 2)}
                            </pre>
                        </div>
                    )}

                    <div style={{ marginTop: '30px', padding: '15px', background: '#f0f0f0', borderRadius: '4px' }}>
                        <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>📝 Instructions:</h3>
                        <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8' }}>
                            <li>Click <strong>"Test Connection"</strong> to verify MockAPI is working</li>
                            <li>If successful, click <strong>"Add Sample Data"</strong> to add a test orchid</li>
                            <li>Go to <strong>Dashboard</strong> to see the data</li>
                            <li>Try CRUD operations (Add, Edit, Delete)</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestAPI;
