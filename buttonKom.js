const nameElement = document.getElementById("inputName");
const textElement = document.getElementById("inputText");
const buttonElement = document.getElementById("buttonPush");
const ulElement = document.getElementById("ul");
const text = document.getElementById("comment-text");
const editButton = document.getElementById("edit-button");
const formHide = document.getElementById("form-add");
let commentsArray = [

];

const fetchArray = () => {

    fetch("https://wedev-api.sky.pro/api/v1/:kolesnikova-anastasiia/comments", {

        method: "GET",

    }
    ).then((response) => {
        if (response.status === 500) {
            throw new Error("Ошибка сервера")
        };
        return response.json();
    }).then((responseData) => {
        commentsArray = [];
        responseData.comments.map((element) => {
            const newDate = new Date(element.date);
            const elementObj = {
                comment: element.text,
                name: element.author.name,
                like: element.likes,
                userLike: element.isLiked,
                date: newDate.toLocaleString()

            }
            commentsArray.push(elementObj);

        }


        )
        document.getElementById("loadingFeed").style.display = 'none';
        
        renderComments();
    }).catch((Error) => {
        if (Error.message === 'Failed to fetch') {
            alert("Проблемы с интернетом");
        } else {
            alert(Error.message)
        }
    })
};
fetchArray();


const arrayPost = () => {
    document.getElementById("form-add").style.display = 'none';
    document.getElementById("loadingMessage").style.display = 'block';




    fetch("https://wedev-api.sky.pro/api/v1/:kolesnikova-anastasiia/comments", {
        method: "POST",
        body: JSON.stringify({
            text: textElement.value
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;"),
            name: nameElement.value
                .replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;"),
                forceError: true,
        })



    }).then((thenresponse) => {
        if (thenresponse.status === 500) {
            arrayPost();
            // throw new Error("Ошибка сервера");
        } else if (thenresponse.status === 400) {
            throw new Error("Имя или текст комментария должны иметь 3 и более символов");
        }
        if (thenresponse.ok) {


            nameElement.value = '';
            textElement.value = '';
            buttonElement.disabled = true;
        }
        fetchArray();
    }).catch((cathError) => {
        if (cathError.message === 'Failed to fetch') {
            alert("Проблемы с интернетом");
        } else {


            alert(`${cathError.message}`)
        }
    })
        .finally(() => {


            setTimeout(function () {
                document.getElementById("form-add").style.display = 'flex';
                document.getElementById("loadingMessage").style.display = 'none';

            }, 1000);

        });

};

const initEdit = () => {
    let edit = document.querySelectorAll('.edit-button');
    let textComment = document.querySelectorAll('.comment-text');
    for (const editButoon of edit) {
        const index = editButoon.dataset.edit;
        const isEditValue = commentsArray[index].isEdit;
        console.log(isEditValue);
        for (const editButoon of edit) {
            const index = editButoon.dataset.edit;
            const isEditValue = commentsArray[index].isEdit;
            if (!isEditValue) {
    
    
    
                editButoon.addEventListener('click', (event) => {
                event.stopPropagation();    
                const index = editButoon.dataset.edit;
    
    
                commentsArray[index].isEdit = true;
                renderComments();
                
            })
        } else {
                editButoon.addEventListener('click', (event) => {
                    let textComment = document.querySelector('.text-comment');
                    event.stopPropagation();
                    const index = editButoon.dataset.edit;
                const comment = commentsArray[index].comment;

                const value = document.querySelector('input').value;
                commentsArray[index].comment = value;
                commentsArray[index].isEdit = false;
                renderComments();
            })
        }
    }
}
};
const initDeleteButtonsListeners = () => {
    const deleteButtonsElements = document.querySelectorAll(".delete-button");
    for (const deleteButtonsElement of deleteButtonsElements) {
        deleteButtonsElement.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log("Удаляю элемент...");
            const index = deleteButtonsElement.dataset.index;
            console.log(index);
            commentsArray.splice(index, 1);
            renderComments();



        });
    };
};


initDeleteButtonsListeners();





const likes = () => {
    const likeButtons = document.querySelectorAll('.like-button');
    for (const likeButton of likeButtons) {
        likeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            const index = likeButton.dataset.index;
            if (commentsArray[index].userLike === false) {
                commentsArray[index].paint = '-active-like';
                commentsArray[index].like += 1;
                commentsArray[index].userLike = true;
            } else {
                commentsArray[index].paint = '';
                commentsArray[index].like -= 1;
                commentsArray[index].userLike = false;
            }
            renderComments();
        });
    };
};
const answer = () => {
    const answerElement = document.querySelectorAll(".comment");
    for (const answerElements of answerElement) {
        answerElements.addEventListener('click', (event) => {
            event.stopPropagation();

            const answerIndex = answerElements.dataset.answer;
            const addFormText = document.querySelector(".add-form-text");

            addFormText.value = `${commentsArray[answerIndex].name} \n ${commentsArray[answerIndex].comment}`


            renderComments();






        });

    };
};

answer();





const renderComments = () => {
    const commentsHtml = commentsArray.map((item, index) => {
        return `
        <li class="comment" data-answer="${index}">
                <div  class="comment-header" >
                  <div>${item.name}</div>
                  <div>${item.date}</div>
                </div>
                <div class="comment-body">
                ${!item.isEdit ? `<div data-comment='${index}' class="comment-text" >
                ${item.comment}
                
                </div > ` : `<input value='${item.comment}'>`}                  
                </div >
    <div class="comment-footer">
    
        <button data-answer="${index}" class="answer-button">Ответить</button>
        <button data-edit="${index}" class="edit-button">${!item.isEdit ? "Редактировать" : "Сохранить"}</button>
        <button data-index='${index}' class="delete-button">Удалить</button>
        
        <div class="likes">
            <span class="likes-counter">${item.like}</span>
            <button data-index='${index}' class="like-button ${item.paint}"</button>
    </div>
                </div >
                
              </li >
    `})
          .join('');
          ulElement.innerHTML = commentsHtml;
          likes();
          initDeleteButtonsListeners();
          initEdit();
      
          answer();
      
      
      };
      renderComments();

buttonElement.disabled = true;
nameElement.addEventListener('input', () => {
    if ((nameElement.value === '') || (textElement.value === '')) {
        buttonElement.disabled = true;
        return;
    }
    else {
        buttonElement.disabled = false;
        return;
    }
});

textElement.addEventListener('input', () => {
    if ((textElement.value === '') || (nameElement.value === '')) {
        buttonElement.disabled = true;
        return;
    }
    else {
        buttonElement.disabled = false;

        return;
    }
})

    function fieldSubmit(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("buttonPush").click();
        }
    }
    document.getElementById("textElement")
    document.addEventListener("keyup", fieldSubmit);
    function buttonHide() {
        if (!textElement.value || !nameElement.value) {
            buttonElement.disabled = true;
        } else {
            buttonElement.disabled = false;
        };
    
    };
    nameElement.addEventListener("input", buttonHide);
    textElement.addEventListener("input", buttonHide);
    
    buttonElement.addEventListener('click', () => {
        nameElement.classList.remove('error');
        textElement.classList.remove('error');
    
        if ((nameElement.value || textElement.value) === '') {
            nameElement.classList.add('error');
            textElement.classList.add('error');
            return;
        }
    const currentDate = new Date();
    const dateString = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()} `;

    arrayPost();
    renderComments();

    
});

buttonElement.disabled = true;