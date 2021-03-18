UPDATE [dbo].[usuarios]
SET [estado]='ACTIVO'
WHERE [idUsuario]=@idUsuario

SELECT [idUsuario]
      ,[nombre]
      ,[nombreCompleto]
      ,[contrasena]
      ,[estado]
      ,[avatar]
  FROM [dbo].[usuarios]
  WHERE [idUsuario]=@idUsuario