import Pixel from "../models/Pixel.js";

// get canvas
export const getCanvas = async (req, res) => {
  try {
    const canvas = await Pixel.find();
    res.status(200).json(canvas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePixel = async (req, res) => {
  try {
    const pixel = await Pixel.findById(req.params.id);
    if (!pixel) {
      return res.status(404).json({ message: "Pixel not found" });
    }
    pixel.x = req.body.x;
    pixel.y = req.body.y;
    pixel.color = req.body.color;
    await pixel.save();
    res.status(200).json({ message: "Pixel updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// // get 1 pixel
// export const getPixel = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const pixel = await Pixel.findById(id);
//     res.status(200).json(pixel);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// import Pixel from "../models/Pixel.js";
// // import ProductStat from "../models/ProductStat.js";

// export const getProducts = async (req, res) => {
//   try {
//     // const products = await Pixel.find();
//     // const productsWithStats = await Promise.all(
//     //   products.map(async (product) => {
//     //     // get productStat of each product
//     //     const stat = await ProductStat.find({
//     //       productId: product._id,
//     //     });
//     //     return {
//     //       ...product._doc, // return product info
//     //       stat, // then combine all stat info
//     //     };
//     //   })
//     // );
//     // res.status(200).json(productsWithStats);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
