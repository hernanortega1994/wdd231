
const STORAGE_KEY = "reviewsCompleted";


let currentCount = parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0;


currentCount += 1;
localStorage.setItem(STORAGE_KEY, currentCount);

document.getElementById("reviewCounter").textContent = currentCount;