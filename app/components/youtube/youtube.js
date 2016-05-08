import Vue from 'vue';
import template from './youtube.tpl'
import searchInput from './../searchInput/searchInput';
import listVideo from './../listVideo/listVideo'


export default Vue.extend({
	template,
	components: {
		searchInput,
		listVideo
	}
})