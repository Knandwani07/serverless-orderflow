export const handler = async (event) => {
    console.log("Updating status for order:", event.orderId);
    // Simulate order status update
    return {
        orderId: event.orderId,
        status: "Completed"
    };
};