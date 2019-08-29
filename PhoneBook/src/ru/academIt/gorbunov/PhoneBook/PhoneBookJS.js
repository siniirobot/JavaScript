$(function () {
    var tableBody = $("#table-body");
    var addButton = $("#add-button");
    var index = 1;

    addButton.unbind('click').click(function () {
        var addPersonModal = $("#add-person-modal");
        var form = document.querySelector(".needs-validation");
        var surname = $("#surname");
        var name = $("#name");
        var phone = $("#phone");
        var savePersonButton = $("#button-save-data");

        addPersonModal.modal("toggle");
        phone.mask("+7(999)999-99-99");

        savePersonButton.unbind('click').click(function () {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add("was-validated");
            } else {
                function antiInjection(html) {
                    return $($.parseHTML(html)).text();
                }

                var tr = $("<tr>").html(
                    "<td class=\"id\"><p>" + index + "</p></td>" +
                    "<td><p>" + antiInjection(surname.val()) + "</p></td>" +
                    "<td><p>" + antiInjection(name.val()) + "</p></td>" +
                    "<td><p>" + phone.val() + "</p></td>" +
                    "<td><button type=\"button\" class=\"btn bg-danger\">Удалить</button></td>");
                var confirmDeleteButton = tr.find(".btn");

                confirmDeleteButton.unbind('click').click(function () {
                    var confirmDeleteModal = $("#delete-person-modal");
                    var confirmDeleteButton = $("#confirm-delete-button");
                    var cancelDeleteButton = $("#cancel-delete-button");

                    confirmDeleteModal.modal("toggle");

                    confirmDeleteButton.unbind('click').click(function () {
                        tr.remove();
                        index = 1;

                        $("tr", tableBody).each(function (i, val) {
                            $(val).children().eq(0).text(index);
                            index++;
                        });
                        confirmDeleteModal.modal("toggle");
                    });

                    cancelDeleteButton.unbind('click').click(function () {
                        confirmDeleteModal.modal("toggle");
                    })
                });
                index++;
                tableBody.append(tr);
                addPersonModal.modal("toggle");
                $("input", form).val("");
            }
        });
    });
});