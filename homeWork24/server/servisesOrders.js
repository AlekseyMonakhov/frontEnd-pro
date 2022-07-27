let orders = [];

export function addOrder(order) {
    orders.push(order)
}
export function getOrders() {
    return orders;
}

export function getOrderId() {
    return orders[orders.length-1].id;
}

export function findOrder(id) {
    return orders.find(order => order.id === id);
}