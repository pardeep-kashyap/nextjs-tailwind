export default function handler(req, res) {
    res.status(200).json([
        {
            name: 'Agile',
            className: 'bg-red-400',
            description:
                'The world is changing quickly. Are you able to keep up with the pace? We can help you become more dynamic, nimble, and resilient.',
        },
        {
            name: 'Application Development & Management',
            className: 'bg-green-400',
            description:
                'Agile, robust, and scalable, our earliest offering. Digital product engineering is knowing how to make the application from the ground up, while also imagining what it could be in the future.',
        },
        {
            name: 'Application Managed Services',
            className: 'bg-blue-400',
            description:
                'Reduce the cost of running your business with our deep ITSM and Agile expertise.',
        },
        {
            name: 'Accelerated Quality & Test-Engineering',
            className: 'bg-pink-400',
            description:
                'Ready to go to market? We can make sure you are. Our PROVEN™ testing methodology ensures maximum business value as well as guarantees continuous improvement.',
        },
        {
            name: 'Artificial Intelligence, Data & Analytics',
            className: 'bg-indigo-400',
            description:
                'The challenge is not getting the data but knowing what to do with it. Our solutions make data actionable and leverageable.',
        },
        {
            name: 'Blockchain',
            className: 'bg-yellow-600',
            description:
                'Become the Digital enterprise of tomorrow by harnessing the power of Blockchain technology.',
        },
    ]);
}
