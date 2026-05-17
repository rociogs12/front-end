
export const buildNewProductForm = () => {
    return `
    <form action="" class="d-flex flex-column align-items-center">
            
            <div class="mb-3">
              <label for="title" class="form-label fw-semibold"
                >Product Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                class="form-control"
                placeholder="Ej: iPhone 13"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label d-block fw-semibold"
                >Type</label
              >
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="typeSell"
                  value="sell"
                  checked
                  required
                />
                <label class="form-check-label" for="typeSell">Sell</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="typeBuy"
                  value="buy"
                />
                <label class="form-check-label" for="typeBuy">Buy</label>
              </div>
            </div>
            <div class="mb-3">
              <label for="price" class="form-label fw-semibold"
                >Price</label
              >
              <div class="input-group">
                <input
                  type="number"
                  id="price"
                  name="price"
                  class="form-control"
                  placeholder="Ej: 700"
                  min="0"
                  step="any"
                  required
                />
                <span class="input-group-text">€</span>
              </div>
            </div>

            <!-- Imagen ("image": "https://...") -->
            <div class="mb-3">
              <label for="image" class="form-label fw-semibold"
                >Image (URL)</label
              >
              <input
                type="url"
                id="image"
                name="image"
                class="form-control"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="form-label fw-semibold"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                class="form-control"
                rows="3"
                placeholder="Describe el estado del artículo..."
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
    `;
}