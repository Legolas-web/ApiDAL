UPDATE [dbo].[usuarios]
SET [nombre]=@nombre,
    [nombreCompleto]=@nombreCompleto,
    [contrasena]=@contrasena,
    [estado]=@estado,
    [avatar]=@avatar
WHERE [idUsuario]=@idUsuario

SELECT [idUsuario]
      ,[nombre]
      ,[nombreCompleto]
      ,[contrasena]
      ,[estado]
      ,[avatar]
  FROM [dbo].[usuarios]
  WHERE [idUsuario]=@idUsuario



  