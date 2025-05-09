export const handler = async (event) => {
    console.log("Checking inventory for order:", event.orderId);
    // Simulate inventory check
    const inStock = Math.random() < 0.9;
    return {
        orderId: event.orderId,
        inStock: inStock
    };
};