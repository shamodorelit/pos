const app = require('../server.js');
const { connectDB } = require('../database.js');

module.exports = async (req, res) => {
    // Ensure the database connection is resolved before handing off to Express
    await connectDB();
    
    // Hand the request to Express
    return app(req, res);
};
