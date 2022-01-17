import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

export default function Login(){
  return(
    <div className={styles.container}>
      <div className={styles.login}>
      <span className={styles.titulo}>Vamo logar?</span>
      <div className={styles.separador}></div>
      <form className={styles.form}>
        <input type="text" name="user" placeholder="Digite o usuário" />
        <input type="password" name="password" placeholder="Digite a senha"/>
        <button type="submit">Entrar</button>
       
      </form>

      </div>

    </div>
  )
}