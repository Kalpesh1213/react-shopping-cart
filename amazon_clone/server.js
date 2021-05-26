// we will  implement backend here for that we insall some libaries like
// express,  body-parser, mongoose shortid

const express = require("express");
const bodyParser = require("bodyParser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const { default: Products } = require("./src/Components/Products");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://locolhost/react-shopping-cart-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}    
);

const Product = mongoose.model("products", new mongoose.Schema({
    _id:{ type:String, default: shortid.generate},
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
}))

app.get("/app/product", async (res, req)=>{
    const products = await Products.find({});
    res.setEncoding(products);
});

app.post("/api/products", async (req, res)=>{
    const newProduct = new Product(req, res);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete("/api/products/:id", async(req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params);
    res.send(deleteProduct);
})
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://locohost:5000"));