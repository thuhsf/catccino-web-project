import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "menu-service",
    brokers: ["kafka1:9002", "kafka2:9002"]
});


const producer = kafka.producer();

export { producer }