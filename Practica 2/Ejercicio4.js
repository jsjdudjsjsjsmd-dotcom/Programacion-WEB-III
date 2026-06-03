EJERCICIO 4: PATCH /categorias/:id - Actualizar Categoría
// PATCH /categorias/:id - Actualizar categoría app.patch('/categorias/:id',
async (req, res) => { try { const { id } = req.params;
const { nombre, descripcion } = req.body; if (!id ||
isNaN(id)) { return res.status(400).json({ error: 'ID inválido'
}); } if (!nombre && !descripcion) {
return res.status(400).json({ error: 'Debe
proporcionar nombre o descripción' }); }
const conn = await pool.getConnection(); //
Verificar que la categoría existe const [existe] = await
conn.execute( 'SELECT id FROM categorias WHERE id = ?',
[id] ); if (existe.length === 0) {
conn.release(); return res.status(404).json({ error:
'Categoría no encontrada' }); } // Construir query
dinámicamente let updateFields = []; let updateValues = [];
 if (nombre) { updateFields.push('nombre = ?');
updateValues.push(nombre); } if (descripcion) {
updateFields.push('descripcion = ?');
updateValues.push(descripcion); }
updateFields.push('updatedAt = NOW()');
updateValues.push(id); const query = `UPDATE
categorias SET ${updateFields.join(', ')} WHERE id = ?`; const
[result] = await conn.execute(query, updateValues); conn.release();
 res.status(200).json({ mensaje: 'Categoría
actualizada exitosamente', rowsAffected: result.affectedRows
}); } catch (error) { res.status(500).json({ error:
error.message }); } });