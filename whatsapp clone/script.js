document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const message = messageInput.value;
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.className = 'message';
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            messageInput.value = '';
        }
    });
});
