window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';
let tutor = JSON.parse(localStorage.getItem('typeTutor'))
let user = JSON.parse(localStorage.getItem('typeStudent'))

window.Pusher = require('pusher-js');
if (tutor !== null) {
    
window.Echo = new Echo({
    broadcaster: 'pusher',
    key:'fd4918c68dc27458996d', 
    cluster: 'mt1',
    auth: {
        headers: {
            Authorization: `Bearer ${tutor.access_token}`
        },
    },
    // authEndpoint: '/tutor/auth/broadcasting',
    encrypted: true
});
}
if (user !== null) {
    
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key:'fd4918c68dc27458996d', 
        cluster: 'mt1',
        auth: {
            headers: {
                Authorization: `Bearer ${user.access_token}`
            },
        },
        // authEndpoint: '/api/auth/broadcasting',
        encrypted: true
    });
    }
