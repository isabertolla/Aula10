// Servidor Express - Projeto #07: Cinema & Reserva de Poltronas
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3007;

app.get('/api/cinema/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 7,
        sistema: "Cinema & Reserva de Poltronas",
        categoria: "Entretenimento",
        tabela_conectada: process.env.TABELA_ALVO || "sessoes_filmes",
        parametro_ambiente: process.env.SALA_PROJECAO || "IMAX_LASER_07",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #07] Cinema & Reserva de Poltronas rodando em http://localhost:${PORT}/api/cinema/status`);
});