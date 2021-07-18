document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
// Toast pop up Function
var count = 1;
function toastCounter() {
    var toastHTML = `<span>${count}</sup> toast</span>`
    M.toast({html: toastHTML})
    count ++;
}