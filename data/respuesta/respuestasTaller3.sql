  SELECT [idRespuesta]
         ,[respuestaUser]
         ,[fecha]
         ,[pregunta]
         ,[taller]
         ,[idUsuario]
  FROM [dbo].[respuesta]
  WHERE [idUsuario]=@idRespuesta AND [taller]=3