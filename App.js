const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, 'Public','HTML')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'Menu.html'));
});

app.get('/order', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public','HTML', 'Order.html'));
});

app.post('/calculateTotal', (req, res) => {
    const cart = req.body.cart;
    let totalCost = 0;

    cart.forEach(item => {
        const totalPriceForItem = parseFloat(item.price.replace('$', '')) * item.quantity;
        totalCost += totalPriceForItem;
    });

    res.json({ totalCost });
});

app.post('/submitOrder', (req, res) => {
    const formData = req.body;
    res.sendFile(path.join(__dirname, 'Public', 'HTML', 'confirmation.html'));
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});
