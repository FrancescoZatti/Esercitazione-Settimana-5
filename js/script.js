console.log(window)

document.addEventListener("DOMContentLoaded", function() {
    // Seleziona tutti gli input di tipo radio all'interno di .radio-selection
    const radioButtons = document.querySelectorAll('.radio-selection input[type="radio"]');
    
    // Aggiungi un listener a ciascun radio button
    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        // Rimuovi la classe 'hover' da tutti gli elementi .radio-selection
        document.querySelectorAll('.radio-selection').forEach(function(element) {
          element.classList.remove('hover');
        });

        // Aggiungi la classe 'hover' solo all'elemento contenitore attuale se il radio button è selezionato
        if (this.checked) {
          this.closest('.radio-selection').classList.add('hover');
        }
      });

      radioButton.addEventListener('mouseover', function() {
        // Aggiungi la classe 'hover' solo all'elemento contenitore attuale quando il mouse passa sopra
        this.closest('.radio-selection').classList.add('hover');
      });

      radioButton.addEventListener('mouseout', function() {
        // Rimuovi la classe 'hover' dall'elemento contenitore attuale quando il mouse esce
        this.closest('.radio-selection').classList.remove('hover');
      });
    });
  });