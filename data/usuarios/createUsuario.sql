INSERT INTO [dbo].[usuarios]
    (
        [nombre],
        [nombreCompleto],
        [contrasena],
        [estado],
        [avatar]

    )
VALUES 
    (
        @nombre,
        @nombreCompleto,
        @contrasena,
        @estado,
        @avatar
    )
      
SELECT [idUsuario]
         ,[nombre]
         ,[nombreCompleto]
         ,[contrasena]
         ,[estado]
         ,[avatar]
FROM [dbo].[usuarios]
WHERE [idUsuario]=SCOPE_IDENTITY()    


