class ProductImageViewModel {
    constructor({ _id, src }) {
        const { SERVER_PORT, SERVER_DOMAIN, IMG_FOLDER_NAME } = process.env;

        this.id = _id;
        this.src = src;
        // this.createdAt = createdAt;
        // this.updatedAt = updatedAt;
    }
}

module.exports = ProductImageViewModel;