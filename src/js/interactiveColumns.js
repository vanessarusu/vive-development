import toggleColumns from "./toggleColumns";


const interactiveColumns = (function () {

    const tc =  toggleColumns();

    function addEventListeners() {
        if(Boolean(document.querySelector('.interactive-callout-column'))) {
            var interactiveColumns = document.querySelectorAll('.interactive-callout-column');
    
            interactiveColumns.forEach(el => {
                el.addEventListener('click', function(e){
                    e.preventDefault();
                    tc.toggle(this);
                })
            })
        }
    }

    function init() {
        addEventListeners();
    }

    return {
        init: init
    }
});

export default interactiveColumns;