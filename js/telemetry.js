// ==========================================
// DYNAMIC HUD DIAL TEXT CYCLING MODULE
// ==========================================
const stackArray = [
    { name: "< HTML >",  type: "CORE_STACK" },
    { name: "< CSS >",   type: "STYLING_CORE" },
    { name: "< JS >",    type: "LOGIC_ENGINE" },
    { name: "< PHP >",   type: "BACKEND_NODE" },
    { name: "< MySQL >", type: "DB_INFRA" },
    { name: "< C# >",    type: "APP_ARCH" },
    { name: "< C >",     type: "LOW_LEVEL" },
    { name: "< C++ >",   type: "SYS_ENGINE" }
];

let currentStackIndex = 0;
const CYCLE_DURATION = 60000;

function cycleDialText() {
    const langElement = document.getElementById('cycleLang');
    const typeElement = document.getElementById('cycleType');
    
    if (langElement && typeElement) {
        langElement.style.opacity = 0;
        typeElement.style.opacity = 0;
        langElement.style.transition = "opacity 0.25s ease";
        typeElement.style.transition = "opacity 0.25s ease";
        
        setTimeout(() => {
            currentStackIndex = (currentStackIndex + 1) % stackArray.length;
            langElement.innerText = stackArray[currentStackIndex].name;
            typeElement.innerText = stackArray[currentStackIndex].type;
            langElement.style.opacity = 1;
            typeElement.style.opacity = 1;
        }, 250);
    }
}
setInterval(cycleDialText, CYCLE_DURATION);


// ==========================================
// INTERACTIVE HUD PROJECT GOAL SLIDER ENGINE
// ==========================================
let currentGoalSlide = 1;

const slide1 = document.getElementById('goalSlide1');
const slide2 = document.getElementById('goalSlide2');
const badgeNode = document.querySelector('.index-badge-node');
const prevBtn = document.getElementById('prevGoalBtn');
const nextBtn = document.getElementById('nextGoalBtn');

function updateGoalSlider() {
    if (currentGoalSlide === 1) {
        if (slide1) slide1.style.display = 'block';
        if (slide2) slide2.style.display = 'none';
        if (badgeNode) badgeNode.innerText = 'STAGE // 01';
    } else {
        if (slide1) slide1.style.display = 'none';
        if (slide2) slide2.style.display = 'block';
        if (badgeNode) badgeNode.innerText = 'STAGE // 02';
    }
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentGoalSlide = currentGoalSlide === 1 ? 2 : 1;
        updateGoalSlider();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentGoalSlide = currentGoalSlide === 1 ? 2 : 1;
        updateGoalSlider();
    });
}


// ==========================================
// INTERACTIVE PROJECT PREVIEWS IMAGE & LIGHTBOX MODAL ENGINE
// ==========================================
const projectArray = [
    { 
        title: "System Checker", 
        previewSrc: "images/previews/system_checker.png",
        fullSrc: "images/screenshots/system_checker.png"
    },
    { 
        title: "WLMT (Windows License Maintenance Tool)", 
        previewSrc: "images/previews/wlmt.png",
        fullSrc: "images/screenshots/wlmt.png"
    }
];

let currentProjectIndex = 0;

const wireframeTitle = document.getElementById('wireframeTitle');
const projectPreviewImg = document.getElementById('projectPreviewImg');
const prevProjectBtn = document.getElementById('prevProjectBtn');
const nextProjectBtn = document.getElementById('nextProjectBtn');

const hudModal = document.getElementById('hudImageModal');
const modalTargetImg = document.getElementById('modalTargetImg');

function updateProjectWireframe() {
    if (wireframeTitle && projectPreviewImg) {
        wireframeTitle.style.opacity = 0.2;
        projectPreviewImg.style.opacity = 0.2;
        
        setTimeout(() => {
            const project = projectArray[currentProjectIndex];
            wireframeTitle.innerText = project.title;
            projectPreviewImg.src = project.previewSrc;
            wireframeTitle.style.opacity = 1;
            projectPreviewImg.style.opacity = 1;
        }, 200);
    }
}

if (projectPreviewImg) {
    projectPreviewImg.addEventListener('click', () => {
        if (hudModal && modalTargetImg) {
            modalTargetImg.src = projectArray[currentProjectIndex].fullSrc;
            hudModal.style.display = 'flex';
        }
    });
}

function closeHudModal() {
    const modal = document.getElementById('hudImageModal');
    if (modal) modal.style.display = 'none';
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeHudModal();
});

if (hudModal) {
    hudModal.addEventListener('click', (e) => {
        if (e.target === hudModal) closeHudModal();
    });
}

if (nextProjectBtn) {
    nextProjectBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex + 1) % projectArray.length;
        updateProjectWireframe();
    });
}

if (prevProjectBtn) {
    prevProjectBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex - 1 + projectArray.length) % projectArray.length;
        updateProjectWireframe();
    });
}
