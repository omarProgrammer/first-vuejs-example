import Vue from 'vue';
import youtube from './components/youtube/youtube';

console.log('okkk');

new Vue({
	el: '#app',
	components: {
		appYoutube: youtube
	}
})