import React from 'react';
import './Resources.css';
import { Download, ExternalLink, FileText } from 'lucide-react';

const resources = [
    { title: "Tax Calendar 2024-25", description: "Important deadlines for ITR and GST filings.", type: "PDF" },
    { title: "Capital Gains Worksheet", description: "Calculate your tax liability on property sales.", type: "XLS" },
    { title: "GST Quick Reference Guide", description: "Standard rates and HSN code basics.", type: "PDF" }
];

const Resources = () => {
    return (
        <section id="resources" className="resources-section section-padding">
            <div className="container">
                <h2 className="section-title text-center">Resources & Downloads</h2>
                <div className="resources-grid">
                    {resources.map((resource, index) => (
                        <div className="resource-card" key={index}>
                            <div className="resource-icon"><FileText /></div>
                            <div className="resource-info">
                                <h3>{resource.title}</h3>
                                <p>{resource.description}</p>
                                <div className="resource-meta">
                                    <span className="file-type">{resource.type}</span>
                                    <button className="download-link">
                                        Download <Download size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
