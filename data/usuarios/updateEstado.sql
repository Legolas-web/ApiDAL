UPDATE [dbo].[usuarios]
SET [estado]='INACTIVO'
WHERE [idUsuario]=@idUsuario

SELECT [idUsuario]
      ,[nombre]
      ,[nombreCompleto]
      ,[contrasena]
      ,[estado]
      ,[avatar]
  FROM [dbo].[usuarios]
  WHERE [idUsuario]=@idUsuario