INSERT INTO [dbo].[notaTaller]
    (
        [notaFinal],
        [taller],
        [idUsuario]
    )
VALUES 
    (
        @notaFinal,
        @taller,
        @idUsuario
    )
      
SELECT [idNotaTaller]
         ,[notaFinal]
         ,[taller]
         ,[idUsuario]
FROM [dbo].[notaTaller]
WHERE [idNotaTaller]=SCOPE_IDENTITY()  