import './styles/branding.scss'

export default function Brand() {
    return (
    <div className='abbr'>
       <h1 className='brandTitle'>hooks.<br/><span>your links, your way</span></h1>
    </div>
    );
}

export function brandingForPages() {
    return (
        <div className="pagebranding">
            <p className="brndtitle">
                hooks.
            </p>
        </div>
    )
}