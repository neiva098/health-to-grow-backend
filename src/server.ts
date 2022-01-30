import app from './app';

import connect from './database/connection/connection';

const PORT = process.env.PORT || 3333;

async function startServer() {
    connect();

    app.listen(PORT, () => {
        console.log(`Health to Grow running on port ${PORT}`);
    });
}

startServer();
