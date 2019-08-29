$(function () {
    var tableBody = $("#table-body");
    var addButton = $("#add-button");
    var index = 1;

    addButton.click(function () {
        var addPersonModal = $("#add-person-modal");
        var form = document.querySelector(".needs-validation");
        var surname = $("#surname");
        var name = $("#name");
        var phone = $("#phone");
        var savePersonButton = $("#button-save-data");

        addPersonModal.modal("toggle");
        phone.mask("+7(999)999-99-99");

        savePersonButton.click(function () {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add("was-validated");
            } else {
                var tr = $("<tr>").html(
                    "<td class=\"id\"><p>" + index + "</p></td>" +
                    "<td><p>" + surname.val() + "</p></td>" +
                    "<td><p>" + name.val() + "</p></td>" +
                    "<td><p>" + phone.val() + "</p></td>" +
                    "<td><button type=\"button\" class=\"btn bg-danger\">Удалить</button></td>");
                var deleteButton = tr.children().eq(4).children().eq(0);

                deleteButton.click(function () {
                    var confirmDeleteModal = $("#delete-person-modal");
                    var confirmDeleteButton = $("#confirm-delete-button");

                    confirmDeleteModal.modal("toggle");

                    confirmDeleteButton.click(function () {
                        tr.remove();
                        index = 1;

                        $("tr", tableBody).each(function (i, val) {
                            $(val).children().eq(0).text(index++);
                        });
                        confirmDeleteModal.modal("toggle");
                    });
                });
                index++;
                tableBody.append(tr);

                $("input", form).each(function (i, val) {
                    $(val).val("");
                });
                addPersonModal.modal("toggle");
            }
        });
    });
});