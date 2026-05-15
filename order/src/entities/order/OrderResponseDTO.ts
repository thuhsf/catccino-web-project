type OrderStatus = "pending" | "paid" | "canceled";

type Order = {
    id?: string;
    customerId: string;
    status: OrderStatus;
    total: number;
    createdAt?: Date;
    updatedAt?: Date;
};

export interface OrderResponseDTO {
    order: Order;
};

export interface ArrOrderResponseDTO {
    orders: Order[];
};