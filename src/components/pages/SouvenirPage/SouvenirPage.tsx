
import React from 'react';
import { useTranslation } from 'react-i18next';
import './SouvenirPage.css';

const SouvenirPage: React.FC = () => {
    const { t } = useTranslation();

    const mockItems = [
        { id: 1, name: 'T-Shirt Logo', price: '200,000 VND', desc: 'Cotton T-Shirt with limited edition logo.' },
        { id: 2, name: 'Notebook', price: '50,000 VND', desc: 'Beautiful notebook for your journals.' },
        { id: 3, name: 'Tote Bag', price: '120,000 VND', desc: 'Eco-friendly tote bag for daily use.' },
        { id: 4, name: 'Mug', price: '80,000 VND', desc: 'Ceramic mug with inspirational quotes.' },
    ];

    return (
        <div className="souvenir-page">
            <div className="souvenir-container">
                <div className="souvenir-header">
                    <h1 className="souvenir-title">{t('souvenirPage.title')}</h1>
                    <p className="souvenir-subtitle">{t('souvenirPage.subtitle')}</p>
                </div>

                <div className="souvenir-grid">
                    {mockItems.map((item) => (
                        <div key={item.id} className="souvenir-card">
                            <div className="card-image-placeholder">
                                <i className="fas fa-gift"></i>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{item.name}</h3>
                                <div className="card-price">{item.price}</div>
                                <p className="card-desc">{item.desc}</p>
                                <button className="buy-btn">Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SouvenirPage;
