const btnTema = document.getElementById("btn-tema");
if (btnTema) {
    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("claro");
    });
}

const navbar = document.getElementById("navbar");
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

const formContacto = document.getElementById("form-contacto");
const errorTexto = document.getElementById("mensaje-error");

if (formContacto) {
    formContacto.addEventListener("submit", (e) => {
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

                if (!email.includes("@") || !email.includes(".")) {
            e.preventDefault();
            errorTexto.textContent = "Por favor, ingresá un correo electrónico válido.";
            return;
        }

        if (mensaje.length < 10) {
            e.preventDefault();
            errorTexto.textContent = "El mensaje debe tener al menos 10 caracteres.";
            return;
        }

        errorTexto.textContent = "";
    });
}
const tarjetas = document.querySelectorAll(".proyecto-card");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            entrada.target.classList.remove("oculto");
        }
    });
}, { threshold: 0.15 });

tarjetas.forEach((tarjeta) => observador.observe(tarjeta));