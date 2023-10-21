const popup = document.querySelector(".popup");
const close = document.querySelector(".remove");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const img = document.querySelector(".image");
const btn1 = document.querySelectorAll("#btn1");


const names = [
    "Marketing & advertising",
    "Ultimate development",
    "Business Enterprise",
    "3D Modeling & Art Expertise",
    "Digital Promotion",
    "Online Support",
];

const descriptions = [
    "Our Marketing & Advertising Solutions are designed to enhance your brand's visibility and engagement. We employ targeted marketing strategies that resonate with your target audience, ensuring a higher conversion rate and improved ROI.",
    "Our Ultimate Development Solutions encompass a holistic approach to elevate your online presence and functionality. We specialize in creating robust, custom websites and applications that align with your brand and business objectives. From seamless e-commerce platforms to captivating user interfaces,",
    "Our Business Enterprise Tools are a suite of specialized solutions aimed at streamlining your business operations and fueling growth. We focus on optimizing your processes, enhancing productivity, and ensuring scalability, making your enterprise efficient and competitive. Our comprehensive tools cover areas such as enterprise resource planning, customer relationship management,",
    "Our 3D Modeling & Art Expertise is dedicated to creating immersive and visually stunning experiences. We leverage cutting-edge technology and artistic talent to bring your ideas to life in three-dimensional space. Whether it's product visualization, architectural renderings,",
    "Our Digital Promotion Strategies are focused on amplifying your online presence and driving meaningful engagement. We use a combination of proven techniques, including search engine optimization (SEO), pay-per-click (PPC) advertising, and social media marketing, ",
    "Our Responsive Online Support service is dedicated to providing quick and efficient assistance to your customers whenever they need it. We ensure that your users have a seamless experience by offering round-the-clock support through various channels like live chat, email, and phone. Our team is equipped to handle inquiries, resolve issues, and provide assistance,",
];

const images = [
    "assets/img/image58.png",
    "assets/img/image62.png",
    "assets/img/image64.png",
    "assets/img/card1-1.png",
    "assets/img/card1.png",
    "assets/img/Vector.png",
];


function showPopup(index) {

    name.textContent = names[index];
    desc.textContent = descriptions[index];
    img.src = images[index];
    console.log(images[index]);
    popup.style.display = "block";

}

btn1.forEach((btn , index)=>{
    btn.addEventListener('click', () => showPopup(index));
})


close.addEventListener('click',()=>popup.style.display = "none");