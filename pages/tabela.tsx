import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'

export default function Departamentos() {


    const [todosDeps, setTodosDeps] = useState([])
    async function getDepartament() {
        const URL = 'http://localhost:3000/api/todos'
        const resp = await fetch(URL)
        const json = await resp.json();
        setTodosDeps(json)
    }

    useEffect(() => {
        getDepartament()
    }, [])


    return (

        <div className={styles.home}>

        <div className={styles.search}> 
        <input type="search" placeholder="Digite para pesquisar"  />
        </div>

            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th className={styles.th}>ID </th>
                        <th className={styles.th}>NOME DO DEPARTAMENTO</th>
                    </tr>
                </thead>

                <tbody className={styles.tbody}>

                    {todosDeps.map(departamento => {
                        return (
                            <tr key={departamento.id} className={styles.tr}>
                                <td className={styles.td}> {departamento.id} </td>
                                <td className={styles.td}> {departamento.nome} </td>
                            </tr>
                        )
                    })}

                </tbody>
                </table>

                <div className={styles.logout}>
                    <button>Logout</button>
                </div>

            

        </div>

    )


}