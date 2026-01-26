import React, { useState } from 'react';
import {
    Files,
    Search,
    GitGraph,
    Mail,
    Settings,
    User,
    Github,
    Code2
} from 'lucide-react';
import { clsx } from 'clsx';

const ActivityBar = ({ activeTab, setActiveTab }) => {
    const icons = [
        { id: 'explorer', icon: Files, label: 'Explorer' },
        { id: 'search', icon: Search, label: 'Search' },
        { id: 'git', icon: GitGraph, label: 'Source Control' },
        { id: 'contact', icon: Mail, label: 'Contact' },
    ];

    const bottomIcons = [
        { id: 'profile', icon: User, label: 'Accounts' },
        { id: 'settings', icon: Settings, label: 'Manage' },
    ];

    return (
        <div className="w-12 h-screen bg-vscode-activity flex flex-col justify-between items-center py-2 shrink-0 z-20">
            <div className="flex flex-col gap-2 w-full">
                {icons.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={clsx(
                            "w-12 h-12 flex justify-center items-center relative group hover:bg-vscode-hover opacity-60 hover:opacity-100 transition-all",
                            activeTab === item.id && "opacity-100 border-l-2 border-vscode-blue"
                        )}
                        title={item.label}
                    >
                        <item.icon size={24} className={clsx(activeTab === item.id ? "text-white" : "text-vscode-text")} />
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-2 w-full">
                {bottomIcons.map((item) => (
                    <button
                        key={item.id}
                        className="w-12 h-12 flex justify-center items-center hover:bg-vscode-hover opacity-60 hover:opacity-100 transition-all"
                        title={item.label}
                    >
                        <item.icon size={24} className="text-vscode-text" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ActivityBar;
