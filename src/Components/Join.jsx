
import { Entrar, Text, Subtitle, Title, Text2, Subtitle2} from "../Styles/Join"
import Button from "./Button"

const Join = ({title, subtitle, text, text2, subtitle2}) => {
    return(
        <Entrar>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
            <Text2><Subtitle2>{text2}</Subtitle2>$169.99</Text2>
            <Button
            name= 'Add to Cart' />
        </Entrar>
    )
}

export default Join