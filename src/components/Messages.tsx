const messagesData = [
    {
        sender: "Thanos",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "24m"
    },
    {
        sender: "Mang walter",
        text: "Haihai Hallo",
        time: "12m"
    },
];

export default function Messages() {
    return (
        <div className="flex">
            <div className="w-1/3 border-r">
                {messagesData.map((msg, index) => (
                    <div key={index} className="p-4 border-b">
                        <h4 className="font-bold">{msg.sender}</h4>
                        <p>{msg.text}</p>
                        <p className="text-sm text-gray-500">{msg.time}</p>
                    </div>
                ))}
            </div>
            <div className="w-2/3 p-4">
                <h3 className="font-bold">Chat Window</h3>
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    {/* Chat message list */}
                    <p>Chat messages appear here...</p>
                </div>
                <div className="mt-4">
                    <input 
                        type="text" 
                        placeholder="Type your message..." 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}
