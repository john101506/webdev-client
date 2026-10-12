export default function Dimensions() {
    return (
        <div id="wd-css-dimensions">
            <h2>Dimension</h2>
            <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
            <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
                Landscape
            </div>
            <div className="wd-dimension-square wd-bg-color-red">Square</div>
            <div id="wd-ai-dimension" className="wd-ai-dimension">
                This sentence is much longer than the box can hold, so the
                yellow background stays at 120px by 60px while the extra text
                overflows below it.
            </div>
            <div className="wd-dimension-portrait wd-bg-color-blue">
               This text is designed to show the box keeps its size and allows the text to spill over. 
            </div>
        </div>
    );
}