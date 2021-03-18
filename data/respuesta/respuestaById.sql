  SELECT [idRespuesta]
         ,[respuestaUser]
         ,[fecha]
         ,[pregunta]
         ,[taller]
         ,[idUsuario]
  FROM [dbo].[respuesta]
  WHERE [idRespuesta]=@idRespuesta