import './Mid_bar.css';

function Mid_Bar({text}) {

    // const response = quote;
    return (
        <div className='horizontal-bar'>
            <span dangerouslySetInnerHTML={{__html: text}}></span>
        </div>
    )
}

export default Mid_Bar;