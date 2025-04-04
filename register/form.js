// Funktion zum Umschalten der Felder für Erziehungsberechtigte
document.getElementById('not-18-checkbox').addEventListener('change', function () {
    const guardianFields = document.getElementById('guardian-fields');
    guardianFields.style.display = this.checked ? 'block' : 'none';
});

// Funktion zum Anzeigen der Felder für Erziehungsberechtigte
document.getElementById('not-18-button').addEventListener('click', function () {
    const guardianFields = document.getElementById('guardian-fields');
    guardianFields.style.display = 'block';
});