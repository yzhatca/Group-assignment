// IIFE -- Immediately Invoked Function Expression
(function() {
    function Start()
    {
        console.log("App started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure you want to delete this item?")) {
                    event.preventDefault();
                    window.location.assign('/survey-list');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();