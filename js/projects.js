// ==========================================================================
// CYBER HUD ANTI-TAMPER SECURITY PROTOCOLS
// ==========================================================================

// 1. Disable Right-Click context menus across the console environment
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// 2. Intercept keyboard overrides (Blocks F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
document.addEventListener('keydown', (e) => {
    // Block F12 Function Key
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Block Ctrl+Shift+I (Inspect) & Ctrl+Shift+J (Console) & Ctrl+Shift+C (Element picker)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
    }
    // Block Command+Option+I on Mac systems
    if (e.metaKey && e.altKey && e.key === 'i') {
        e.preventDefault();
    }
    // Block Ctrl+U (View Page Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
    }
});

// 3. INFINITE LOOP DEBUGGER TRICK
// If an advanced user manually opens developer tools from the browser menu, 
// this endless debugger loop will trigger, pausing and freezing their console tab.
setInterval(() => {
    debugger;
}, 100);


// ==========================================================================
// DYNAMIC DUAL/TRI-LASER PERIMETER SPEED NORMALIZATION ENGINE
// ==========================================================================
function syncProjectLasers() {
    const paths = document.querySelectorAll('.laser-track');
    
    paths.forEach(path => {
        // Instantly grabs the exact absolute physical perimeter size of each wide fluid card
        const totalLength = path.getTotalLength();
        
        // Divides the fluid path layout cleanly into 3 lines and 3 gaps
        const singleSection = totalLength / 3;
        const laserLine = singleSection * 0.35; // Adjust the 0.35 to make lines longer or shorter!
        const laserGap = singleSection - laserLine;
        
        // Pushes the exact synchronized math straight into the element path variables
        path.style.strokeDasharray = `${laserLine} ${laserGap} ${laserLine} ${laserGap} ${laserLine} ${laserGap}`;
        path.style.setProperty('--perimeter-length', totalLength);
    });
}

// Fire calculation loop sequence on page load initialization
window.addEventListener('DOMContentLoaded', syncProjectLasers);

// Recalculates dynamically if viewport scales or screen size resizes
window.addEventListener('resize', syncProjectLasers);
