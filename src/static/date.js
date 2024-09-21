function getCurrentDateTime() {
    const now = new Date();
    return now.toString();
}

document.addEventListener("DOMContentLoaded", () => {
    const currentDate = getCurrentDateTime();
    
    document.getElementById('date-time').textContent = "Текущая дата и время: " + currentDate;
});
