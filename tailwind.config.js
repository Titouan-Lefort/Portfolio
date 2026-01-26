/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                vscode: {
                    bg: '#1e1e1e',       // Editor background
                    sidebar: '#252526',  // Sidebar background
                    activity: '#333333', // Activity bar background (leftmost)
                    status: '#007acc',   // Status bar (blue)
                    header: '#3c3c3c',   // Section headers (not used much? maybe title bar)
                    tabInactive: '#2d2d2d',
                    tabActive: '#1e1e1e',
                    text: '#cccccc',
                    textDark: '#858585', // Comments/secondary
                    hover: '#2a2d2e',    // List item hover
                    listHover: '#2a2d2e',
                    accent: '#007acc',   // Focus/Selection
                    border: '#1E1E1E',   // Borders (sometimes darker)
                    split: '#000000',    // Split borders
                }
            },
            fontFamily: {
                mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
                sans: ['"Segoe UI"', 'Inter', 'sans-serif']
            }
        },
    },
    plugins: [],
}
