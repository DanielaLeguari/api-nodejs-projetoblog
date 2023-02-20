import app from './src/app.js';
const port = process.env.PORT || 3001; //diferenciação da porta ou ambiente de prod ou local


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});
