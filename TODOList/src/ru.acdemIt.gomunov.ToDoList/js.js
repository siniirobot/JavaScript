document.addEventListener("DOMContentLoaded", function () {
    var inputTemp = document.getElementById("input");
    var inputTempButton = document.getElementById("input-button");
    var toDoList = document.getElementById("todo-list");

    inputTempButton.addEventListener("click", function () {
        var newText = inputTemp.value;

        if (newText.trim() === "") {
            return;
        }

        var li = document.createElement("li");

        function createLi(text) {
            li.innerHTML =
                "<span></span>" +
                "<button type='button'>Стереть</button>" +
                "<button type='button'>Редактировать</button>";

            li.children[0].textContent = text + "   ";
            li.children[1].addEventListener("click", function () {
                toDoList.removeChild(li);
            });

            li.children[2].addEventListener("click", function () {
                li.innerHTML =
                    "<input type='text' placeholder='Введите правки'>" +
                    "<button type='button'>Отменить</button>" +
                    "<button type='button'>Сохранить</button>";
                var cancelButton = li.children[1];
                var saveButton = li.children[2];

                cancelButton.addEventListener("click", function () {
                    createLi(text);
                });

                saveButton.addEventListener("click", function () {
                    var newEditText = li.children[0].value;

                    if (newEditText.trim() === "") {
                        createLi(text);
                        return;
                    }

                    createLi(newEditText);
                })
            });
        }

        createLi(newText);
        toDoList.appendChild(li);
        inputTemp.value = "";
    });
});
