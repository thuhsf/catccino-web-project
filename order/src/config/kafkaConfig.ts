import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "order-service",  // era "menu-service", ajusta pro serviço correto
    brokers: ["kafka1:9002", "kafka2:9002"]
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "order-service" });

export { producer, consumer };