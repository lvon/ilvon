const util = {};

util.maxlength=(val,len)=>{
	if(val.length>len){
		return false;
	}
	return true;
}

module.exports = util;