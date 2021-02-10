const app = {
    data() {
        return {
            Pic:[
            {name:"Aaaaa"},
            {name:"Bbbbbbb"},
            {name:"Ccccccc"},
            {name:"Ddddddd"},
            {name:"Eeeeeee"},
            {name:"Fffffff"}],

            Owner:[
                {name:"Unsplash"},
                {name:"Unsplash"},
                {name:"Unsplash"},
                {name:"Unsplash"},
                {name:"Unsplash"},
                {name:"Unsplash"}],

            imgs:[
            {source:'https://images.unsplash.com/photo-1507236827745-1dbaaeb68a3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',done:false},
            {source:'https://images.unsplash.com/photo-1563474612791-26932f5a07b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80',done:false},
            {source:'https://images.unsplash.com/photo-1539571711714-62cd2534f96e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80',done:false},
            {source:'https://images.unsplash.com/photo-1520515080697-c1f99f3137cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',done:false},
            {source:'https://images.unsplash.com/photo-1536069221282-d877868cad6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60',done:false},
            {source:'https://images.unsplash.com/photo-1563474613175-b97377f713dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',done:false}    
                ]

            // tasks: [{title: 'Learing INT203 Client-side Web Programming 2',done: false},
            //         {title: 'Building modern websites with tailwindcss', done: false},
            //         {title: 'Developer web applications fast and hassle free with Spring', done: false}
            //     ]
        }
    },
    methods: {
        toggleDone(index){
            this.imgs[index].done = !this.imgs[index].done
        }
    },
    computed: {
        count(){
            return this.Pic.length
        }
    }
}
Vue.createApp(app).mount('#app')