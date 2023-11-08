BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[time_trackers] (
    [Id] NVARCHAR(1000) NOT NULL,
    [StartDate] DATETIME2 NOT NULL,
    [EndDate] DATETIME2 NOT NULL,
    [TimeZoneId] VARCHAR(250) NOT NULL,
    [TaskId] NVARCHAR(1000) NOT NULL,
    [CollaboratorId] NVARCHAR(1000) NOT NULL,
    [CreatedAt] DATETIME2 NOT NULL,
    [UpdateAt] DATETIME2 NOT NULL,
    [DeletedAt] DATETIME2 NOT NULL,
    CONSTRAINT [time_trackers_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- AddForeignKey
ALTER TABLE [dbo].[time_trackers] ADD CONSTRAINT [time_trackers_TaskId_fkey] FOREIGN KEY ([TaskId]) REFERENCES [dbo].[tasks]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[time_trackers] ADD CONSTRAINT [time_trackers_CollaboratorId_fkey] FOREIGN KEY ([CollaboratorId]) REFERENCES [dbo].[collaborators]([Id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
