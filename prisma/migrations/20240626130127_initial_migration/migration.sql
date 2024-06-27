-- CreateTable
CREATE TABLE "product_table" (
    "id" TEXT NOT NULL,
    "productthumbnail" TEXT NOT NULL,
    "producttitle" TEXT NOT NULL,
    "productdescription" TEXT NOT NULL,
    "productcost" INTEGER NOT NULL,
    "onoffer" BOOLEAN NOT NULL,

    CONSTRAINT "product_table_pkey" PRIMARY KEY ("id")
);
