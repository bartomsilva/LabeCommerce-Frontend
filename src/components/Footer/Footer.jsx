import * as s from './styled'
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
            <s.Form onSubmit={handleSubmit(newUser)}>
                <s.TitleForm>Cadastre-se para receber nossas ofertas!</s.TitleForm>
                <s.Filds>
                    <s.ContainerFild>
                        <div>
                            <span>Nome:</span>
                            <input type="text" {...register("name")} />
                        </div>
                        {errors.name?.message}
                    </s.ContainerFild>
                    <s.ContainerFild>
                        <div>
                            <span>E-mail:</span>
                            <input type="email" {...register("email")} />
                        </div>
                        {errors.email?.message}
                    </s.ContainerFild>
                </s.Filds>
                <s.Button>Cadastrar</s.Button>
            </s.Form>

            <s.Container>
                <s.NetWorks>
                    <s.Title>ACOMPANHE NAS REDES SOCIAIS</s.Title>
                    <ul>
                        <li><img src="/static/icons/networks/facebook.svg" loading="lazy" alt="image facebook" /></li>
                        <li><img src="/static/icons/networks/twitter.svg" alt="image twitter" /></li>
                        <li><img src="/static/icons/networks/instagram.svg" alt="image instagram" /></li>
                        <li><img src="/static/icons/networks/youtube.svg" alt="image yotube" /></li>
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
                            <img src="/static/icons/payment/diners.svg" loading="lazy" alt="image payment" />
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
                    <a>arrependimento ou desistência</a>
                    <a>meus pedidos</a>
                    <a>trocas e devoluções</a>
                    <a>assistência técnica dos fabricantes</a>
                    <a>política de privacidade</a>
                </s.Box>
                <s.Box>
                    <s.TitleInfo>institucional</s.TitleInfo>
                    <a>quem somos</a>
                    <a>nossas lojas</a>
                    <a>portal da Space Toy</a>
                    <a>trabalhe conosco</a>
                    <a>assessoria de imprensa</a>
                    <a>investidores</a>
                </s.Box>

                <s.Box>
                    <s.TitleInfo>compre pelo telefone</s.TitleInfo>
                    <s.Title>0800 773 3838</s.Title>
                    <p>segunda a sexta das 8 às 22h</p>
                    <p>e sábados e domingos</p>
                    <p>das 8 às 20h (exceto feriados)</p>
                    <p>compre também pelo chat online</p>
                </s.Box>

            </s.Info>
            <s.Medidas>
                <br />
                <span>@by bart-silva -- Altura{window.screen.height}--- Lagura{window.screen.width}</span>
            </s.Medidas>

        </s.Footer>

    )
}