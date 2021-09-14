import './button.css'

export const GreenBtn = (props)=>{

    return (
        
            <button onClick={props.onShow} className="giphyButton greenButton">
                {props.children}
            </button>
        
    )
}

export const WhiteBtn = (props)=>{
    return (
            <button className="whiteBtn">
                {props.children}
            </button>
    )
}
