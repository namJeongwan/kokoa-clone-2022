import { apiKey } from "./api-key.js";

const chatGPTInfo = {
    url: "https://api.openai.com/v1/chat/completions",
    model: "gpt-3.5-turbo",
}

// Own variable
const messageRowObject = {
    messageRowClass: 'message-row',
    messageRowOwnClass: 'message-row--own',
    messageRowContinousClass: 'message-row--continuous',
    messageRowContentClass: 'message-row__content',
    messageRowInfoClass: 'message__info',
    messageBubbleClass: 'message__bubble',
    messageTimeClass: 'message__time',
    messageAuthorClass: 'message__author',
    chatGPTImageURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAoAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIFBgcEA//EAEEQAAIBAwEDCQYCCAQHAAAAAAECAwAEEQUSITEGEyJBUWFxgZEUMjOhsdEjwUJDUlNiorLwBzaS8SQmY3JzguH/xAAaAQACAwEBAAAAAAAAAAAAAAABBQIDBAAG/8QAKxEAAgICAQMDBAAHAAAAAAAAAAECAwQRMQUSIRNBUSIyYXEGFBUkgZHh/9oADAMBAAIRAxEAPwDrHuim9dO/RFNqWzSPFIHfTKcKBw6lQo0dnBo1z3M0kXNrFHtyO2FUnA4En6V428FxfRwyttNbTsS8bdHYUe7jr6t9Z78uqhfWyUYOXB27aA4LKDjOCertoxSxyoHjcMh4MpyDXOukSvDIJnXnTIMOBnMY3YPiM+Zp11pUgE89uQ0/vwITgK3WM9/X41h/rWO5aLPQlo6qVcCXMsVx7NcIzOGCmQLhTkZH0I8q7uqmcLYWR7ovZS4tchpU0UansAaQogUsb67ZwqRo0KAAgUn9xvA0qD/DbwNcRZ4AdEUMVSbblJqUGyJGjuE7JFwfUfY1YNM5QWl+6wnagnPCN+vwPA+HGq43QlwzTZTZBbaJTG+iKO6lVhSEUaAoTTRW8TSzyLHGm9mY4AoHHno9vG0sryAtPDM6hsngekPkQKmAABgDAqB5PapbX2o3qWpZl2UbaZdnaO8EgeQqf48K8R1TuWVJNjCr7EKiKFEUtZacGsD8O2PDZnX6EfnTRnG+jyhlS3003Egbm4ZFdyq5IAO84rztriG5hEtvIskbcGU5Few6FLeN/kxZC+ofRpUacsoCKVIUqAA03G+jSonBFJx+G3hSFGT4beBriLMqA3U0j1ByMdtPA3CgRSffk9D7Fq5Oay90htbjakuEGQ/7a9/eKndtv2D8vvVC0V2i1e0ZTvL7PkRitCplRNzh5FOTWoT8HhcXSWtvJPOCscYLMd3D1rP77UbjWrj2m43QqfwYOpe899Wfl2zLoBCnAeVVbw4/lVTtxiBB3VXlTcVpF2JVGX1MnuRMhj18p1SW5z5MPuauisryNdXMuxGjlY1LYAxuz4ms/wCT0nM8oLFupnKHzB+1aVppt7C4kaeBn2mLJMF2igP6OOIHhSW6iFuQoyl27XLJZEnBtpHMl3bXyTR2lyWMR2JGiyTG3YT1Ghpc1zcB2ZHmZWKARLldxxna4ZPHGanJtWgWM+yo0spHR6BUA9pJqIiT2WFzLdyBXfbcmTZG0eJ3dvGoZOJhYuoOblv41szwssn51oZqkbXavpU8N3FJcQsVaOMsAOByRkeRrP8ARL+XS7/YLbULOY5VHDOcbQ7PtWgXuu3tjoV7JaBpDHkxzTHIA3b8cTg5xWYKDkEkk5ySeutuPCiiKePJvfz7GilTsUlYjSNtz+qPqKW3J+5PqKfGcxr4UeqnXKF78M89uT90f9QoiSQ/qG9R96fTs0Dhm2/7o+ooc4/7pvUV60DXAPMSv+5b1H3pNLIUI5h+B35X708Gix/DbwNcBmXDhSOKK8BTTSd8noPY9dPOzqNqeH4yD51owrN7U4vbU9k8f9QrSAa34n2sXZv3IgOXg/5fP/lT61Urf4KeFW/lyM8nZT2SJ/UKqFuPwE/7ahl+xbhfayx8ktMhvTPeyo0sltKqxRq5XBwDtEjxq9xAc2BtbWNxOc1lEF1c2Zd7S4lhdlwSjYzWk8npTcaJZytjLQqTjrON9ee6nXLSnvwSsTUvJIYpwGeNcx9qd2AMcSA7j77H6Y+dedy/sdtLcT3rqsa7TMUXd5AUqVLb8PyQ7j01iAXGkXkW7pQuPlWV8Uz3ZqwaryrudQtDbQw+zq64kYtliOsDsqAcdA47Ke4VM6Ids+dl9cWttmk2xBt4iOBQH5U814acwfT7Zh1xKflXtXpVwhPLlio0KQoAHA0DxpUjRAHdQb4beBpUn+G3ga4DMwXgPCgaQO6kaTvk9D7CiOLiA9kqH+YVpQrNUOHQ9jqfnWlDhW7E4YuzfuRCct/8t3Hc6H+YVTLZibePALOQAqjiTV15af5au/FP6xVa5GWPt+oRL08Im0WBwFXO8duTuHhmhmaUe58IOJPtizot9Fmddq5kEef0FGT68KsNjqMmm2MGnRRhiq7McrHcAO0dtSd/ooWMyWJYOBnm3bKt3b94qvTupkgduiqBnYndjdjf60jVqyfyvg3JV2L9HbJLcTEmeeVs9QbA9BXPNCrR7AgWRW3Mp3DFc73skmfZ4wq/tydflx9cUwNM5y9xJ4KAB9KZY3Rc21KSjpfnwZLep4VD7d7f4OabRpdsm32Qh/VlicHxxUfPDLA2xNGyE8M8D51N9PHxpf8AXTJedeMxuyTxniky8fAjh6Gt0ujZsPLSf6KY9Zw5vW2iyaKdrSLM/wDRT6V11C8n9Qj2F09gUeJcIG447P8A711NVbHetNGWfOxUqVGiRCMUjSFA1wBDjSf3G8DSHbQf3G8DRAzLxwFKivCgxxSh8noEDgQe+tMXhWZMcodnGcdtaPZTrcWkM0fuyIGHpW3E9zBnLhkdywG1ybve5VP8wp/+HWn+yaGtxIPxbo7ZP8P6I9N/nXpr8PtWkz2wJBn2YwR1FmAqwWkSwQJFGMKigAdmKW9du7alBe5Vj+556veexWTSLjnG6EYPWx4ffyqgxJzrsxdmjDnZz+kcnpepOPWpTlbqofVjYI2+C2Zz3O2PoPrXEgVFVRgAbgKY/wAL9Ojr1bF+TF1XJlXWoQ8dx5yTqjc2ql5MZ2V6h39lHnZEGWgbH8O81721tNczNHZQGR85cjcF8T/ZqUTk5fGPLS26tj3QWO/xx+VemyeqYmNLttsSfwJasS2xbjHZExSpKm3GcinGo6aWaGZo5A0LM+wwfB2G4HB/v0rvs7WSZ+ZtInlfi2N+O8k1rWTUoepKSUfkrdMu7tS8jHJikjuYxmSA7ajtHWPMVboJFmhjlQ5V1DDwqEn5PagbZyyROcfDjkO0e4HA30eTupK6rYTdGaNdlAwwWA3eoxvpLk5GNlPvx5KWudDTFjbUuyxa+CdNGhRrGbBUDSpUDhy8Ka/w28KWTQf4beFEDMuCKf8AekUj7BUSqXLbgsx8ATXqthfye5Z3beETH8qwei/keeoiQ2o13ZWpzkxrcdtMLCaQc3I34Rz7rdngfrVWTSNRfhZT8CekuOHHjUlpPJrU5NQh52HmUjdZGZnG4A9me6rKq3CW0UXzhOOmaDL072yTq5wv44U/mRU2lV+9l9kaK6OAIwy7TcFyNxPmMV2X11cC1YW8qxzGYIjFdrHDiOukvV6LLcmKX6M1LSgZ1qlwJdYvizbEwuHyG7AcDPdgCiNS2bYLOpJQgh03g47esV569Zave6tNcy2W08hxm3XKtsjGe3q66jW0y/AIawuh4wN9q9Bi2W43H+g3Y9WVWu7lGockNSiltFtcKHVAwZeEoPFvHPGrHWM8m2utP16xdknjj5zYZWDBcNu4edbGDmvJ9bojDI9SHEvJOmMoQ7JexRuXQitdQBKsRcor9EZwVIyfTZqS5IavbNbx2xVFZySJFORI3f393dUV/iiHL6eY9rOHBC+VUeF7u0lSeLn1KOH3ZwSDn8qeU/3nTY0WfHj/AKU/y3bY7YP9m75FVDlhEum39lrMUatsyFZVLbOSVIBz4eu6rPaS89axS/tqGqA/xAgkuOTxjhQvJzyYUcTvrzvTrJ05aSfvpl84xkvJ66Tq1rqsJe2JDLudG3FT/fXUgDVN5C6Xe2U9zNdwNEkiKq7WOlvNXGvap7Rjsioy0hGlQpUSsNBx+G3gaNBz+G3hRAxinCjG6ltVFG6mAA2/kKPtMxHv/IVImc+0XhyD70Erf3612Wrf8a/fGPqahpJXS2typxtWb53dy1IF2jugUOCYt/rUm+StcnfqRBsZQwBDAKQe84/OufTIAGlJeRwjgRh2yF6I+/HjXLcTyOFRmypkTd/7CmC5mhuJljfZXb7B2Cq3CMvLRPbR22jZlt++Vz8mqXzVct5XW0s5A3SxnPka6TeXGz8Q7+4VKT8gR3Xoa4EkUS7oOammbfuXbHr7p9KmY2VkVkYMpG4jrqB5NXU55UBC/RktTtjA37JGP6j61aNQ060gUSwRc0zt0hGxVSe3ZBxnvpT1XpzyYqyMtaLabu1uLIK/kA1eANnfCw4bslhjf1cD6V4XkU11dW9jahTLMshG0cAAAZPzqW5Q28Vlooltk2ZJJo9tySxO/tNVTULy4gvdPuIpSkqzooYAcGYAjzFbMGj0aIVkbJ9zbLNpeylhBFnLxII3HWGAwQa59fObJFQbThw+yOOyvSY+QBq0NY2t24e4t43fHv4w3Dt41H69bw2ejXj2sSROUCllXBIJAO/zpbX0NxyfV7/CeyTydw1ogNOfas07iRnwNdNRNjK6o6qcASuAMfxGutZXOOl1dlOio6smlXkrHZ40QT20Dj1oSfDbwpoNJ/cbwNcA/9k=",
    chatGPTAuthorName: 'Simpson'
};

function handleEnter(event) {
    if (event.keyCode == 13 &&
        !event.shiftKey &&
        event.type == 'keydown') {
        messageSubmit(event);
    } else {
        resizeTextArea();
    }
}

function messageSubmit(event) {
    event.preventDefault();
    const textArea = document.querySelector('.reply textarea');
    const textAreaVal = textArea.value
    textArea.value = ""

    if (textAreaVal != "") {
        createOwnMessageBubble(textAreaVal.split('\n'));
        resizeTextArea()
    }
}

function getLastElem() {
    return document.querySelector('.main-screen, .main-chat').lastElementChild;
}

function isContinous(lastElem, comparedTime) {
    console.log(lastElem);
    const lastMessageTime = lastElem.querySelector('.message__time');
    if (comparedTime === lastMessageTime.innerText) {
        return true;
    } else { 
        return false;
    }
}

function sendToGPT(sendMsg) {
    let outputText = "";

    const oHttp = new XMLHttpRequest();
    oHttp.open("POST", chatGPTInfo.url);
    oHttp.setRequestHeader("Accept", "application/json");
    oHttp.setRequestHeader("Content-Type", "application/json");
    oHttp.setRequestHeader("Authorization", `Bearer ${apiKey}`);

    oHttp.onreadystatechange = () => {
        if (oHttp.readyState === 4) {
            let receivedMessage = {};

            try {
                receivedMessage = JSON.parse(oHttp.responseText);
            } catch (e) {
                outputText = `Error: ${e.message}`;
            }

            if (receivedMessage.error && receivedMessage.error.message) {
                outputText = `Error: ${receivedMessage.error.message}`;
            } else if (receivedMessage.choices && receivedMessage.choices[0].message.content) {
                outputText = receivedMessage.choices[0].message.content.replace('\n\n', '');
                console.log(outputText);
            }

            createGPTMessageBubble(outputText.split('\n'))
        }
    };

    const sendData = {
        model: chatGPTInfo.model,
        messages: [
            {
                "role": "user",
                "content": `${sendMsg}\nPlease separate your answer by new line.\nbut if you don't need a seperate line, don't put it your answer`
            }
        ]
    }

    oHttp.send(JSON.stringify(sendData));
}

function createGPTMessageBubble(msgs) {
    const mainScreen = document.querySelector('.main-screen, .main-chat')
    const messageRow = document.createElement('div');
    messageRow.classList.add(messageRowObject['messageRowClass']);

    const profileImg = document.createElement('img');
    profileImg.src = messageRowObject['chatGPTImageURL']

    const messageRowContent = document.createElement('div');
    messageRowContent.classList.add(messageRowObject['messageRowContentClass'])

    const messageAuthor = document.createElement('div');
    messageAuthor.classList.add(messageRowObject['messageAuthorClass']);

    const messageInfo = document.createElement('div');
    messageInfo.classList.add(messageRowObject['messageRowInfoClass']);

    const messageBubble = document.createElement('div');
    messageBubble.classList.add(messageRowObject['messageBubbleClass']);
    msgs.forEach(msg => {
        const _p = document.createElement('p');
        _p.innerText = msg;
        messageBubble.appendChild(_p);
    });

    const messageTime = document.createElement('span');
    messageTime.classList.add(messageRowObject['messageTimeClass']);
    const now = new Date();
    messageTime.innerText = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    const lastMessageRow = getLastElem();
    if(lastMessageRow.classList.contains(messageRowObject['messageRowContinousClass'])) {
        lastMessageRow.classList.remove(messageRowObject['messageRowContinousClass']);
    }

    // Make message info
    messageInfo.appendChild(messageBubble);
    messageInfo.appendChild(messageTime);

    // Make message Content
    messageRowContent.appendChild(messageAuthor);
    messageRowContent.appendChild(messageInfo);

    // Make message row
    messageRow.appendChild(profileImg);
    messageRow.appendChild(messageRowContent);

    mainScreen.appendChild(messageRow);

    // ScrollDown
    scrollToBottom();

}

function createOwnMessageBubble(msgs) {
    const mainScreen = document.querySelector('.main-screen, .main-chat')
    
    const messageRowOwn = document.createElement('div');
    messageRowOwn.classList.add(messageRowObject['messageRowClass']);
    messageRowOwn.classList.add(messageRowObject['messageRowOwnClass']);

    const messageRowContent = document.createElement('div');
    messageRowContent.classList.add(messageRowObject['messageRowContentClass'])

    const messageInfo = document.createElement('div');
    messageInfo.classList.add(messageRowObject['messageRowInfoClass']);

    const messageBubble = document.createElement('div');
    messageBubble.classList.add(messageRowObject['messageBubbleClass']);
    msgs.forEach(msg => {
        const _p = document.createElement('p');
        _p.innerText = msg;
        messageBubble.appendChild(_p);
    });

    const messageTime = document.createElement('span');
    messageTime.classList.add(messageRowObject['messageTimeClass']);
    const now = new Date();
    messageTime.innerText = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    // 연속되는 (같은 시간) 메세지라면 시간 지우고 margin 지우기
    const lastMessageRow = getLastElem();
    if (isContinous(lastMessageRow, messageTime.innerText) && 
    lastMessageRow.classList.contains(messageRowObject['messageRowOwnClass'])) {
        // remove message__time
        const parentMessageTime = lastMessageRow.querySelector('.message__info'); 
        const childMessageTime = parentMessageTime.querySelector('.message__time');
        parentMessageTime.removeChild(childMessageTime);

        // margin 적용
        messageRowOwn.classList.add(messageRowObject['messageRowContinousClass']);

        // 직전 메시지에 클래스 없으면 그것도 추가
        if (!lastMessageRow.classList.contains(messageRowObject['messageRowContinousClass'])) {
            lastMessageRow.classList.add(messageRowObject['messageRowContinousClass']);
        }
    }

    // Make message info
    messageInfo.appendChild(messageBubble);
    messageInfo.appendChild(messageTime);

    // Make message Content
    messageRowContent.appendChild(messageInfo);

    // Make message row
    messageRowOwn.appendChild(messageRowContent);

    mainScreen.appendChild(messageRowOwn);

    // ScrollDown
    scrollToBottom();

    // Send To GPT
    sendToGPT(msgs.join('\n'));
}

function scrollToBottom() {
    const mainScreen = document.querySelector('.main-screen, .main-chat');

    window.scrollTo(0, (mainScreen.scrollHeight-500));

    mainScreen.scrollTop = mainScreen.scrollHeight;
    console.log(mainScreen.scrollTop, mainScreen.scrollHeight);
}

function resizeTextArea() {
    const textArea = document.querySelector('.reply textarea');
    textArea.style.height = '1px';
    textArea.style.height = (12 + textArea.scrollHeight) + 'px';
}

document.addEventListener("DOMContentLoaded", () => {
    const messageInputForm = document.querySelector('.reply');
    const messageInput = messageInputForm.querySelector('textarea');

    ["keydown", "keyup"].forEach(evt => {
        messageInput.addEventListener(evt, handleEnter);
    })
    messageInputForm.addEventListener('submit', messageSubmit);
    messageInput.addEventListener('onchange', () => {
        messageInput.style.height = '1px';
        messageInput.style.height = (12 + messageInput.scrollHeight) + 'px';
    });
});