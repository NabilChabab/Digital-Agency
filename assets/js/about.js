const name1 = document.querySelector(".para1");
const desc = document.querySelector(".para2");
const img = document.querySelector(".image-who");
const btn1 = document.querySelectorAll(".quest");


const names = [
    "Marketing & advertising",
    "Ultimate development",
    "Business Enterprise",
];

const descriptions = [
    "Our Marketing & Advertising Solutions are designed to enhance your brand's visibility and engagement. We employ targeted marketing strategies that resonate with your target audience, ensuring a higher conversion rate and improved ROI.",
    "Our Ultimate Development Solutions encompass a holistic approach to elevate your online presence and functionality. We specialize in creating robust, custom websites and applications that align with your brand and business objectives. From seamless e-commerce platforms to captivating user interfaces,",
    "Our Business Enterprise Tools are a suite of specialized solutions aimed at streamlining your business operations and fueling growth. We focus on optimizing your processes, enhancing productivity, and ensuring scalability, making your enterprise efficient and competitive. Our comprehensive tools cover areas such as enterprise resource planning, customer relationship management,",
];

const images = [
    "assets/img/illustration2.png",
    "assets/img/plan.png",
    "assets/img/promise.png",
];


function showContent(index) {

    name1.textContent = names[index];
    desc.textContent = descriptions[index];
    img.src = images[index];
    

}

btn1.forEach((btn , index)=>{
    btn.addEventListener('click', () =>{
        if(btn.classList.toggle('activequest')){
            showContent(index);
        }
        else{
            btn.classList.remove('activequest');
        }
        
    });
})