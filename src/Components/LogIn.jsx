import style from 'styled-components'
const LogIn = () => {
    return (
        <Container>
            <Content>
                <CoverImg>
                    <img src="https://designcode.io/images/illustrations/teamwork.svg" alt="cover-img" />
                </CoverImg>
                <SingInForm>
                    <Title>Sing in</Title>
                    <Paragraph>Access to 120+ hours of courses, tutorials and livestreams</Paragraph>
                    <FormInput>
                        <Input>
                           
                                <img src="https://designcode.io/images/icons/envelope-blue.svg" alt="" />
                         
                            
                                <input type="email" placeholder="Email address" />
                          
                           
                        </Input>
                        <Input>
                        <img src="https://designcode.io/images/icons/envelope-blue.svg" alt="" />
                            <input type="password" placeholder="Password" />
                        </Input>
                       
                    </FormInput>
                    
                    <SingInButton onClick={''}>Sing In</SingInButton>
                    <Divider />
                    <SingUp></SingUp>
                    <ForgrtPass></ForgrtPass>
                </SingInForm>
            </Content>

        </Container>
    )
}

const Container = style.div`
    display:flex;
    position:fixed;
    height:100vh;
    width:100vw;
    background: linear-gradient(20deg, rgba(46,209,210,1) 0%, rgba(50,255,159,1) 100%);
    background-filter:blur(40px)saturation(70%);
    justify-content:center;
    align-items:center;
    z-index:10;
    
`

const Content = style.div`
    
    position:relative;
    max-width:960px;
    max-height:auto;
    display:grid;
    grid-template-columns:2fr .8fr;
    gap:40px;
    padding: 20px;
     place-content:center;
    background: rgb(71,187,174);
    background: linear-gradient(34deg, rgba(71,187,174,0.6955824566154587) 0%, rgba(107,103,212,0.15216508966867992) 100%);
    box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.7px inset;
    border-radius:10px;
    justify-items:center;
    z-index:10;
    @media(max-width: 900px){
         grid-template-columns: auto;
         margin:0 20px;
     }
    
`

const CoverImg = style.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-image:url('https://designcode.io/images/backgrounds/signup-background.svg') ;
    background-size: cover;
    background-repeat:no-repeat;
    width:100%;
    height:100%;
    border-radius: 5px;

    img{
        max-width:100%;
        padding:0;
        border-style:none;
    }

`
const SingInForm = style.div`
   
    display:grid;
    justify-content:start;
    padding-top:0px;
    gap:20px;
    //max-width:320px;
   // margin-bottom:70.5%;

`
const Title = style.h1`
    font-style:normal;
    font-weight:bold;
    font-sise:40px;
    margin:0;
    line-height:48px;
    color:#000000;

`
const Paragraph = style.p`
    font-style:normal;
    font-weight:normal;;
    font-size:15px;
    lineheight:130%;
    color:#000000;
`
const FormInput= style.form`
    display:grid;
    gap:12px;
    margin-top:20px;
   
`

const Input = style.div`

    display:flex;
    //justify-content:center;
    align-items:center;
    padding:0 10px;
    gap:8px;
    border:none;
    
    height:40px;
    border-radius:20px;
    background-color:rgba(255, 255, 255, 0.2);
    //background:red;
    input{
        width:100%;
        height:100%;
        border:none;
        outline:none;
        
        //margin-left:10px;
        background-color:transparent;
    }
    img{
        width:20px;
        height:20px;
        //display:block;
       

       
        // position:absolute;
        // top:0px;
       // background-color:rgba(255, 255, 255, 0.5);
        //border-radius: 50%;
    }
    
`
const Icon = style.div`
    width:36px;
    height:36px;
    display:block;
   
    // position:absolute;
    // top:0px;
    background-color:rgba(255, 255, 255, 0.5);
    border-radius: 50%;

`


const SingInButton = style.button`
    height:34px;
    width:100%
    outline:none;
    border:none;
    border-radius:8px;
    background: rgb(29,127,143);
    background: linear-gradient(112deg, rgba(29,127,143,0.6091954022988506) 100%, rgba(0,255,174,0.23678160919540225) 100%);
`
const Divider = style.div``
const SingUp = style.span``
const ForgrtPass = style.span``

export default LogIn


