import useWindowStore from "#store/Window.jsx";

const WindowControls = ({target}) => {
    const {closeWindow}=useWindowStore();
    return (
        <div id={"window-controls"}>
            <button type="button" aria-label="Close window" className={"close"} onClick={()=>closeWindow(target)}/>
            <span aria-hidden="true" className={"minimize"}/>
            <span aria-hidden="true" className={"maximize"}/>
        </div>
    )
}
export default WindowControls
