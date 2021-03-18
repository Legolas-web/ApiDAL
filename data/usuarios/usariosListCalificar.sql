SELECT distinct [u].[idUsuario]
				,[u].[nombre]
				,[u].[nombreCompleto]
				,[u].[contrasena]
				,[u].[estado]
				,[u].[avatar]
  FROM [dbo].[respuesta] as [r], [bdDAL].[dbo].[usuarios] as [u]
  where [r].[idUsuario] = [u].[idUsuario] and [u].[estado] = 'ACTIVO'