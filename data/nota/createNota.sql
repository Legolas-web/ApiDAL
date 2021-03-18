INSERT INTO [dbo].[nota]
    (
        [valorNota],
        [idRespuesta],
        [idUsuario]
    )
VALUES 
    (
        @valorNota,
        @idRespuesta,
        @idUsuario
    )
      
SELECT [idNota]
         ,[valorNota]
         ,[idRespuesta]
         ,[idUsuario]
FROM [dbo].[nota]
WHERE [idNota]=SCOPE_IDENTITY()  