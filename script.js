const productArray = JSON.parse(localStorage.getItem('productDetail')) || [];

const idEnter = document.querySelector('.add-product-id')
const nameEnter = document.querySelector('.add-product-name')
const priceEnter = document.querySelector('.add-product-price')
const stockEnter = document.querySelector('.add-product-stock')

const idEnterDelete = document.querySelector('.id-delete');
const nameEnterSearch = document.querySelector('.name-search');

idEnter.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') nameEnter.focus();
});
nameEnter.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') priceEnter.focus();
});
priceEnter.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') stockEnter.focus();
});
stockEnter.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addProduct();
    } 
});

idEnterDelete.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') deleteById();
})
nameEnterSearch.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        searchByName();
    }
})

const addProductButton = document.querySelector('.js-product-add-button');
const searchByNameButton = document.querySelector('.search-button');
const deleteByIdButton = document.querySelector('.delete-button');

addProductButton.addEventListener('click', () => {
    addProduct();
});

searchByNameButton.addEventListener('click', () => {
    searchByName();
});

deleteByIdButton.addEventListener('click', ()=> {
    deleteById();
});

//  ADD ITEM TO LIST FUNCTION
function addProduct() {
    const productId = document.querySelector('.add-product-id').value;
    const productName = document.querySelector('.add-product-name').value;
    const productPrice = document.querySelector('.add-product-price').value;
    const productStock = document.querySelector('.add-product-stock').value;
    if(productId.trim() === '' || productName.trim() === '' || productPrice.trim() === '' || productStock.trim() === '') return;

    const price = Number(productPrice);
    const stock = Number(productStock);

    const product = {
        id: productId.trim(),
        name: productName.trim(),
        price: Number(productPrice),
        stock: Number(productStock)
    };

    
    productArray.push(product);
    localStorage.setItem('productDetail', JSON.stringify(productArray));
    document.querySelector('.add-product-id').value = '';
    document.querySelector('.add-product-name').value = '';
    document.querySelector('.add-product-price').value = '';
    document.querySelector('.add-product-stock').value = '';
    addData();
    renderTable();
    
}

//   SEARCH ITEM BY NAME FUNCTION
function searchByName() {
    const searchByNameInput = (document.querySelector('.name-search').value).toLowerCase();
    if(searchByNameInput.trim() === '') return;

    let found = false;
    productArray.forEach(element => {
        if((element.name).toLowerCase() === searchByNameInput) {
            found = true;
            alert(`Item found!
ID: ${element.id} - Name: ${element.name} - Price: ${element.price} - Stock: ${element.stock}`)
        }

    });

    if(!found) alert('Item not found!');
    document.querySelector('.name-search').value = '';
}

//   DELETE ITEM BY ID FUNCTION
function deleteById() {
    const deleteByIdInput = document.querySelector('.id-delete').value;
    if(deleteByIdInput.trim() === '') return;

    const index = productArray.findIndex(product => product.id === deleteByIdInput);
    if(index === -1){
        alert('Product not found!');
        document.querySelector('.id-delete').value = '';
        return;
    }

    productArray.splice(index, 1);
    localStorage.setItem('productDetail', JSON.stringify(productArray));
    document.querySelector('.id-delete').value = ''
    subtractData();
    renderTable();
}


//   PRODUCT LIST FUNCTION
renderTable();
function renderTable() {
    let table = `
        <table style="width:100%; border-collapse: collapse;">
            <thead style="background-color: #eeeeee">
                <tr>
                    <th style="padding: 10px; border: 1px solid #ddd">ID</th>
                    <th style="padding: 10px; border: 1px solid #ddd">Name</th>
                    <th style="padding: 10px; border: 1px solid #ddd">Price</th>
                    <th style="padding: 10px; border: 1px solid #ddd">Stock</th>
                    <th style="padding: 10px; border: 1px solid #ddd">Action</th>
                </tr>
            </thead>
        <tbody>
    `;

    for(let i = 0; i < productArray.length; i++) {
        const product = productArray[i];
        table += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${product.id}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${product.name}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${product.price}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${product.stock}</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
                    <button onclick="deleteProduct(${i})" class="delete-button second-part-button"><i class="fa-solid fa-trash-can"></i> Delete

                    </button>
                </td>
            </tr>
        `;
    }

    table += `</tbody></table>`;

    document.querySelector('.list-table-detail').innerHTML = table;
}

function deleteProduct(index) {
    productArray.splice(index, 1);
    localStorage.setItem('productDetail', JSON.stringify(productArray));
    renderTable();
    subtractData();
    addData();
}

//   ADD DATA CALCULATION
addData();
function addData() {
    document.querySelector('.total-prod-number').innerHTML = productArray.length;

    let totalStock = 0;
    for(let i = 0; i < productArray.length; i++) {
        totalStock += productArray[i].stock;
    }
    document.querySelector('.total-stock-number').innerHTML = totalStock;

    let totalPrice = 0;
    for(let i = 0; i < productArray.length; i++) {
        totalPrice += productArray[i].price;
    }
    const averagePrice = productArray.length === 0 ? 0 : (totalPrice / productArray.length).toFixed(2);
    document.querySelector('.total-price-number').innerHTML = averagePrice;
}

//   SUBTRACT DATA CALCULATION
function subtractData() {
    document.querySelector('.total-prod-number').innerHTML = productArray.length;

    let totalStock = 0;
    for(let i = 0; i < productArray.length; i++) {
        totalStock += productArray[i].stock;
    }
    document.querySelector('.total-stock-number').innerHTML = totalStock;

    let totalPrice = 0;
    for(let i = 0; i < productArray.length; i++) {
        totalPrice += productArray[i].price;
    }
    const averagePrice = productArray.length === 0 ? 0 : (totalPrice / productArray.length).toFixed(2);
    document.querySelector('.total-price-number').innerHTML = averagePrice;
}
subtractData();