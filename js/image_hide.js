class Product {
    constructor(title,details,moredetails) {
        this.title = title;
        this.details = details; 
        this.moredetails = moredetails;
    }
}

class UI {
   static displayProducts() {
    let StoredProducts = [
        {
        
                title: 'Ecommerce',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum',
                moredetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum'
            },
            {   
                title: 'Products',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum',
                moredetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum'
            },
            {   
                title: 'Brands',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum',
                moredetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum'
            }
        ];

    const myProducts = StoredProducts;

    myProducts.forEach((myproduct)=> UI.addProductToList(myproduct));
    }

    static addProductToList(myproduct) {
        const list = document.querySelector('#main-box');
        const div = document.createElement('div')
        div.innerHTML = 
        `<div id="box" class="col-sm-4 box">
        <h2>${myproduct.title}</h2>
        <p>${myproduct.details}</p>
        <button id="more" class="btn btn-danger more">Read More</button>
        <p id="second-text">${myproduct.moredetails}</p>
    </div>`;
    list.appendChild(div);    
  }


   
}
 
document.addEventListener('DOMContentLoaded', UI.displayProducts);


document.querySelector('#more').addEventListener('click', init);

// $(document).ready(function() {
//    $("#second-text").hide();
//    $("#more").click(toggleImage);
// });

// function toggleImage() {
//     if ($('#more').html() == 'Read More')  {
//         $('#second-text').toggle(1000);
//         $('#more').html('Read Less');
//     }else {
//         $("#second-text").toggle();
//         $("#more").html('Read More');
//     }
// }


