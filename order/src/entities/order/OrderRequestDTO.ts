type OrderStatus = "pending" | "paid" | "canceled";

type Order = {
    id?: string;
    customerId: string;
    status: OrderStatus;
    total: number;
};

export interface OrderRequestDTO {
    order: Order;
};