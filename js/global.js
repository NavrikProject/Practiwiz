/*header start*/

document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) { // Change 100 to whatever scroll position you prefer
        header.classList.add('headeractive');
      } else {
        header.classList.remove('headeractive');
      }
    });
});

/*header end*/






/*responsive navbar start*/

const navToggle = document.querySelector("#nav-toggler");

document.addEventListener("DOMContentLoaded", function() {    
    const navExpand = document.querySelector("#navbarSupportedContent");

    navToggle.addEventListener("click", function() {
        if (navExpand.classList.contains("navbarmenucollapse")) {
            navExpand.classList.remove("navbarmenucollapse");
        } else {
            navExpand.classList.add("navbarmenucollapse");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {    
    const barIcon = document.querySelector("#bar-icon");   
    const closeIcon = document.querySelector("#close-mark-icon");

    navToggle.addEventListener("click", function() {
        if (barIcon.classList.contains("navbar-toggler-icon")) {
            barIcon.classList.remove("navbar-toggler-icon") & closeIcon.classList.remove("d-none");
        } else {
            barIcon.classList.add("navbar-toggler-icon") & closeIcon.classList.add("d-none");
        }
    });
});

/*responsive navbar end*/







/*autosuggestion searchbar start*/

   $(document).ready(function(){
        // Dummy autosuggestions
        var autosuggestions = ["Business Analyst", "Data Scientist", "Data Analyst", "Business Professional"];
        
        // Function to show autosuggestions
        function showAutosuggestions() {
            var inputVal = $('#myInput').val().toLowerCase();
            var suggestions = autosuggestions.filter(function(suggestion) {
                return suggestion.toLowerCase().startsWith(inputVal);
            });
            var suggestionsHTML = '';
            suggestions.forEach(function(suggestion) {
                suggestionsHTML += '<div class="suggestion">' + suggestion + '</div>';
            });
            $('#autosuggestions').html(suggestionsHTML);
            $('#autosuggestions').show();
        }

        // Show autosuggestions when input is clicked and something is typed
        $('#myInput').on('input', function() {
            var inputVal = $(this).val().trim();
            if(inputVal !== "") {
                showAutosuggestions();
            } else {
                $('#autosuggestions').hide();
            }
        });

        // Hide autosuggestions when input is clicked outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.cdsfsdvnghff').length) {
                $('#autosuggestions').hide();
            }
        });

        // Select suggestion and fill input with it
        $(document).on('click', '.suggestion', function() {
            var selectedSuggestion = $(this).text();
            $('#myInput').val(selectedSuggestion);
            $('#autosuggestions').hide();
        });
    });
    
/*autosuggestion searchbar end*/

