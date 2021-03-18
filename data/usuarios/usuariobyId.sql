  SELECT [idUsuario]
         ,[nombre]
         ,[nombreCompleto]
         ,[contrasena]
         ,[estado]
         ,[avatar]
  FROM [dbo].[usuarios]
  WHERE [idUsuario]=@idUsuario


