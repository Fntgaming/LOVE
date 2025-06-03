function saveDate() {
  const dateInput = document.getElementById("loveDate").value;
  if (dateInput) {
    localStorage.setItem("loveDate", dateInput);
    showCounter();
  }
}

function resetDate() {
  localStorage.removeItem("loveDate");
  document.getElementById("input-section").classList.remove("hidden");
  document.getElementById("counter-section").classList.add("hidden");
}

function showCounter() {
  const storedDate = localStorage.getItem("loveDate");
  if (storedDate) {
    const loveDate = new Date(storedDate);
    const today = new Date();
    const diff = today - loveDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("days").textContent = days;

    document.getElementById("input-section").classList.add("hidden");
    document.getElementById("counter-section").classList.remove("hidden");
  }
}

window.onload = showCounter;
