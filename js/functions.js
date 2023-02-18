
function login() {
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;
    console.log(mes.toLowerCase())
    if (mes == "enero" && dia == 2) {
        Swal.fire({
            title: "Correcto!!",
            text: "Datos correctos",
            icon: "success",
            showConfirmButton: false,
        })
        window.location = 'index.html'
    } else {
        Swal.fire({
            title: "No lo sabes?",
            text: "Intentalo de nuevo <3",
            icon: "error",
             showConfirmButton: true,
            buttonsStyling: false,
            reverseButtons: true,
            customClass: {
                confirmButton: 'btn btn-danger',
                cancelButton: 'btn btn-danger'
            },
        })
    }

}