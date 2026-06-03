//EJERCICIO 2: GET /categorias - Obtener Todas las Categorías
// GET /categorias - Obtener todas las categorías app.get('/categorias',
async (req, res) => { try { const conn = await
pool.getConnection(); const query = 'SELECT * FROM categorias ORDER
BY id'; const [categorias] = await conn.execute(query);
conn.release(); res.status(200).json({
total: categorias.length, categorias });
} catch (error) { res.status(500).json({ error: error.message });