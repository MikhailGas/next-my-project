import { useRouter } from "next/dist/client/router"
import MainContainer from "../../components/MainContainer"
import classes from '../../styles/user.module.scss'

export default function User ({user}) {
    const { query } = useRouter()
    return (
        <MainContainer keywords={user.name}>
            <div className={classes.user}>
                <h1>Пользователь с id {query.id}</h1>
                <p>Имя пользователя {user.name}</p>
            </div>  
        </MainContainer>
        
    )
}

export async function getServerSideProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}
    }
}