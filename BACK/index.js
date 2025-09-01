import app from './app.js';

// Set server port
const PORT = 3000;

// Start server and listen on specified port
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
