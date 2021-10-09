import Link from 'next/link'
import classes from '../styles/link.module.css'

const A = (props) => {
    return (
        <Link href={props.href}>
            <a className={classes.link}>{props.children}</a>
        </Link>
    )
}

export default A