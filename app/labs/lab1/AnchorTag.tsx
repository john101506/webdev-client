export default function AnchorTag() {
    return (
        <>
            <h4>Anchor Tag</h4>
            Please{" "}
            <a href="https://www.lipsum.com" id="wd-lipsum">
                click here
            </a>{" "}
            to get dummy text
            <br />
            <a href="https://github.com/jannunzi" id="wd.github">
                Github
            </a>
            <h4>My Anchor Tags</h4>
            <a 
                href="https://github.com/john101506"
                target="_blank"
                rel="noreferrer" 
                id="wd-your-github"
            >
                My Github
            </a>
            <br />
            <a href="https://www.bso.org/bso-2026-2027-season?g_acctid=589-788-1247&g_adgroupid=199023339259&g_adid=818883119925&g_adtype=search&g_campaign=BSO_FallWinter_search_nonbrand_30101&g_campaignid=24092547034&g_keyword=boston%20symphony&g_keywordid=kwd-306807429763&g_network=g&gclsrc=aw.ds&gad_source=1&gad_campaignid=24092547034&gbraid=0AAAAAD-WRxxmWX05R7itFKn_bxTMOZUCz&gclid=Cj0KCQjwt9jVBhDXARIsAFSP-6eCuMedYIeGj3dtBY5dYtgvDTdHNd90RtWaJsD1PKY8GmzcwTfjWMIaAtLLEALw_wcB" id="wd-boston-symphony">
                Boston Symphony Orchestra
            </a>
            <br />
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" id="wd-ai-link">
                MDN: table element
            </a>
        </>
    );
}