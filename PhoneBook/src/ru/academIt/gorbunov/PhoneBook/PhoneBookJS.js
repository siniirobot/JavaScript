$(function () {
    var tableBody = $("#table-body");
    var addButton = $("#add-button");

    addButton.click(function () {
        $('#add-person-modal').modal('show');
        $("#phone").mask("+7(999)999-99-99");
        var form = document.querySelector('.needs-validation');

        var addPersonButton = $("#button-save-data");
        addPersonButton.click(function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                var tr = $("<tr>");
                var surname = $("#surname");
                var name = $("#name");
                var phone = $("#phone");
                tr.html("<td>" + surname.val() + "</td><td>" + name.val() + "</td><td>" + phone.val() + "</td>");
                tableBody.append(tr);
                surname.text("");
                name.text("");
                phone.text();
                $('#add-person-modal').modal('hide');

            }
        });
    });

});