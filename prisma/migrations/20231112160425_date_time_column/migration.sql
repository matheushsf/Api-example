BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[collaborators] ALTER COLUMN [UpdateAt] DATETIME2 NULL;
ALTER TABLE [dbo].[collaborators] ALTER COLUMN [DeletedAt] DATETIME2 NULL;
ALTER TABLE [dbo].[collaborators] ADD CONSTRAINT [collaborators_CreatedAt_df] DEFAULT CURRENT_TIMESTAMP FOR [CreatedAt];

-- AlterTable
ALTER TABLE [dbo].[projects] ALTER COLUMN [UpdateAt] DATETIME2 NULL;
ALTER TABLE [dbo].[projects] ALTER COLUMN [DeletedAt] DATETIME2 NULL;
ALTER TABLE [dbo].[projects] ADD CONSTRAINT [projects_CreatedAt_df] DEFAULT CURRENT_TIMESTAMP FOR [CreatedAt];

-- AlterTable
ALTER TABLE [dbo].[tasks] ALTER COLUMN [UpdateAt] DATETIME2 NULL;
ALTER TABLE [dbo].[tasks] ALTER COLUMN [DeletedAt] DATETIME2 NULL;
ALTER TABLE [dbo].[tasks] ADD CONSTRAINT [tasks_CreatedAt_df] DEFAULT CURRENT_TIMESTAMP FOR [CreatedAt];

-- AlterTable
ALTER TABLE [dbo].[time_trackers] ALTER COLUMN [UpdateAt] DATETIME2 NULL;
ALTER TABLE [dbo].[time_trackers] ALTER COLUMN [DeletedAt] DATETIME2 NULL;
ALTER TABLE [dbo].[time_trackers] ADD CONSTRAINT [time_trackers_CreatedAt_df] DEFAULT CURRENT_TIMESTAMP FOR [CreatedAt];

-- AlterTable
ALTER TABLE [dbo].[users] ALTER COLUMN [UpdateAt] DATETIME2 NULL;
ALTER TABLE [dbo].[users] ALTER COLUMN [DeletedAt] DATETIME2 NULL;
ALTER TABLE [dbo].[users] ADD CONSTRAINT [users_CreatedAt_df] DEFAULT CURRENT_TIMESTAMP FOR [CreatedAt];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
