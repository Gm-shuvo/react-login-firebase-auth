import style from 'styled-components'
const LogIn = () => {
    return (
        <Container>
            <Content>
                <CoverImg>
                    <img src="https://designcode.io/images/illustrations/teamwork.svg" alt="cover-img" />
                </CoverImg>
                <SingInForm>
                    <Title></Title>
                    <Paragraph></Paragraph>
                    <EmailInput></EmailInput>
                    <PasswordInput></PasswordInput>
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
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.2);
    width:100vw;
    height:100vh;
    background-filter:blur(20px)saturation(100%);
    justify-content:center;
    align-items:center;
    z-index:10;
    padding:0 20px;
`

const Content = style.div`
    position:relative;
    min-width:960px;
    padding:20px;
    width:100%;
    background-color:rgba(50, 61, 109, 0.5);
    display:grid;
    grid-template-columns:360px auto;
    gap:20px;
    box-shadow: rgb(255 255 255 / 30%) 0px 0px 0px 0.5px inset;
    border-radius:20px;
    justify-items:center;

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
    backgorund-size:cover;
    background-repeat:no-repeat;
    width:100%;
    height:100%;

    img{
        max-width:100%;
        padding:0;
        border-style:none;
    }

`
const SingInForm = style.div``
const Title = style.h4``
const Paragraph = style.p``
const EmailInput = style.input``
const PasswordInput= style.input``
const SingInButton = style.button``
const Divider = style.div``
const SingUp = style.span``
const ForgrtPass = style.span``

export default LogIn


