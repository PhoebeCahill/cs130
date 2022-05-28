// where you receive a message
const handleReceivedMessages = e => {
    const data = JSON.parse(e.data);
    
    console.log('A user has just connected:', data);

        if (data.type === "login") {
            console.log("show all users in the right panel");
            alert(`${data.user_joined} has joined the chat!`)
        } else if (data.type === "disconnected") {
            console.log("show all users in teh right panel");
            alert(`${data.user_left} has left the chat!`)
        } else if (data.type === "chat") {
            console.log("draw a mesage to the screen!");
            // draw message to the screen (insert into chat )
            document.querySelector("#chat").insertAdjacentHTML("beforeend," `<div> <strong> ${data.username} </strong> ${data.text} </div>`);
            // can also send push notifications 
        };

    // This is Sarah's complete code for the chat:
    
    // if (data.type === 'login') {
    //     // a user has just connected...
    //     const firstLogin = document.querySelectorAll('#users-list li').length === 0;
    //     if (firstLogin) {
    //         showAllUsers(data);
    //     } else {
    //         addUser(data);
    //     }
    // } else if (data.type === 'disconnect') {
    //     // a user has just disconnected... (when a user leaves)
    //     console.log('A user has just disconnected:', data);
    //     removeUser(data);
    // } else if (data.type === 'chat') {

    //     showChat(data);
    // } else {
    //     console.error("Message type not recognized.");
    //     console.log(data);
    // }
};

// code that responds to messages received from the server:
const showAllUsers = data => {
    const template = data.active_users.map(user => {
        return `<li id="${user}">${user}</li>`
    }).join('');
    qs('#users-list ul').innerHTML = template;
};


const removeUser = data => {
    const removed = data.user_left;
    console.log(removed);
    document.getElementById(removed).remove();
};

const addUser = data => {
    const username = data.user_joined;
    const template = `
        <li id="${username}">
            ${username}
            <span class="login-context">has joined the chat</span>
        </li>
    `;

    if (!document.getElementById('data.user_joined')) {
        qs('#users-list ul').insertAdjacentHTML('beforeend', template);
    }
};

const showChat = data => {
    if (data.username === username) {
        qs("#chat").insertAdjacentHTML("beforeend", `<div class="right"><strong>You:</strong> ${data.text}</div>`);
    } else {
        qs("#chat").insertAdjacentHTML("beforeend", `<div class="left"><strong>${data.username}:</strong> ${data.text}</div>`);
    }
};