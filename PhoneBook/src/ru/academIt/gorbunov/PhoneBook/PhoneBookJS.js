$(function () {
    var tableBody = $("#table-body");
    var addButton = $("#add-button");
    var index = 1;

    addButton.click(function () {
        var addPersonModal = $('#add-person-modal');
        var form = document.querySelector('.needs-validation');
        var surname = $("#surname");
        var name = $("#name");
        var phone = $("#phone");
        var addPersonButton = $("#button-save-data");

        addPersonModal.modal('show');
        phone.mask("+7(999)999-99-99");
        form.reset();

        addPersonButton.click(function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                var tr = $("<tr>");
                tr.html("<td>" + index + "</td>" +
                    "<td>" + surname.val() + "</td>" +
                    "<td>" + name.val() + "</td>" +
                    "<td>" + phone.val() + "</td>" +
                    "<td><button type='button' class='btn bg-danger'>Удалить</button></td>");
                var deleteButton = tr.children().eq(4).children().eq(0);
                deleteButton.click(function () {
                    tr.remove();
                    index = 1;
                    tableBody.each(function (i, elem) {
                        elem.children(0).value(index++);
                    })
                });
                index++;
                tableBody.append(tr);
                addPersonModal.modal('hide');
            }
        });
    });

});