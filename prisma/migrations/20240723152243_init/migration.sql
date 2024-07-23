-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attribute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sale" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Attribute" ("id", "name") SELECT "id", "name" FROM "Attribute";
DROP TABLE "Attribute";
ALTER TABLE "new_Attribute" RENAME TO "Attribute";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
