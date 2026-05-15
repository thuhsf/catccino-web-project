type OrderStatus = "pending" | "paid" | "canceled";

type OrderProps = {
    id?: string;
    customerId: string;
    status: OrderStatus;
    total: number;
    createdAt?: Date;
    updatedAt?: Date;
};

class Order {
    private readonly Id: string;
    private CustomerId: string;
    private Status: OrderStatus;
    private Total: number;
    private CreatedAt: Date;
    private UpdatedAt: Date;

    constructor(props: OrderProps) {
        this.Id = props.id ?? "";
        this.CustomerId = props.customerId;
        this.Status = props.status;
        this.Total = props.total;
        this.CreatedAt = props.createdAt ?? new Date();
        this.UpdatedAt = props.updatedAt ?? new Date();
    };

    getId(): string {
        return this.Id;
    };

    getCustomerId(): string {
        return this.CustomerId;
    };

    getStatus(): OrderStatus {
        return this.Status;
    };

    getTotal(): number {
        return this.Total;
    };

    getCreatedAt(): Date {
        return this.CreatedAt;
    };

    getUpdatedAt(): Date {
        return this.UpdatedAt;
    };

    changeStatus(value: OrderStatus) {
        this.Status = value;

        this.touch();
    };

    changeTotal(value: number) {
        if (value <= 0) {
            throw new Error("Invalid order total");
        };

        this.Total = value;
        this.touch();
    };

    private touch() {
        this.UpdatedAt = new Date();
    };

};

export { Order };