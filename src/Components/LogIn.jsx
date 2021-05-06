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
                        <EmailInput>
                            <Icon >
                                <img src="https://designcode.io/images/icons/envelope-blue.svg" alt="" />
                            </Icon>
                                
                            <input type="email" placeholder="Email address" />
                        </EmailInput>
                        <PasswordInput>
                            
                            <input type="password" placeholder="Password" />
                        </PasswordInput>
                       
                    </FormInput>
                    
                    <SingInButton></SingInButton>
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
    //background-filter:blur(20px)saturation(100%);
    justify-content:center;
    align-items:center;
    z-index:10;
    
`

const Content = style.div`
    
     position:relative;
     max-width:960px;
     max-height:600px;
     display:grid;
     grid-template-columns:2fr 1fr;
     gap:40px;
    padding: 20px 20px;
    // place-content:center;
     box-shadow: rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    // border-radius:20px;
    // justify-items:center;

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
    border-radius:10px;

    img{
        max-width:100%;
        padding:0;
        border-style:none;
    }

`
const SingInForm = style.div`
   
    display:grid;
    
    justify-content:start;
    //padding-top:75px;
    max-width:320px;
    //margin-bottom:70.5%;

`
const Title = style.h1`
    font-style:normal;
    font-weight:bold;
    font-sise:40px;
    margin:0;
    line-height:48px;
    color:000000;

`
const Paragraph = style.p`
    font-style:normal;
    font-weight:normal;;
    font-size:15px;
    lineheight:130%;
    color:rgb(255, 255, 255);
`
const FormInput= style.form`
    display:grid;
    gap:20px;
   
`

const EmailInput = style.div`
    display;flex;
    position:relative;
    height:44px;
    width:100%;
`
const Icon = style.div`
    width:36px;
    height:36px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:8px;
    background-color:rgba(255, 255, 255, 0.2);
    border-radius: 50%;

`

const PasswordInput= style.div``
const SingInButton = style.button``
const Divider = style.div``
const SingUp = style.span``
const ForgrtPass = style.span``

export default LogIn


