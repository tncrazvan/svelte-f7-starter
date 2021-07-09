interface RichMessageButton{
    text:string
    action:Function
}

interface RichMessage{
    text:string
    timeout?:number
    onExpire?:Function
    buttons?:Array<RichMessageButton>
}

export type {
    RichMessage,
    RichMessageButton,
}