const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/test', (req, res) => {
	const test = [{ test: 1 }];

	res.json(test);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
