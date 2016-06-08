require('./Img.less');



class Img extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
        };

        
    }

    componentDidMount() {
        let t = this;
        t._calculateImgWidth();
    }

    componentWillReceiveProps(nextProps){
        let t = this;
        t._calculateImgWidth(nextProps);
    }

    _calculateImgWidth(props){
        let t = this;
        if(!props){
            props = t.props;
        }

        for(var key in props){
            if(key == 'parentStyle'){
                let width = props[key].width.replace('px','');

                let counts = Math.round(width/300);
                let imgWidth;
                let imgHeight
                if(counts <=1){
                    imgWidth = 300;
                }else{3
                     //body 的宽度 除以 显示的个数 减去 margin-right 的 10,为防止溢出 宽度向下取整。不知道为啥设置成 -20 才正常
                    imgWidth = Math.floor(width/counts-20);
                }
                //宽高比 7:4
                imgHeight = Math.floor(imgWidth /7 *4);
                t.state.imgWidth = imgWidth;
                t.state.imgHeight = imgHeight;

            }
        }


        t.setState(t.state);

    }


    render() {
        let t = this;
        let item = t.props.item
        return (<div className='img' style={{width:t.state.imgWidth+'px'}}>
                    <a href={t.props.href} target='_blank'>
                        <img src={t.props.src} data-src={t.props.dataSrc} style={{height:t.state.imgHeight+'px'}}></img>
                    </a>
                    <div className='img-bottom'>
                        <div>
                            <div style={{width:t.state.imgWidth - 70+'px'}} className='room-name'>{item.room}</div>
                            <div className='game-type'>英雄联盟</div>
                        </div>
                        <div>
                            <i className='icon icon-name'></i>
                            <div style={{width:t.state.imgWidth - 110+'px'}} className='room-name name'>{item.name}</div>
                            <div className='game-type fire'>
                                {item.fire}
                            </div>
                            <i className='icon icon-num'></i>
                        </div>
                    </div>
                </div>
        );
    }
}



module.exports = Img;
