import interactiveColumns from "./interactiveColumns";
import staffBios from "./staffBios";

(function(){
    const ic = interactiveColumns();
    const sb = staffBios();

    ic.init();
    sb.init();
})();



// (function(){
//     console.log('hola');
//     setTimeout(function() {
//         if(Boolean(_N2['#n2-ss-5'])) {
//             // window['n2-ss-5'] = 2;
//         //    document.querySelector("#n2-ss-5 .nextend-arrow-next").click();
//             // _N2.r('#n2-ss-5', function() {
//             //     var slider = _N2['#n2-ss-5'];
//             //     slider.next();
//             // });
//         }
//     }, 1000);
// })();