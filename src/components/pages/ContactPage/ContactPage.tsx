
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactPage.css';
import contactBg from '../../../assets/contact-illustration.png';

const ContactPage: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would implement the mail sending logic
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo)');
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <h1 className="contact-title">{t('contactPage.title')}</h1>
                    <p className="contact-subtitle">{t('contactPage.subtitle')}</p>
                </div>

                <div className="contact-content">
                    <div className="contact-form-section">
                        <div className="form-header">
                            <h2>{t('contactPage.title')}</h2>
                            <p>{t('contactPage.subtitle')}</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">
                                        {t('contactPage.form.firstName')} <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-input"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter first name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        {t('contactPage.form.lastName')} <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-input"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter last name"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    {t('contactPage.form.email')} <span className="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    {t('contactPage.form.subject')} <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-input"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter subject"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    {t('contactPage.form.message')} <span className="required">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    className="form-textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                {t('contactPage.form.submit')}
                            </button>
                        </form>
                    </div>

                    <div
                        className="contact-image-section"
                        style={{ backgroundImage: `url(${contactBg})` }}
                    >
                        <div className="contact-image-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
