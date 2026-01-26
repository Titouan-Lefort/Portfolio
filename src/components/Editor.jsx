import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { X } from 'lucide-react';
import { clsx } from 'clsx';

const Editor = ({ openFiles, activeFile, onTabClick, onCloseTab }) => {
    if (!activeFile) {
        return (
            <div className="flex-1 bg-vscode-bg flex items-center justify-center text-vscode-textDark">
                <div className="flex flex-col items-center">
                    <p className="mb-2">Utilisez l'explorateur pour ouvrir un fichier</p>
                    <div className="text-sm">
                        <p>Show All Commands <span className="bg-vscode-sidebar px-1 py-0.5 rounded text-xs ml-2">F1</span></p>
                        <p>Go to File <span className="bg-vscode-sidebar px-1 py-0.5 rounded text-xs ml-2">Ctrl+P</span></p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col h-full bg-vscode-bg overflow-hidden relative">
            {/* Tabs */}
            <div className="flex bg-vscode-tab w-full overflow-x-auto border-b border-black custom-scrollbar h-9 shrink-0">
                {openFiles.map((file) => (
                    <div
                        key={file.name}
                        onClick={() => onTabClick(file)}
                        className={clsx(
                            "flex items-center px-3 py-1.5 min-w-[120px] max-w-[200px] border-r border-vscode-border cursor-pointer group text-sm select-none h-full",
                            activeFile.name === file.name
                                ? "bg-vscode-bg text-white border-t-2 border-t-vscode-blue"
                                : "bg-vscode-tabInactive text-vscode-textDark hover:bg-vscode-bg/50"
                        )}
                    >
                        <span className="truncate flex-1 mr-2">{file.name}</span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onCloseTab(file);
                            }}
                            className={clsx(
                                "p-0.5 rounded-sm hover:bg-vscode-sidebar opacity-0 group-hover:opacity-100",
                                activeFile.name === file.name && "opacity-100"
                            )}
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Breadcrumbs (Fake) */}
            <div className="h-6 flex items-center px-4 text-xs text-vscode-textDark bg-vscode-bg">
                <span>portfolio-app</span>
                <span className="mx-1">›</span>
                <span>src</span>
                <span className="mx-1">›</span>
                <span>{activeFile.name}</span>
            </div>

            {/* Editor Area */}
            <div className="flex-1 overflow-auto relative custom-scrollbar">
                <SyntaxHighlighter
                    language={activeFile.language}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '20px',
                        background: 'transparent',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        fontFamily: '"Fira Code", monospace',
                        minHeight: '100%',
                    }}
                    showLineNumbers={true}
                    lineNumberStyle={{ minWidth: '3em', paddingRight: '1em', color: '#858585', textAlign: 'right' }}
                >
                    {activeFile.content}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default Editor;
