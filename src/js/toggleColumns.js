const toggleColumns = (function (el) {

    function toggle(el) {
        if(el.classList.contains('open')) {
            el.classList.remove('open');
        }
    
        else {
            el.classList.add('open');
        }
    
    }

    function init() {
        toggleClass(el);
    }

    return {
        toggle: toggle
    }
});

export default toggleColumns;