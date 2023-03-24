import * as s from './styled'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function gotoPage(path) {
    switch (path) {
        case "linkedin":
            window.location.href = 'https://www.linkedin.com/in/bart-silva-br/'
            break
        case "github":
            window.location.href = 'https://github.com/bartomsilva'
            break
        case "facebook":
            window.location.href = 'https://www.facebook.com/'
            break
        case "twitter":
            window.location.href = 'https://twitter.com/'
            break
        case "instagram":
            window.location.href = 'https://www.instagram.com/'
            break 
    }
}
export default function Footer() {

    const schema = yup.object().shape({
        name: yup.string().min(2, "mínimo dois caracteres!").required(),
        email: yup.string().email("Digite um e-mail válido!").required("e-mail é obrigatório!'"),
    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)

    })

    const newUser = (user) => {
        // Object.keys(user).forEach(item => {
        //     console.log(`${item} -  ${user[item]}`)

        // });
        alert("Obrigado por sua inscrição!!!")
        reset({
            name: "",
            email: ""
        })
    }

    return (
        <s.Footer>
            <s.Container>
                <s.NetWorks>
                    <s.Title>ACOMPANHE NAS REDES SOCIAIS</s.Title>
                    <ul>
                        <li><img onClick={() => gotoPage("facebook")}src="/static/icons/networks/facebook.svg" loading="lazy" alt="image facebook" /></li>
                        <li><img onClick={() => gotoPage("twitter")} src="/static/icons/networks/twitter.svg" alt="image twitter" /></li>
                        <li><img onClick={() => gotoPage("instagram")} src="/static/icons/networks/instagram.svg" alt="image instagram" /></li>
                    </ul>
                </s.NetWorks>
                <s.PaymentsForms>
                    <s.Title>FORMAS DE PAGAMENTO</s.Title>
                    <ul>
                        <li><img src="/static/icons/payment/boleto.svg" loading="lazy" alt="image payment" /></li>
                        <li>
                            <img src="/static/icons/payment/american-express.svg" loading="lazy" alt="image payment" />
                        </li>
                        <li>
                            <img src="/static/icons/payment/aura.svg" loading="lazy" alt="image payment" />
                        </li>
                        <li>
                            <img src="/static/icons/payment/elo.svg" loading="lazy" alt="image payment" />
                        </li>
                        <li>
                            <img src="/static/icons/payment/hipercard.svg" loading="lazy" alt="image payment" />
                        </li>
                        <li>
                            <img src="/static/icons/payment/mastercard.svg" loading="lazy" alt="image payment" />
                        </li>
                        <li>
                            <img src="/static/icons/payment/visa.svg" loading="lazy" alt="image payment" />
                        </li>
                    </ul>
                </s.PaymentsForms>
            </s.Container>

            <s.Info>
                <s.Box>
                    <s.TitleInfo>central de atendimento</s.TitleInfo>
                    <a>atendimento</a>
                    <a>termo de compra e venda</a>
                    <a>meus pedidos</a>
                    <a>trocas e devoluções</a>
                    <a>política de privacidade</a>
                </s.Box>
                <s.Box>
                    <s.TitleInfo>institucional</s.TitleInfo>
                    <a>quem somos</a>
                    <a>nossas lojas</a>
                    <a>portal da Space Toy</a>
                    <a>trabalhe conosco</a>
                </s.Box>
                <s.Box>
                    <s.TitleInfo>compre pelo telefone</s.TitleInfo>
                    <s.TitleInfo>0800 010 1001</s.TitleInfo>
                    <p>segunda a sexta das 8 às 22h</p>
                    <p>e sábados e domingos</p>
                    <p>das 8 às 20h (exceto feriados)</p>
                    <p>compre também pelo chat online</p>
                </s.Box>
            </s.Info>
            <s.Medidas>
                {/* <br /> */}
                <img onClick={() => gotoPage("github")} src="/static/icons/networks/github.png" alt="" />
                <span>@by bart-silva - 2023</span>
                <img onClick={() => gotoPage("linkedin")} src="/static/icons/networks/linkedin.png" alt="" />
            </s.Medidas>

        </s.Footer>

    )
}

