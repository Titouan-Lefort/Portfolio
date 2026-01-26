import React, { useState } from 'react';
import { ChevronRight, ChevronDown, FileJson, FileCode, FileType, FileText } from 'lucide-react';
import { clsx } from 'clsx';
import { files } from '../data/fileSystem';

const FileIcon = ({ name, className }) => {
    if (name.endsWith('.js')) return <FileCode size={16} className={clsx("text-yellow-400", className)} />;
    if (name.endsWith('.json')) return <FileJson size={16} className={clsx("text-yellow-200", className)} />;
    if (name.endsWith('.css')) return <FileType size={16} className={clsx("text-blue-400", className)} />;
    if (name.endsWith('.md')) return <FileText size={16} className={clsx("text-blue-200", className)} />;
    return <FileText size={16} className={clsx("text-gray-400", className)} />;
};

const Sidebar = ({ isOpen, activeFile, onFileClick }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="w-60 bg-vscode-sidebar flex flex-col h-full border-r border-vscode-bg shrink-0">
            <div className="h-8 px-4 flex items-center text-xs text-vscode-text font-bold uppercase tracking-wider">
                Explorer
            </div>

            <div className="flex-1 overflow-y-auto">
                <div className="w-full">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full flex items-center px-1 py-1 text-vscode-text font-bold hover:bg-vscode-listHover focus:outline-none"
                    >
                        {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        <span className="ml-1 text-xs font-bold uppercase truncate">Portfolio-App</span>
                    </button>

                    {isExpanded && (
                        <div className="flex flex-col">
                            {files.map((file) => (
                                <button
                                    key={file.name}
                                    onClick={() => onFileClick(file)}
                                    className={clsx(
                                        "flex items-center px-4 py-1 gap-1.5 cursor-pointer text-sm w-full text-left hover:bg-vscode-listHover transition-colors focus:outline-none",
                                        activeFile?.name === file.name && "bg-vscode-listHover text-white focus:bg-vscode-blue/20"
                                    )}
                                >
                                    <FileIcon name={file.name} />
                                    <span className={clsx(
                                        "truncate",
                                        activeFile?.name === file.name ? "text-white" : "text-vscode-text"
                                    )}>{file.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
