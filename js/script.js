const { createApp } = Vue;
createApp({
    data() {
        return {
            listanomi: [],
            index: 0,
            searchContact: '',
            messaggioUtente: '',
            statoMessaggio: [],
            vettorescambio: [],
            vettoremessaggi: [],
            currentContact: ['Michele', 'img/avatar_1.jpg'],
            currentContactMessages: [],
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
    methods: {
        clickedContact(contact) {
            // DEBUG
            // console.log("Contatto cliccato: ", indice);
            this.currentContact.splice(0, 2);
            this.currentContact.push(contact.name, contact.avatar);
            this.index = this.contacts.indexOf(contact);
            this.messagesContact(this.index);
        },
        messagesContact(indice) {
            // PULIZIA ARRAY
            this.vettoremessaggi = [];
            this.vettorescambio = [];
            this.statoMessaggio = [];
            this.vettorescambio.push(this.contacts[indice].messages);
            this.vettorescambio.forEach((element, i) => {
                element.forEach((messagePos) => {
                    this.vettoremessaggi.push(messagePos.message);
                    this.statoMessaggio.push(messagePos.status);
                });
            });
            //   console.log(this.vettorescambio);
            console.log(this.vettoremessaggi);
            console.log(this.statoMessaggio);

        },
        addMessage(indice) {
            // CONTROLLIAMO SE CI SONO DEGLI SPAZI ALL' INIZIO OPPURE ALLA FINE DEL MESSAGGIO INSERITO 
            if (this.messaggioUtente.trimStart() || this.messaggioUtente.trimEnd()) {
                const now = new Date();
                const currentHour = now.getHours();
                const currentMinute = now.getMinutes();

                this.contacts[indice].messages.push({
                    date: now,
                    message: this.messaggioUtente.trimStart().trimEnd(),
                    status: 'sent'
                })
                // RIAGGIORNO LA LISTA DEI MESSAGGI TRAMITE LA FUNZIONE PRECEDENTE
                this.messagesContact(indice);
                // PULISCO L'INPUT DELL'UTENTE
                this.messaggioUtente = '';
                setTimeout(() => {
                    this.addMessageObject(indice);

                }, 1000);
            }
            // DEBUG
            // console.log(this.messaggioUtente)
        },
        addMessageObject(indice) {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            this.contacts[indice].messages.push({
                date: now,
                message: 'Ok',
                status: 'received'
            })
            // RIAGGIORNO LA LISTA DEI MESSAGGI TRAMITE LA FUNZIONE PRECEDENTE
            this.messagesContact(indice);
        },
        aggiornaLista() {
            const ricerca = this.searchContact.toLowerCase();
            this.listanomi = this.contacts.filter(element => {
                return element.name.toLowerCase().includes(ricerca) && element.visible;
            });
        },
        delMessage(indice) {

            this.contacts[this.index].messages.splice(indice, 1);
            this.vettoremessaggi.splice(indice, 1);
            this.statoMessaggio.splice(indice, 1);
            // DEBUG
            // console.log(this.vettoremessaggi);
            // console.log(this.statoMessaggio);
        },
        messaggiNeiContatti(posizione) {
            let ritornoLastMsg;
            const vettore = this.contacts[posizione].messages;
            vettore.forEach((element, i) => {
                if (i === vettore.length - 1)
                    ritornoLastMsg = element.message;
            });
            return ritornoLastMsg;
        },

        prevHour(posizione) {
            let boh;
            this.vettorescambio.forEach(elemento => {
                elemento.forEach((element, i) => {
                    
                    if (i === posizione) {
                        const messageDate = new Date(element.date);

                        const hours = messageDate.getHours();
                        const minutes = messageDate.getMinutes();

                        boh = `${hours}:${minutes}`;
                    }
                });

            });
            return boh;
            // const time = dateString.split(' ')[1].split(':').slice(0, 2).join(':');

            // console.log(time);

        }
    },
    mounted() {
        this.messagesContact(0); // contatto predefinito - Michele cioè il primo
        this.listanomi = this.contacts.slice();
        // this.prevHour()

    }
}).mount('#app');