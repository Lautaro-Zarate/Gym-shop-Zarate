const productos = [
    {   id : 1,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 2,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 3,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 4,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 5,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 6,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 7,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 8,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 9,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 10,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 11,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
    },
    {   id : 12,
        name : "",
        stock : 1,
        price : 50,
        description: "",
        image : "",
        category: ""
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