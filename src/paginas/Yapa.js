import '../estilos/yapa.css'

const Yapa = (props) => {

    return(
        <div className='yapa'>
            <h1>Rick and Morty</h1>
           <iframe width="960" height="615" src="https://www.youtube.com/embed/1KnmKOvlEIw?si=8PZxpusyFUSwve7W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

            <br/>
            <br/>


           <iframe width="960" height="615" src="https://www.youtube.com/embed/YPrtsmluEO8?si=PicdbreVp1E_wNXp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )

}

export default Yapa;