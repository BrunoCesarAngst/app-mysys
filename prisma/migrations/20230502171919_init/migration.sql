-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "discerned" BOOLEAN,
    "fastAction" BOOLEAN,
    "incubate" BOOLEAN,
    "reference" BOOLEAN,
    "delegated" BOOLEAN,
    "actionDate" BOOLEAN,
    "context" BOOLEAN,
    "project" BOOLEAN,
    "completed" BOOLEAN,
    "trash" BOOLEAN,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
