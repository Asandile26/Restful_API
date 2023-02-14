const sql = require("./model")

// constructor
const Tutorial = function(products) {
    this.productID = products.productID;
    this.productName = products.productName;
    this.price = products.price;
};
Products.create = (newProducts, results) => {
    sql.query("INSERT INTO products SET ?", newProducts, (res, res) => {
        if (err) {
            console.log("error: ", err);
            results(err, null);
            return
        }
        console.log("created products: ", { productID: res.insertproductID, ...newProducts });
        result(null, {productID: res.insertproductID, ...newProducts });
    });
};
