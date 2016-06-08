/* 
* @Author: Administrator
* @Date:   2015-08-28 13:24:25
* @Last Modified by:   caoke
* @Last Modified time: 2015-11-26 22:43:24
*/

require('./Login.less');
let {Form,Button,Dialog} = Uxcore;
let {
    Constants,
    FormRowTitle,
    Row,
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    ButtonGroupFormField,
    SelectFormField,
    OtherFormField,
    Validators
} = Form;

let util = require('../../components/common/util');

class Login extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            visible:true
        };
    }

    handleSubmit() {
        console.log(this.refs.form.getValues());
    }
    handleRegist(){
        let t = this;
        t.handleDialogVisible(false);
    }
    handleDialogVisible(visible){
        let t = this;
        t.setState({
            visible:visible
        });
    }

    render() {
        let t = this;
          return (
            <div className='login'>
                <div className='login-cover'></div>
                <div className='input-continer'>
                    <Form ref='form' width='360px'  className='form' >
                   
                            <Input 
                                jsxname='account' 
                                jsxshowLabel={false}  
                                jsxplaceholder='请输入用户名'  
                                instantValidate={true}
                                jsxrules={[{validator: Validators.isNotEmpty, errMsg: "不能为空"}]}/>
                       
                            <Input 
                                jsxname='pass'
                                jsxshowLabel={false}
                                jsxplaceholder='请输入密码'
                                inputType='password'
                                jsxrules={[{validator: Validators.isNotEmpty, errMsg: "不能为空"}]}/>
                            <ButtonGroupFormField>
                                <Button size="large" onClick={t.handleSubmit.bind(t)}>登录</Button>
                            </ButtonGroupFormField>
                    </Form>

                    <div className='actions'>
                        <div className='right'>
                            <a>忘了密码</a>
                            <div className='line'>|</div>
                            <a>注册账号</a>
                        </div>
                    </div>
                </div>

                {t.renderRegister()}
            </div>
        )
    }
    renderRegister(){
        let t = this;
        return <Dialog title="注册,很快就好"
                    visible={t.state.visible}
                    footer = {[
                          <Button key="submit" onClick={this.handleRegist.bind(this)}>注 册</Button>,
                          <Button key="back" onClick={this.handleDialogVisible.bind(this,false)}>返 回</Button>
                    ]}>

                    <Form ref='form' width='360px'  className='form'>
                            <OtherFormField>
                                <div className='dialig-tip'>
                                    用户名千万要记牢，丢了就找不回来了
                                </div>
                            </OtherFormField>
                            <Input jsxname='theme' jsxlabel='用户名：'   jsxplaceholder='中文、英文、数字、特殊字符什么的都 OK 了'  instantValidate={true}
                                jsxrules={[ {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                                            {validator:(val)=>{
                                                return util.maxlength(val,20);
                                            },errMsg:'太长了吧？'}]}/>
                       
                            <Input jsxname='location'  jsxplaceholder='只输入一个空格也是 OK 的' jsxlabel='密码：'
                                jsxrules={[ {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                                            {validator:(val)=>{
                                                return util.maxlength(val,20);
                                            },errMsg:'太长了吧？'}]}/>


                            
                    </Form>
                    
                </Dialog>

    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}


ReactDOM.render(<Login/>, document.getElementById('App'));

module.exports = Login;
