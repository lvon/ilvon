
var pageConfig ={};


//是否测试模式
pageConfig.mock = true;
if(location.port == '3000' || location.port == '8080'){
    pageConfig.mock = false;
}
//测试前缀
// pageConfig.mockPre = 'http://127.0.0.1:8080/ilvon/';
pageConfig.mockPre = 'http://120.26.87.16/';
//开发前缀
pageConfig.urlPre = 'http://120.26.87.16/';
//请求by post ？ get？
pageConfig.method = 'post';

var DBContext = new NattyDB.Context({
    urlPrefix: pageConfig.mock?pageConfig.urlPre:pageConfig.mockPre,
    method: pageConfig.method,
    fit: function(response) {
        return {
            success:true,
            content: response
        }
    }
});


// 测试用, 可以扩展多个方法
DBContext.create('Vedio', {
    getVedioList:{
      url:'Main',
      jsonp:true
    }
});


module.exports = DBContext;