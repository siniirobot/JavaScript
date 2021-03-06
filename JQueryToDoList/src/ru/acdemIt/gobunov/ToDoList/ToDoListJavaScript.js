$(document).ready(function () {
    var inputTemp = $("#input");
    var inputTempButton = $("#input-button");
    var toDoList = $(".todo-list");

    inputTempButton.click(function () {
        var newText = inputTemp.val();

        if (newText.trim() === "") {
            alert("Введите текст заметки.");
            return;
        }
        var li = $("<li>");
        initLi(newText);
        toDoList.append(li);
        inputTemp.val("");

        function initLi(text) {
            li.html("<span></span>" +
                "<button type='button'>Стереть</button>" +
                "<button type='button'>Редактировать</button>");

            li.children().eq(0).text(text);
            li.children().eq(1).click(function () {
                $("#confirm-dialog").dialog({
                    autoOpen: false,
                    modal: true,
                    show: {effect: "blind", duration: 800},
                    hide: {effect: "explode", duration: 800},
                    buttons: [
                        {
                            text: "Да",
                            icon: "ui-icon-trash",
                            click: function () {
                                li.remove();
                                $(this).dialog("close");
                            }
                        },
                        {
                            text: "Нет",
                            icon: "ui-icon-cancel",
                            click: function () {
                                $(this).dialog("close");
                            }
                        }
                    ]
                });
                $("#confirm-dialog").dialog("open");
            });

            li.children().eq(2).click(function () {
                li.html("<input type='text' value='" + text + "'>" +
                    "<button type='button'>Отменить</button>" +
                    "<button type='button'>Сохранить</button>");

                var cancelButton = li.children().eq(1);
                var saveButton = li.children().eq(2);

                cancelButton.click(function () {
                    initLi(text);
                });

                saveButton.click(function () {
                    var newEditText = li.children().eq(0).val();

                    if (newEditText.trim() === "") {
                        initLi(text);
                        return;
                    }
                    initLi(newEditText);
                });
            });
        }
    });
});