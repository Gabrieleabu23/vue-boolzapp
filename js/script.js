const {createApp}=Vue;
createApp({
    data(){
        return{
            index:0,
            messaggioUtente:'',
            statoMessaggio:[],
            vettorescambio:[],
            vettoremessaggi:[],
            currentContact:['Michele','img/avatar_1.jpg'],
            currentContactMessages:[],
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
    methods:{
        clickedContact(element){
            this.currentContact.splice(0,2);
            console.log(this.contacts[element].name,this.contacts[element].avatar)
            this.currentContact.push(this.contacts[element].name,this.contacts[element].avatar)
            console.log(this.currentContact)
            this.messagesContact(element);
        },
        messagesContact(indice){
            this.index=indice
            this.vettoremessaggi = [];
            this.vettorescambio = [];
            this.statoMessaggio = [];
            this.vettorescambio.push(this.contacts[indice].messages)
            // console.log(this.vettoremessaggi.message)
            this.vettorescambio.forEach((element,i) => {
                element.forEach(messagePos => {
                    this.vettoremessaggi.push(messagePos.message)
                    this.statoMessaggio.push(messagePos.status)
                });
            });
            console.log(this.vettorescambio)
            console.log(this.vettoremessaggi)
            console.log(this.statoMessaggio)
        },
        addMessage(indice){
            // CONTROLLIAMO SE CI SONO DEGLI SPAZI ALL' INIZIO OPPURE ALLA FINE DEL MESSAGGIO INSERITO 
            if(this.messaggioUtente.trimStart() ||this.messaggioUtente.trimEnd() ){
                this.contacts[indice].messages.push({
                    message: this.messaggioUtente.trimStart().trimEnd(),
                    status: 'sent'
                })
                this.messagesContact(indice);
            // RIAGGIORNO LA LISTA DEI MESSAGGI TRAMITE LA FUNZIONE PRECEDENTE
            this.messagesContact(indice);
            // PULISCO L'INPUT DELL'UTENTE
            this.messaggioUtente='';
            setTimeout(() => {
                this.addMessageObject(indice);
              }, 1000);
            }
            // DEBUG
            // console.log(this.messaggioUtente)
        },
        addMessageObject(indice){
            this.contacts[indice].messages.push({
                message: 'Ok',
                status: 'received'
            })
            // RIAGGIORNO LA LISTA DEI MESSAGGI TRAMITE LA FUNZIONE PRECEDENTE
            this.messagesContact(indice);
        }
    },
    mounted(){
        this.messagesContact(0); // contatto predefinito - Michele cioè il primo
        
    }
}).mount('#app');