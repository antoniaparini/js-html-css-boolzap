/**
 * Boolzapp Vue
 * 
 MILESTONE 3

Aggiungere la funzionalità di inserimento messaggi
Il messaggio aggiunto dovrà essere inserito nella conversazione del contatto attivo al momento dell' inserimento, come visto in classe all'assegnazione
Dopo 1 secondo dall' inserimento del messaggio avremo una risposta automatica 'ok' da parte del contatto
Includere la data e orario nei nuovi messaggi utilizzando Day.js

**APPUNTI**
LOADING LOCAL ON BROWSER

ON DEMAND

<script src="path/to/dayjs/locale/de"></script>
<script>
  dayjs.locale('de') // use locale globally
  dayjs().locale('de').format() // use locale in a specific instance
</script>

GET THE LOCALE OBJECT FOR FURTHER USE

<script src="path/to/dayjs/locale/de"></script>
<!-- Load locale as window.dayjs_locale_NAME -->
<script>
var customLocale = window.dayjs_locale_zh_cn // zh-cn -> zh_cn
</script>

DAY.JS ON CDN

<!-- CDN example (unpkg) -->
<script src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js"></script>
<script src="https://unpkg.com/dayjs@1.8.21/locale/zh-cn.js"></script>
<script>dayjs.locale('zh-cn')</script>

*****
 * 
 */


var app = new Vue({
    el: '#app',
    data: {
        // nostro account
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        // Elenco contatti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
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
                avatar: '_2',
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
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
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
                name: 'Luisa',
                avatar: '_4',
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
        ],
        activeID: '0',
        newConv: ''

    },
    methods: {
        actChat(index) {
            this.activeID = index;
        },

        sendAct() {
            if (this.newConv.trim() !== '') {
                this.contacts[this.activeID].messages.push({
                    date: dayjs().format('DD/MM/YY HH:mm:ss'),
                    message: this.newConv.trim(),
                    status: 'sent'
                });
                this.newConv = '';
                setTimeout(this.usrReply(), 2000);

            }
        },

        usrReply() {
            this.contacts[this.activeID].messages.push({
                date: dayjs().format('DD/MM/YY HH:mm:ss'),
                message: 'Ti chiamo più tardi! Ora, non posso chattare. :-)',
                status: 'received'
            });
        }
    }
});