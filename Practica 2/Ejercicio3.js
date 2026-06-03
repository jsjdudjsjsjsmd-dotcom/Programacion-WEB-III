//EJERCICIO 3: GET /categorias/:id - Obtener Categoría con
//Productos
// Primero, asumimos que existe tabla productos con foreign key categoria_id
// CREATE TABLE productos ( // id INT AUTO_INCREMENT PRIMARY KEY, // nombre
VARCHAR(100) NOT NULL, // precio DECIMAL(10, 2), // categoria_id INT NOT
NULL, // FOREIGN KEY (categoria_id) REFERENCES categorias(id) // ); // GET
/categorias/:id - Obtener categoría y sus productos
app.get('/categorias/:id', async (req, res) => { try { const { id
} = req.params; if (!id || isNaN(id)) { return
res.status(400).json({ error: 'ID inválido' }); }
const conn = await pool.getConnection(); // Obtener
categoría const [categorias] = await conn.execute(
'SELECT * FROM categorias WHERE id = ?', [id]
); if (categorias.length === 0) {
conn.release(); return res.status(404).json({ error:
'Categoría no encontrada' }); } // Obtener productos
de la categoría const [productos] = await conn.execute(
'SELECT * FROM productos WHERE categoria_id = ?',
[id] ); conn.release();
res.status(200).json({ categoria: categorias[0],
productos, totalProductos: productos.length
}); } catch (error) { res.status(500).json({ error:
error.message }); } });