import './Mid_bar.css';

function Mid_Bar_Sale({text}) {

    // const response = quote;
    return (
        <div className='horizontal-bar-sale'>
            <span dangerouslySetInnerHTML={{__html: text}}></span>
        </div>
    )
}

export default Mid_Bar_Sale;