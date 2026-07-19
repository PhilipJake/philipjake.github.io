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
