
import React from 'react';
import { useTranslation } from 'react-i18next';
import './OrganizationPage.css';

const OrganizationPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="organization-page">
            <div className="org-container">
                <div className="org-header">
                    <h1 className="org-title">{t('organizationPage.title')}</h1>
                    <p className="org-subtitle">{t('organizationPage.subtitle')}</p>
                </div>

                <div className="tree">
                    <ul>
                        <li>
                            <div className="node-card">
                                <span className="node-role">Board of Directors</span>
                                <span className="node-name">Nguyen Hien Foundation</span>
                            </div>
                            <ul>
                                <li>
                                    <div className="node-card">
                                        <span className="node-role">Director</span>
                                        <span className="node-name">Nguyen Van A</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="node-card">
                                                <span className="node-role">Finance</span>
                                                <span className="node-name">Tran Thi B</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="node-card">
                                                <span className="node-role">Operations</span>
                                                <span className="node-name">Le Van C</span>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="node-card">
                                        <span className="node-role">Sponsorship</span>
                                        <span className="node-name">Pham Thi D</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="node-card">
                                                <span className="node-role">Marketing</span>
                                                <span className="node-name">Hoang Van E</span>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OrganizationPage;
