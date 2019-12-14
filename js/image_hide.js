//Document ready loading
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.addEventListener('click', showDetails);
    }
    
}
 
function showDetails(e) {
    var button = e.target
    var details = document.getElementsByClassName('second-text');
    for(var i =0; i < details.length; i++ ) {
        var detail = details[i];
        if (detail.style.display === 'none') {
            detail.style.display = 'block';
        }else {
            detail.style.display = 'none';
        }
       
    }
}
