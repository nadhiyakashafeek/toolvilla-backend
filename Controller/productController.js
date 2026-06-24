const HardwareTool = require('../models/productModel')
 
// exports.addProduct = async (req, res) => {
//     console.log("Inside add product");
    
//     const { itemname, description, sku, brand, category, price, stock, images, dimensions, weight } = req.body
//     console.log(req.body);
//     console.log(itemname, description, sku, brand, category, price, stock, images, dimensions, weight);
//     try {
//         const existingProduct = await HardwareTool.findOne({sku})
//         if(existingProduct){
//             res.status(401).json({message:"Product already existing..."})
//         }
//         else{
//             const newProduct = new HardwareTool({
//                 itemname, description, sku, brand, category, price, stock, images, dimensions, weight
//             })
//             await newProduct.save()
//             res.status(200).json({ message: "Add Product successfully...", newProduct })
//         }
//     }
//     catch (err) {
//         res.status(500).json({ message: "Server error", err });
//     }
// }
 
exports.addProduct = async (req, res) => {
  console.log("Inside add product");
  console.log(req.body);
  console.log(req.files);
  
  

  const { itemname, description, sku, brand, category, price, stock, dimensions, weight,fromDate, toDate } = req.body;
  const email=  req.payload
  if (!email) {
  return res.status(401).json({ message: "Unauthorized! Token is missing or invalid." });
}
  const images = req.files ? req.files.map(file => file.path) : [];
  console.log(itemname, description, sku, brand, category, price, stock, dimensions, weight ,email,images,fromDate, toDate)

  try{
    const existingProduct = await HardwareTool.findOne({sku,email})
    console.log(existingProduct);
    if(existingProduct){
        res.status(401).json({message:"Product already existing..."})
    } else{
        const newProduct = new HardwareTool({
            itemname, description, sku, brand, category, price, stock, dimensions, weight,email,images,fromDate, toDate
        })
        console.log(newProduct);
        await newProduct.save()
        res.status(200).json({ message: "Add Product successfully...", newProduct })
    }

    
  }
  catch(err){
    res.status(500).json({ message: "Server error", err });
  } 
 
};