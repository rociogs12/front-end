// 3. Por cada product, crear una estructura html que contenga su información
export const productContent = (product) => {
    const newProduct = document.createElement('div');
    newProduct.classList.add('card');

    newProduct.innerHTML = `
        ${product.image
            ? `<img class="card-img-top" src="${product.image}" alt="Card image cap" />`
            : ''
        }
        <div class="card-body">
          <h5 class="card-title product-title">${product.title}</h5>
          <p class="product-description">${product.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item product-price">${product.price}€</li>
          <li class="list-group-item product-type">${product.type}</li>
          <li class="list-group-item product-type">${product.user.username}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Detail</a>
        </div>
    `;

    return newProduct;
}
