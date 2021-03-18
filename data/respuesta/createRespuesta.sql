INSERT INTO [dbo].[respuesta]
    (
        [respuestaUser],
        [fecha],
        [pregunta],
        [taller],
        [idUsuario]
    )
VALUES 
    (
        @respuestaUser,
        GETDATE(),
        @pregunta,
        @taller,
        @idUsuario
    )
      
SELECT [idRespuesta]
         ,[respuestaUser]
         ,[fecha]
         ,[pregunta]
         ,[taller]
         ,[idUsuario]
FROM [dbo].[respuesta]
WHERE [idRespuesta]=SCOPE_IDENTITY()  