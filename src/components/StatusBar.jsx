import React from 'react';
import { GitBranch, XCircle, AlertTriangle, Bell, Check } from 'lucide-react';

const StatusBar = () => {
    return (
        <div className="h-6 bg-vscode-status flex items-center justify-between px-2 text-white text-xs select-none shrink-0 z-30">
            <div className="flex items-center gap-4 h-full">
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 cursor-pointer h-full">
                    <GitBranch size={12} />
                    <span>main*</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 cursor-pointer h-full">
                    <XCircle size={12} />
                    <span>0</span>
                    <AlertTriangle size={12} />
                    <span>0</span>
                </div>
            </div>

            <div className="flex items-center gap-4 h-full">
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 cursor-pointer h-full">
                    <span>Ln 12, Col 42</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 cursor-pointer h-full">
                    <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 cursor-pointer h-full">
                    <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 cursor-pointer h-full">
                    <Bell size={12} />
                </div>
            </div>
        </div>
    );
};

export default StatusBar;
