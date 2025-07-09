$(document).ready(function () {


    $(".nav-list li a").on("click", function (e) {
        e.preventDefault(); 
    });

    const Category = {
        All: "All",
        Web: "Web",
        Mobile: "Mobile"
    };

    const projects = {
        All: [
            {
                name: "Sistema de reservaciones",
                description: "Aplicación web para la gestión de reservas de villas, que permite buscar disponibilidad, administrar villas, gestionar servicios y consultar las reservas realizadas.",
                technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, C#, ASP.NET, SQL",
                imageUrl: "Images/BookingSystemImage.png",
                githubLink: "https://github.com/Charly7017/BookingSystem",
                category: "Web"
            },
            {
                name: "Blog con IA",
                description: "Una plataforma de blogs que permite a los usuarios crear blogs manualmente o generarlas usando ChatGPT. También pueden comentar y explorar entradas creadas por otros.",
                technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, C#, ASP.NET, SQL",
                imageUrl: "Images/blogaiImage.png",
                githubLink: "https://github.com/Charly7017/BlogAI",
                category: "Web"
            },
            {
                name: "Seguimiento de pagos",
                description: "Permite un control detallado de las facturas recibidas, los pagos pendientes y las fechas de vencimiento.",
                technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, C#, ASP.NET, SQL",
                imageUrl: "Images/accountspayablesystemImage.png",
                githubLink: "https://github.com/Charly7017/CuentasPorPagar",
                category: "Web"
            },
            {
                name: "iContainer",
                description: "Como practicante en TAMSA, participé en el desarrollo de esta aplicación móvil.",
                technologies: "C#, .NET MAUI",
                imageUrl: "Images/iContainerImage.png",
                githubLink: "https://play.google.com/store/apps/details?id=com.tenaris.iContainer&hl=es_419",
                category: "Mobile"
            },
            {
                name: "Manejador de tareas",
                description: "Sistema que permite a los usuarios gestionar tareas, anexar archivos y registrar pasos detallados.",
                technologies: "HTML, CSS, Bootstrap, JavaScript, jQuery, C#, ASP.NET, SQL, Knockout.js",
                imageUrl: "Images/TaskManagerImage.png",
                githubLink: "https://github.com/Charly7017/ManejoTareas",
                category: "Web"
            },
        ]
    };

    (async function loadDefaultProjects() {
        const data = await bringData(Category.All);
        printData(data.projects);
    })();

    const list = document.querySelectorAll(".nav-list li");
    let miniProjectsHTML = "";

    $(".navigation").click(async function (e) {
        const target = $(e.target).closest("li");
        const navSibling = $(e.target).closest(".container").find("#results").parent();

        let data = {};

        if (target.hasClass("btnBringWebProjects")) {
            navSibling.removeClass("justify-content-center");
            data = await bringData(Category.Web);
        } else if (target.hasClass("btnBringMobileProjects")) {
            navSibling.removeClass("justify-content-center");
            data = await bringData(Category.Mobile);
        } else if (target.hasClass("btnBringAllProjects")) {
            navSibling.removeClass("justify-content-center");
            data = await bringData(Category.All);
        } else if (target.hasClass("btnBringMiniProjects")) {
            $("#results").empty();
            miniProjectsHTML = templateMiniProjectsCard(
                "Mini proyectos",
                "En este repositorio muestro algunos mini proyectos"
            );
            $("#results").append(miniProjectsHTML);
            navSibling.addClass("justify-content-center");
            return;
        } else {
            return;
        }

        printData(data.projects);
    });

    function templateMiniProjectsCard(title, description) {
        return `
            <div class="col reveal-project">
                <div class="cardProjects">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                        <p class="card-text">HTML, CSS, JavaScript, jQuery</p>
                    </div>
                    <div class="card-footer">
                        <a target="_blank" class="btnGithub" href="https://github.com/Charly7017/MiniProjects">
                            <i class="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>`;
    }

    async function bringData(type) {
        const all = projects.All;
        if (type === Category.All) {
            return { projects: all };
        }
        return {
            projects: all.filter(p => p.category.toLowerCase() === type.toLowerCase())
        };
    }

    function printData(projects) {
        $("#results").empty();
        projects.forEach(function (project) {
            const projectHTML = `
                <div class="col reveal-project">
                    <div class="cardProjects">
                        <img src="${project.imageUrl}">
                        <div class="card-body">
                            <h5 class="card-title">${project.name}</h5>
                            <p class="card-text">${project.description}</p>
                            <p class="card-text"><small>${project.technologies}</small></p>
                        </div>
                        <div class="card-footer">
                            <a target="_blank" class="btnGithub" href="${project.githubLink}">
                                <i class="bi bi-github"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
            $("#results").append(projectHTML);
        });
    }

    list.forEach((item) => {
        item.addEventListener("click", function (e) {
            list.forEach((li) => li.classList.remove("active"));
            e.currentTarget.classList.add("active");
        });
    });
});
