export default function Images() {
    return (
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          alt="Starship"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img
          id="wd-teslabot"
          src="/images/teslabot.jpg"
          height="200px"
          alt="Tesla Bot (Optimus) humanoid robot"
        />
        <br />
        Remote Image - Carina Nebula
        <br />
        <img
          id="wd-ai-image"
          width="200px"
          alt="Carina Nebula captured by the James Webb Space Telescope"
          src="https://www.nasa.gov/wp-content/uploads/2023/03/main_image_star-forming_region_carina_nircam_final-5mb.jpg"
        />
        <br />
        Remote Image - El Paso sunset
        <br />
        <img
          id="wd-your-image"
          src="https://www.brianwanchophotography.com/el-paso-photographer/DSC_0339.jpg"
          height="200px"
          alt="El Paso sunset"
        />
      </div>
    );
  }