const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.static('Public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public/HTML', 'Menu.html'));
});

app.get('/order', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public/HTML', 'Order.html'));
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
    res.sendFile(path.join(__dirname, 'Public', 'confirmation.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
