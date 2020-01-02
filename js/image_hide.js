//Select the Elements
var currentList = {
    title: "Ecommerce",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum",
    moredetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum",
 
 };

var mainbox = document.getElementById("main-box");

const dateElement = document.getElementById("date");

const options = { weekday: "long", month: "short", day: "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-Us", options);

mainbox.innerHTML = `<div id="box" class="col-sm-4 box">
<h2>Ecommerce</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum</p>
<button id="more" class="btn btn-danger more" id="1">Read More</button>
<p style="display:none;" class ="second-text" id="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum</p>
</div>
<div id="box" class="col-sm-4 box">
<h2>Products</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum</p>
<button id="more" class="btn btn-danger more" id="2">Read More</button>
<p style="display:none;" class ="second-text" id="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum</p>
</div>
<div id="box" class="col-sm-4 box">
<h2>Brands</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum</p>
<button id="more" class="btn btn-danger more" id="3">Read More</button>
<p style="display:none;" class ="second-text" id="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum</p>
</div>`;

let acc = document.getElementsByClassName("more");

for(var i = 0 ; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        }else {
            panel.style.display = 'block';
        }

    }
}


