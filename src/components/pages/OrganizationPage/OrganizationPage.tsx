
import React from 'react';
import { useTranslation } from 'react-i18next';
import './OrganizationPage.css';

interface NodeData {
    role: string;
    name: string;
    children?: NodeData[];
}

const TreeNode: React.FC<{ node: NodeData; depth: number }> = ({ node, depth }) => {
    // Helper to get initials
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <li>
            <div
                className="node-card"
                style={{ '--delay': `${depth * 0.4}s` } as React.CSSProperties}
            >
                <div className="node-avatar">
                    {getInitials(node.name)}
                </div>
                <div className="node-info">
                    <span className="node-role">{node.role}</span>
                    <span className="node-name">{node.name}</span>
                </div>
            </div>
            {node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} depth={depth + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
};

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
                        <TreeNode
                            node={{
                                role: 'Board of Directors',
                                name: 'Nguyen Hien Foundation',
                                children: [
                                    {
                                        role: 'Director',
                                        name: 'Nguyen Van A',
                                        children: [
                                            { role: 'Finance', name: 'Tran Thi B' },
                                            { role: 'Operations', name: 'Le Van C' }
                                        ]
                                    },
                                    {
                                        role: 'Sponsorship',
                                        name: 'Pham Thi D',
                                        children: [
                                            { role: 'Marketing', name: 'Hoang Van E' }
                                        ]
                                    }
                                ]
                            }}
                            depth={0}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OrganizationPage;
