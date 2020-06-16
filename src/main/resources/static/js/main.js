Vue.component('message-row',{
    props: ['message'],
    template : '<div><i>({{ message.id }})</i>{{ message.text }}</div>'

});

Vue.component('messages-list', {
    props: ['messages'],
    template: '<div><div v-for="message in messages" :message = "message">{{ message.text }}</div>'
});


var app = new Vue({
    el: '#app',
    template: '<messages-list :messages = "messages"/>',
    data: {
        messages: [
            {id : '1', text : 'wow'},
            {id : '2', text : 'hi'},
            {id : '3', text : 'cool'},
        ]
    }
});