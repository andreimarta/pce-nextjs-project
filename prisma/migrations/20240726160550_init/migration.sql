/*
  Warnings:

  - You are about to drop the `ProductAttribute` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `product_id` to the `Attribute` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ProductAttribute_product_id_attribute_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProductAttribute";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AttributeValue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "attribute_id" INTEGER NOT NULL,
    CONSTRAINT "AttributeValue_attribute_id_fkey" FOREIGN KEY ("attribute_id") REFERENCES "Attribute" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attribute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sale" BOOLEAN NOT NULL DEFAULT false,
    "product_id" INTEGER NOT NULL,
    CONSTRAINT "Attribute_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Attribute" ("id", "name", "sale") SELECT "id", "name", "sale" FROM "Attribute";
DROP TABLE "Attribute";
ALTER TABLE "new_Attribute" RENAME TO "Attribute";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
