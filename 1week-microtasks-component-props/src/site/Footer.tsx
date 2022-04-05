type FooterType = {
    title: string
}
export const Footer = (props:FooterType) => {
    return(
        <div>{props.title}</div>
    )
}