//EJERCICIO 5: DELETE /categorias/:id - Eliminar Categoría y
//Productos
// DELETE /categorias/:id - Eliminar categoría y sus productos
app.delete('/categorias/:id', async (req, res) => { try { const {
id } = req.params; if (!id || isNaN(id)) {
return res.status(400).json({ error: 'ID inválido' }); }
 const conn = await pool.getConnection();
try { // Iniciar transacción await
conn.beginTransaction(); // Verificar que la
categoría existe const [existe] = await conn.execute(
'SELECT id FROM categorias WHERE id = ?',
[id] ); if
(existe.length === 0) { await conn.rollback();
conn.release(); return res.status(404).json({
error: 'Categoría no encontrada' }); }
// Eliminar productos de la categoría const
[productResult] = await conn.execute( 'DELETE FROM productos
WHERE categoria_id = ?', [id] );
// Eliminar la categoría const [categoryResult] =
await conn.execute( 'DELETE FROM categorias WHERE id = ?',
[id] ); // Confirmar
transacción await conn.commit(); conn.release();
 res.status(200).json({ mensaje:
'Categoría y sus productos eliminados exitosamente',
categoriasEliminadas: categoryResult.affectedRows,
productosEliminados: productResult.affectedRows
}); } catch (error) { await conn.rollback();
conn.release(); throw error; } } catch
(error) { res.status(500).json({ error: error.message }); } });