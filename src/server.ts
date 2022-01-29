import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Health to Grow running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log(`Unhandled Rejection at: ${reason}`);
});