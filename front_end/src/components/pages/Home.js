import React from "react"
import styles from './Home.module.css'
import video from './movie.mp4'


function Home() {
    return (
        <section className={styles.Home}>
            <div className={styles.content}>
                <h1>
                    Bem vindo à <span>Barbearia&copy;</span>
                </h1>
                <p>Agende seu horário agora mesmo!</p>
                <button className={styles.btnAgendar}>
                    <a href="/">AGENDAR</a>
                </button>
            </div>
            <video className={styles.Backvideo} muted autoPlay loop playsinline >
                <source src={video} type="video/mp4" />
            </video>
        </section>
    )
}

export default Home
