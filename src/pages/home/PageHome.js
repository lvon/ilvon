require('./PageHome.less');


let DB = require('../../app/db');
let global = require('../../components/common/data');
let UiMain = require('../../components/ui.main');
let Img = require('../../components/img');

class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infos:[]
        };

        
    }

    componentDidMount() {
        let t = this;
        
        let params = {};
        params.which = global.douyu;
        DB.Vedio.getVedioList(params).then(function(data){
            t.state.infos = data;
            t.state.default = global.douyuDefault;
            t.setState(t.state);
        });
    }

    resize(obj){
        let t = this;
        t.state.imgContinerStyle = obj;
        t.setState(t.state);
    }
    handleMenuChange(item){
        let t = this;

        let params = {};
        params.which = item.code;
        DB.Vedio.getVedioList(params).then(function(data){

            t.state.infos = data;
            t.state.default = global[item.code+'Default'];
            t.refs.main.refresh();
            t.setState(t.state);
        });
    }

    render() { 
        let t = this;
        return (
            <div className="home">
                <UiMain ref='main' resize={t.resize.bind(t)} onMenuChange={t.handleMenuChange.bind(t)}>
                    <div className='img-continer'>
                        {
                            t.state.infos.map((item)=>{

                                return <Img parentStyle={t.state.imgContinerStyle} src={t.state.default} dataSrc={item.img} href={item.href} item={item}/>
                            })

                        }

                    </div>

                </UiMain>
            </div>
        );
    }
}

ReactDOM.render(<Page/>, document.getElementById('App'));

module.exports = Page;
