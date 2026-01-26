import React from 'react';

const Terminal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="h-48 bg-vscode-bg border-t border-vscode-border flex flex-col shrink-0">
            <div className="flex justify-between items-center px-4 py-1 bg-vscode-sidebar border-b border-vscode-border">
                <div className="flex gap-6 text-xs text-vscode-textDark font-bold uppercase">
                    <span className="cursor-pointer hover:text-vscode-text border-b border-transparent hover:border-vscode-text pb-0.5">Problems</span>
                    <span className="cursor-pointer hover:text-vscode-text border-b border-transparent hover:border-vscode-text pb-0.5">Output</span>
                    <span className="cursor-pointer hover:text-vscode-text border-b border-transparent hover:border-vscode-text pb-0.5">Debug Console</span>
                    <span className="cursor-pointer text-vscode-text border-b border-vscode-text pb-0.5">Terminal</span>
                </div>
                <div className="flex items-center gap-2">
                    {/* Close button fake */}
                </div>
            </div>

            <div className="flex-1 p-2 font-mono text-sm overflow-y-auto custom-scrollbar">
                <div className="text-vscode-text">
                    <p>
                        <span className="text-green-500">➜</span>
                        <span className="text-sky-400 font-bold ml-2">portfolio</span>
                        <span className="text-pink-400 ml-2">git:(</span>
                        <span className="text-red-500 font-bold">main</span>
                        <span className="text-pink-400">)</span>
                        <span className="text-yellow-400 ml-2">✗</span>
                        <span className="ml-2">node index.js</span>
                    </p>
                    <p className="text-gray-400 my-1">Starting development server...</p>
                    <p className="text-green-500">✔ Server running at http://localhost:3000</p>
                    <p className="mt-2 text-gray-400">Type 'help' for a list of commands.</p>
                    <div className="flex items-center mt-1">
                        <span className="text-green-500">➜</span>
                        <span className="text-sky-400 font-bold ml-2">portfolio</span>
                        <input
                            type="text"
                            className="bg-transparent border-none outline-none text-vscode-text ml-2 w-full focus:ring-0"
                            placeholder="..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
