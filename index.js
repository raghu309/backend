const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    const { message } = req.query;
    let response;

    switch (message) {
        case 'hello':
            response = 'hello there!';
            break;
        case 'good morning':
            response = 'gm';
            break;
        default:
            response = 'invalid';
            break;
    }

    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
