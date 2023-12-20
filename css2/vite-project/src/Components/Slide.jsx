import React from "react";
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
    const [slider, setSlider] = React.useState(0)
    const [position, setPosition] = React.useState(0)
    const contentRef = React.useRef()
    
    React.useEffect( () => {
        const {width} = contentRef.current.getBoundingClientRect()
        setPosition(-(width * slider))
    }, [slider])

    const handleClickAnterior = () => {
        if(slider > 0) setSlider(slider - 1)
    }

    const handleClickProximo = () => {
        if(slider < (slides.length-1)) setSlider(slider + 1)
    }

    return <section className={styles.container}>
        <div ref={contentRef} className={styles.content} style={{transform: `translateX(${position}px)`}} >
            {slides.map(slide => {
                return <div className={styles.item} key={slide.id}>{slide.text}</div>
            })}
        </div>
        <nav className={styles.nav}>
            <button onClick={handleClickAnterior}>Anterior</button>
            <button onClick={handleClickProximo}>Próximo</button>
        </nav>
    </section>
}

export default Slide