// Funktion för att visa tooltip när musen hovrar över elementet
function showTooltip(evt, text) {
    var tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.left = evt.pageX + 10 + 'px';
    tooltip.style.top = evt.pageY + 10 + 'px';
}

// Funktion för att dölja tooltip när musen lämnar elementet
function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}

