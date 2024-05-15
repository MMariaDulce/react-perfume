import Join from "./Join"
import Subscription from "./Subscription"
import {Down, Cartao} from '../Styles/Card'
const Card = () => {
    return(
        <Cartao>
            <Join 
            title='P E R F U M E'
            subtitle='Gabrielle Essence Eau De Parfum'
            text='A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL  '
            text2= '$149.99' />

        </Cartao>
    )
}

export default Card