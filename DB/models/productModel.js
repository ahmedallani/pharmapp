var mongoose = require("mongoose");

const productSchema = mongoose.Schema({
 
  id:{
    type: String,
    unique: true
  },
  name:String,
  price:Number,
  discount:Number,
  PricewithDiscount:Number,
  DoesInMG:Number,
  image:Number,
  // category:{ type: mongoose.Schema.Types.ObjectId, ref: "categorie" },
  categoryid:String,
  brand: { type: mongoose.Schema.Types.ObjectId, ref: "brand" },
  description:Number,
});

const Modelproduct = mongoose.model("product", productSchema);

module.exports.Modelproduct = Modelproduct;
