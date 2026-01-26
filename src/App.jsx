import React, { useState, useEffect } from 'react';
import ActivityBar from './components/ActivityBar';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';
import Terminal from './components/Terminal';
import { files } from './data/fileSystem';

function App() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeFile, setActiveFile] = useState(files[0]); // Default to first file
  const [openFiles, setOpenFiles] = useState([files[0]]);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  // Toggle sidebar when clicking activity bar icons
  useEffect(() => {
    // If clicking a different tab than explorer, we might close sidebar (or show different sidebar content)
    // For now, only 'explorer' has a sidebar implementation.
    if (activeTab === 'explorer') {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, [activeTab]);

  const handleFileClick = (file) => {
    // Check if file is already open
    if (!openFiles.find(f => f.name === file.name)) {
      setOpenFiles((prev) => [...prev, file]);
    }
    setActiveFile(file);

    // On mobile, close sidebar after selection
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleCloseTab = (file) => {
    const newOpenFiles = openFiles.filter(f => f.name !== file.name);
    setOpenFiles(newOpenFiles);

    if (activeFile && activeFile.name === file.name) {
      if (newOpenFiles.length > 0) {
        setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
      } else {
        setActiveFile(null);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-vscode-bg text-vscode-text overflow-hidden font-sans">
      {/* Main/Top Content Area */}
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {isSidebarOpen && activeTab === 'explorer' && (
          <Sidebar
            isOpen={isSidebarOpen}
            activeFile={activeFile}
            onFileClick={handleFileClick}
          />
        )}

        <div className="flex flex-col flex-1 min-w-0 bg-vscode-bg">
          <Editor
            openFiles={openFiles}
            activeFile={activeFile}
            onTabClick={setActiveFile}
            onCloseTab={handleCloseTab}
          />
          <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
        </div>
      </div>

      <StatusBar />
    </div>
  );
}

export default App;
