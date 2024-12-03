export const productos = [
    // ANTES DE AÑADIR DINAMICAMENTE BORRAR LOS ID'S Y LOS PRODUCTOS QUE SUBIERON A MANO
    {   name : "Mancuerna Redonda 20kg | Premium",
        stock : 10,
        price : 8200,
        description: "Las Mancuernas Circulares Premium son la elección perfecta para quienes buscan un equipo de entrenamiento resistente, ergonómico y diseñado para durar, garantizando un rendimiento óptimo en cada sesión de ejercicios.",
        image : "../public/prod2.png",
        category: "mas populares"
    },
    {   
        name : "Kettlebell 8kg | Premium",
        stock : 12,
        price : 14490,
        description: "Las Kettlebell Premium representan lo último en innovación y calidad en el mundo del fitness. Son ideales para aquellos que buscan optimizar sus entrenamientos de fuerza y resistencia con un equipo confiable, resistente y diseñado para durar.",
        image : "../public/prod3.png",
        category: "nuevos"
    },
    {   
        name : "Kettlebell 12kg | Premium",
        stock : 12,
        price : 14490,
        description: "Las Kettlebell Premium representan lo último en innovación y calidad en el mundo del fitness. Son ideales para aquellos que buscan optimizar sus entrenamientos de fuerza y resistencia con un equipo confiable, resistente y diseñado para durar.",
        image : "../public/prod4.png",
        category: "ofertas"
    },
    {   
        name : "Discos Olímpicos",
        stock : 15,
        price : 26990,
        description: "Los Discos Olímpicos Pro Bumper están disponibles individualmente y también en dos convenientes packs, que incluyen una selección equilibrada de discos codificados por colores para facilitar su identificación.",
        image : "../public/prod5.png",
        category: "ofertas"
    },
    {   
        name : "Bicicleta de Spinning",
        stock : 3,
        price : 790000,
        description: "La Air Bike Premium Serie es una bicicleta de ejercicio avanzada que utiliza resistencia de aire ajustable para ofrecer entrenamientos cardiovasculares intensos y personalizados.",
        image : "../public/prod6.png",
        category: "mas populares"
    },
    {   
        name : "Cajón Pliométrico",
        stock : 8,
        price : 45000,
        description: "El Cajón Pliométrico está diseñado para potenciar tu entrenamiento de manera práctica y segura, ofreciendo tres alturas ajustables en un solo equipo: 50 cm, 60 cm y 75 cm.",
        image : "../public/prod7.png",
        category: "ofertas"
    },
    {   
        name : "Power Bands",
        stock : 10,
        price : 25000,
        description: "Las Power Bands son el accesorio perfecto para personalizar tu entrenamiento de resistencia, ideales para mejorar la movilidad, asistir en dominadas, añadir intensidad a sentadillas y press de banca, y mucho más.",
        image : "../public/prod8.png",
        category: "ofertas"
    },
    {   
        name : "Anillas Olímpicas de Calistenia",
        stock : 6,
        price : 32000,
        description: "Las Anillas IRONSIDE son el equipo esencial para deportistas que buscan llevar su entrenamiento de fuerza y resistencia al siguiente nivel. Fabricadas con madera de alta calidad.",
        image : "../public/prod9.png",
        category: "nuevos"
    },
    {   
        name : "Rack Almacenamiento Mancuernas",
        stock : 2,
        price : 154000,
        description: "Este rack ha sido diseñado específicamente para almacenar hasta 10 pares de mancuernas hexagonales, optimizando el espacio en tu sala de entrenamiento.",
        image : "../public/prod10.png",
        category: "mas populares"
    },
    {   
        name : "Barra Z Olímpica",
        stock : 7,
        price : 64000,
        description: "La Barra Z Olímpica de (10 kg) es una pieza esencial para entrenamientos de levantamiento de pesas, diseñada específicamente para maximizar el rendimiento y minimizar el riesgo de lesiones.",
        image : "../public/prod11.png",
        category: "mas populares"
    },
    {   
        name : "Barra Olímpica 20kg",
        stock : 6,
        price : 142000,
        description: "La Barra 1000 lb Fullpower es perfecta tanto para gimnasios profesionales como para atletas dedicados que buscan lo mejor en equipamiento de fuerza.",
        image : "../public/prod12.png",
        category: "mas populares"
    },
    {   
        name : "Trotadora Comercial",
        stock : 2,
        price : 250000,
        description: "La Trotadora GLAM LED transforma cualquier espacio en un centro de entrenamiento personal. Diseñada para ofrecer una experiencia de gimnasio en casa, combina tecnología avanzada con un diseño elegante y compacto.",
        image : "../public/prod13.png",
        category: "nuevos"
    },
    {   
        name : "Banco Multifuncional",
        stock : 3,
        price : 197000,
        description: "El Banco Multifuncional es la solución perfecta para maximizar tu espacio de entrenamiento y realizar una amplia variedad de ejercicios que te ayudarán a desarrollar todos los grupos musculares clave.",
        image : "../public/prod14.png",
        category: "mas populares"
    },
    {   
        name : "Set Rack + Pack 30 kg Mancuernas",
        stock : 3,
        price : 110000,
        description: "El rack de almacenamiento incluido permite mantener tus mancuernas organizadas, optimizando tu espacio de entrenamiento. Con su diseño ergonómico, las mancuernas ofrecen un agarre seguro.",
        image : "../public/prod15.png",
        category: "ofertas"
    }
]
export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(error){
                reject("Lo siento, hubo un error")
            } else{
                resolve(productos)
            }
        }, 1500)
    })
}

export const getOneProduct = (id) => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!error){
                let product = productos.find((item) => item.id === Number(id))
                resolve(product)
            } else{
                reject("No hay datos")
            }
        }, 1000)
    })
}