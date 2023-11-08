/*
  Warnings:

  - You are about to drop the `colaboradores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[colaboradores] DROP CONSTRAINT [colaboradores_UsuarioId_fkey];

-- DropTable
DROP TABLE [dbo].[colaboradores];

-- DropTable
DROP TABLE [dbo].[usuarios];

-- CreateTable
CREATE TABLE [dbo].[users] (
    [Id] NVARCHAR(1000) NOT NULL,
    [UserName] VARCHAR(250) NOT NULL,
    [Password] VARCHAR(512) NOT NULL,
    [CreatedAt] DATETIME2 NOT NULL,
    [UpdateAt] DATETIME2 NOT NULL,
    [DeletedAt] DATETIME2 NOT NULL,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([Id]),
    CONSTRAINT [users_UserName_key] UNIQUE NONCLUSTERED ([UserName])
);

-- CreateTable
CREATE TABLE [dbo].[collaborators] (
    [Id] NVARCHAR(1000) NOT NULL,
    [Name] VARCHAR(250) NOT NULL,
    [UserId] NVARCHAR(1000) NOT NULL,
    [CreatedAt] DATETIME2 NOT NULL,
    [UpdateAt] DATETIME2 NOT NULL,
    [DeletedAt] DATETIME2 NOT NULL,
    CONSTRAINT [collaborators_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[projects] (
    [Id] NVARCHAR(1000) NOT NULL,
    [Name] VARCHAR(250) NOT NULL,
    [CreatedAt] DATETIME2 NOT NULL,
    [UpdateAt] DATETIME2 NOT NULL,
    [DeletedAt] DATETIME2 NOT NULL,
    CONSTRAINT [projects_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- AddForeignKey
ALTER TABLE [dbo].[collaborators] ADD CONSTRAINT [collaborators_UserId_fkey] FOREIGN KEY ([UserId]) REFERENCES [dbo].[users]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
