const productos = [
    {   id : "1",
        name : "Mancuerna Redonda 10kg | Premium",
        stock : 7,
        price : 8200,
        description: "Descripcion",
        image : "./public/prod1.png",
        category: "Mas populares"
    },
    {   id : "2",
        name : "Mancuerna Redonda 20kg | Premium",
        stock : 10,
        price : 8200,
        description: "",
        image : "./public/prod2.png",
        category: "Mas populares"
    },
    {   id : "3",
        name : "Kettlebell 8kg | Premium",
        stock : 12,
        price : 14490,
        description: "",
        image : "./public/prod3.png",
        category: "Mas vendidos"
    },
    {   id : "4",
        name : "Kettlebell 12kg | Premium",
        stock : 12,
        price : 14490,
        description: "",
        image : "./public/prod4.png",
        category: "Mas vendidos"
    },
    {   id : "5",
        name : "Discos Olímpicos",
        stock : 15,
        price : 26990,
        description: "",
        image : "./public/prod5.png",
        category: "Mas vendidos"
    },
    {   id : "6",
        name : "Bicicleta de Spinning",
        stock : 3,
        price : 790000,
        description: "",
        image : "./public/prod6.png",
        category: "Más populares"
    },
    {   id : "7",
        name : "Cajón Pliométrico",
        stock : 8,
        price : 45000,
        description: "",
        image : "./public/prod7.png",
        category: "Oferta"
    },
    {   id : "8",
        name : "Power Bands",
        stock : 10,
        price : 25000,
        description: "",
        image : "./public/prod8.png",
        category: "Oferta"
    },
    {   id : "9",
        name : "Anillas Olímpicas de Calistenia",
        stock : 6,
        price : 32000,
        description: "",
        image : "./public/prod9.png",
        category: "Oferta"
    },
    {   id : "10",
        name : "Rack Almacenamiento Mancuernas",
        stock : 2,
        price : 154000,
        description: "",
        image : "./public/prod10.png",
        category: "Mas vendidos"
    },
    {   id : "11",
        name : "Barra Z Olímpica",
        stock : 7,
        price : 64000,
        description: "",
        image : "./public/prod11.png",
        category: "Mas vendidos"
    },
    {   id : "12",
        name : "Barra Olímpica 20kg",
        stock : 6,
        price : 142000,
        description: "",
        image : "./public/prod12.png",
        category: "Mas vendidos"
    },
    {   id : "13",
        name : "Trotadora Comercial",
        stock : 2,
        price : 250000,
        description: "",
        image : "./public/prod13.png",
        category: "Mas populares"
    },
    {   id : "14",
        name : "Banco Multifuncional",
        stock : 3,
        price : 197000,
        description: "",
        image : "./public/prod14.png",
        category: "Mas vendidos"
    },
    {   id : "15",
        name : "Set Rack + Pack 30 kg Mancuernas",
        stock : 3,
        price : 110000,
        description: "",
        image : "./public/prod15.png",
        category: "Oferta"
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
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    let error = false
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            if(!error){
                let product = productos.find((item) => item.id === id)
                resolve(product)
            } else{
                reject("No hay datos")
            }
        }, 2000)
    })
}