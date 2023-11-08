/*
  Warnings:

  - You are about to alter the column `UserName` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `VarChar(250)`.
  - You are about to alter the column `Password` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `VarChar(512)`.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[usuarios] DROP CONSTRAINT [usuarios_UserName_key];

-- AlterTable
ALTER TABLE [dbo].[usuarios] ALTER COLUMN [UserName] VARCHAR(250) NOT NULL;
ALTER TABLE [dbo].[usuarios] ALTER COLUMN [Password] VARCHAR(512) NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[colaboradores] (
    [Id] NVARCHAR(1000) NOT NULL,
    [Name] VARCHAR(250) NOT NULL,
    [UsuarioId] NVARCHAR(1000) NOT NULL,
    [CreatedAt] DATETIME2 NOT NULL,
    [UpdateAt] DATETIME2 NOT NULL,
    [DeletedAt] DATETIME2 NOT NULL,
    CONSTRAINT [colaboradores_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateIndex
ALTER TABLE [dbo].[usuarios] ADD CONSTRAINT [usuarios_UserName_key] UNIQUE NONCLUSTERED ([UserName]);

-- AddForeignKey
ALTER TABLE [dbo].[colaboradores] ADD CONSTRAINT [colaboradores_UsuarioId_fkey] FOREIGN KEY ([UsuarioId]) REFERENCES [dbo].[usuarios]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
