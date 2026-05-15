import { Order } from "@/entities/order/Order.js";

type OrderStatusProps = "pending" | "paid" | "canceled"

export interface IOrderRepository {
    create: (data: Order) => Promise<Order | null>;
    findById: (id: string) => Promise<Order | null>;
    findAll: () => Promise<Order[]>;
    updateStatus: (orderId: string, status: OrderStatusProps) => Promise<Order | null>;
    delete: (orderId: string) => Promise<void>
}