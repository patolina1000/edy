const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos com caminhos corretos
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/fonts', express.static(path.join(__dirname, 'public', 'fonts')));
app.use('/media', express.static(path.join(__dirname, 'public', 'media')));
app.use('/theme', express.static(path.join(__dirname, 'theme')));

// Servir arquivos estáticos das outras pastas
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'links')));
app.use(express.static(path.join(__dirname, 'compra-aprovada')));
app.use(express.static(path.join(__dirname, 'redirect')));
app.use(express.static(path.join(__dirname, 'funil_completo')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para links
app.get('/links', (req, res) => {
    res.sendFile(path.join(__dirname, 'links', 'index.html'));
});

// Rota para presell
app.get('/presell', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'presell', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor simples rodando na porta ${PORT}`);
    console.log(`📱 Página Principal: http://localhost:${PORT}`);
    console.log(`🔗 Links: http://localhost:${PORT}/links`);
    console.log(`🎁 Presell: http://localhost:${PORT}/presell`);
    console.log(`\n📁 Arquivos estáticos servidos:`);
    console.log(`   CSS: http://localhost:${PORT}/css/`);
    console.log(`   JS: http://localhost:${PORT}/js/`);
    console.log(`   Images: http://localhost:${PORT}/images/`);
});
