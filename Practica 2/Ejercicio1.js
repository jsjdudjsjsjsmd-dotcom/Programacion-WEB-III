const express = require('express'); const mysql = require('mysql2/promise');
const app = express(); app.use(express.json()); const pool =
mysql.createPool({ host: 'localhost', user: 'root', password:
'password', database: 'tienda_db', waitForConnections: true,
connectionLimit: 10, queueLimit: 0 }); // POST /categorias - Crear
nueva categoría app.post('/categorias', async (req, res) => { try {
const { nombre, descripcion } = req.body; if
(!nombre) { return res.status(400).json({ error:
'El nombre de la categoría es requerido' }); }
const conn = await pool.getConnection(); const query =
'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)'; const
[result] = await conn.execute(query, [nombre, descripcion]);
conn.release(); res.status(201).json({
id: result.insertId, nombre, descripcion,
mensaje: 'Categoría creada exitosamente' }); } catch
(error) { res.status(500).json({ error: error.message }); } });
app.listen(3000, () => console.log('Servidor en puerto 3000'));
//Nota: En Thunder Client, envíe POST a http://localhost:3000/categorias con body JSON: {"nombre":
//"Hogar", "descripcion": "Artículos para el hogar"}

