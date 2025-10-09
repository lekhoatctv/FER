import { Link } from 'react-router-dom';
import './OrchidCard.css';

const OrchidCard = ({ orchid, onDetailClick }) => {
    return (
        <div className="orchid-card">
            <div className="orchid-image-container">
                <img
                    src={orchid.image}
                    alt={orchid.name}
                    className="orchid-image"
                    loading="lazy"
                />
                {orchid.isSpecial && (
                    <div className="special-badge">⭐ Special</div>
                )}
            </div>

            <div className="orchid-info">
                <h3 className="orchid-name">{orchid.name}</h3>
                <p className="orchid-category">{orchid.category}</p>

                <div className="orchid-details">
                    <div className="detail-item">
                        <span className="detail-label">Origin:</span>
                        <span className="detail-value">{orchid.origin}</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Color:</span>
                        <span className="detail-value">{orchid.color}</span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Rating:</span>
                        <span className="detail-value">
                            ⭐ {orchid.rating}/5.0
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Type:</span>
                        <span className="detail-value">
                            {orchid.isNatural ? '🌿 Natural' : '🧪 Hybrid'}
                        </span>
                    </div>
                </div>

                <div className="card-buttons">
                    <button
                        className="detail-button modal-btn"
                        onClick={() => onDetailClick(orchid)}
                    >
                        Quick View
                    </button>
                    <Link
                        to={`/detail/${orchid.id}`}
                        className="detail-button detail-link"
                    >
                        Full Details
                    </Link>
                </div>
            </div>
        </div>
    );
}; export default OrchidCard;