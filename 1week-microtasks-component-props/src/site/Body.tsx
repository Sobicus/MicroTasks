type BodyType = {
    title: string
}
export const Body = (props: BodyType) => {
    return(
        <div>{props.title}</div>
    )
}