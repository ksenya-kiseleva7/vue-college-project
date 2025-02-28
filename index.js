import { user } from "./user.js";
import { orders } from "./orders.js";

function calculateOrderTotal(orders, discount) {
    let total = 0;

    orders.forEach(order => {
        total += order.price * order.quantity;
    });

    const discountedTotal = total - total * discount; // С учётом скидки
    return { total, discountedTotal };
}

const result = calculateOrderTotal(orders, user.discount);

// Вывод данных в браузер
document.body.innerHTML = `
    <h1>Информация о заказе</h1>
    <p>Покупатель: ${user.name}</p>
    <h2>Список товаров:</h2>
    <ul>
        ${orders.map(order => `<li>${order.name} - ${order.price}₽ x ${order.quantity}</li>`).join("")}
    </ul>
    <p>Общая стоимость (без скидки): ${result.total}₽</p>
    <p>Общая стоимость (со скидкой): ${result.discountedTotal.toFixed(2)}₽</p>
`;