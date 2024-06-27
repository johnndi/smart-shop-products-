import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const product = await prisma.product.findMany();
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await prisma.product.findFirst({
      where: { id: id },
    });
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      productthumbnail,
      producttitle,
      productdescription,
      productcost,
      onoffer,
    } = req.body;

    const newProduct = await prisma.product.create({
      data: {
        productthumbnail,
        producttitle,
        productdescription,
        productcost,
        onoffer,
      },
    });
    res.status(200).json({ newProduct });
  } catch (error) {
    res.status(500).json({ message: "error in the server" });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const {
      productthumbnail,
      producttitle,
      productdescription,
      productcost,
      onoffer,
    } = req.body;

    const updateProduct = await prisma.product.update({
      where: { id: id },
      data: {
        productthumbnail,
        producttitle,
        productdescription,
        productcost,
        onoffer,
      },
    });
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: "error in the server" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const delproduct = await prisma.product.delete({
      where: { id: id },
    });
    res.status(200).json({ delproduct, message: "delete successful" });
  } catch (err) {
    res.status(500).json({ message: "could'nt delete server error" });
  }
});
export default router;
