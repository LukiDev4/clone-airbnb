const app = { 

    data() {
        return {
            activatedMenu: 1,
            menuCategories: [
                {
                  id: 1,
                  img: 'ilha.PNG',
                  name: 'Iilhas'
              
                },
                {
                  id: 2,
                  img: 'design.PNG',
                  name: 'Design'
              
                },
                {
                  id: 3,
                  img: 'casa-terra.PNG',
                  name: 'Casa de Terra'
              
                },
                {
                  id: 4,
                  img: 'fazenda.PNG',
                  name: 'Fazenda'
              
                },
                {
                  id: 5,
                  img: 'luxe.PNG',
                  name: 'Luxe'
              
                },
                {
                  id: 6,
                  img: 'incriveis.PNG',
                  name: 'Vistas Incríveis'
              
                },
                {
                  id: 7,
                  img: 'pousada.PNG',
                  name: 'Pousadas'
              
                },
                {
                  id: 8,
                  img: 'predios.PNG',
                  name: 'Prédios Históricos'
              
                },
                {
                  id: 9,
                  img: 'triang.PNG',
                  name: 'Casas Triangulares'
              
                }, 
                {
                  id: 10,
                  img: 'artico.PNG',
                  name: 'Árticos'
                }
            ],
            homes: [
                {
                    id: 1,
                    title: 'Murter, Croácia',
                    dimention: 5.5,
                    duration: '7 noites . 3 - 10 de Abr.',
                    price: 4.410,
                    img: 'img1.jpg'
                },
                {
                    id: 2,
                    title: 'Luanda, Angola',
                    dimention: 2,
                    duration: '14 dias. 6 - 20 de Agost.',
                    price: 2.900,
                    img: 'img2.jpg'
                },
                {
                    id: 3,
                    title: 'Murter, Croácia',
                    dimention: 6,
                    duration: '7 noites . 5 - 25 de Junho.',
                    price: 5.416,
                    img: 'img3.jpg'
                },
                {
                    id: 4,
                    title: 'Lisboa, Portugal',
                    dimention: 3,
                    duration: '7 noites . 3 - 10 de Abr.',
                    price: 3.416,
                    img: 'img4.jpg'
                },
                {
                    id: 5,
                    title: 'Malange, Angola',
                    dimention: 2,
                    duration: '5 noites . 1 - 5 de Nov.',
                    price: 3.000,
                    img: 'img6.jpg'
                },
                {
                    id: 6,
                    title: 'São Paulo, Brasil',
                    dimention: 2.5,
                    duration: '7 noites . 3 - 10 de Abr.',
                    price: 3.400,
                    img: 'img7.jpg'
                },
                {
                    id: 7,
                    title: 'Murter, Croácia',
                    dimention: 5.5,
                    duration: '5 noites . 6 - 11 de Abr.',
                    price: 4.240,
                    img: 'img8.jpg'
                },
                {
                    id: 8,
                    title: 'Murter, Croácia',
                    dimention: 3,
                    duration: '3 noites . 10 - 13 de Abr.',
                    price: 3.800,
                    img: 'img9.jpg'
                },
            ]
        }        
    },
    methods: {
        activeMenu(id=0) {
          this.activatedMenu = id
        },
        // Format Price
        formatedCurrency(price) {
            return price.toLocaleString('pt-BR',{maximumFractionDigits: 3})   
        }
    }   



    

}

Vue.createApp(app).mount("#app")