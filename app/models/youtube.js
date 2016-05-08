import Tag from './tag';

class Youtube {
	constructor () {
		this.tags = {};
	}

	/**
	* @descirption method to retrieve the video by tag
	* @param tag  the tag name to search
	* @param page the page of search tag
	**/
	getVideos (tag, page = 0) {
		
		var oTag  = this.tags[tag];
		if(ths.tags[tag]) {
			this.tags[tag] =  new Tag(tag);
		}

		return this.tags[tag].getPage(page);
		
	}

}


//singleton
export default new Youtube();