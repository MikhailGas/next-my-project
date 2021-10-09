
import Head from 'next/head'
import A from '../components/A'

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"project nextjs " + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <nav>
                <A href="/">Главная</A>
                <A href="/users">Пользователи</A>
                
            </nav>
            <div>
                {children}
            </div>
            
            <style jsx>
                {`
                    nav {
                        background: orange;
                        padding: 15px;
                    }
                    
                `}
            </style>
        </>
    )
}

export default MainContainer