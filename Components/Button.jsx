import './button.css'
export default function Button(props){
    return(
        <button type={props.tipo} 
        onClick={props.onClick}
        >{props.nome}</button>
    )

}