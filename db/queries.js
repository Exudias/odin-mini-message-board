const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getMessageById(id) {
    return await pool.query("SELECT * FROM messages WHERE id = ($1)", [id]);
}

async function createMessage(text, user) {
    await pool.query("INSERT INTO messages (text, user) VALUES ($1, $2)", [text, user]);
}

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage,
};
