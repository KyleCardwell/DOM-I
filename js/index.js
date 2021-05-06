const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// ----------Header----------
const navArr = Array.from(document.querySelectorAll('nav > a'))
// console.log(navArr)

navArr.forEach((elem, index) => elem.textContent = siteContent["nav"]["nav-item-" + (index + 1)])
// console.log(navArr)

// const nav1 = document.querySelector('nav > a');
// nav1.textContent = siteContent['nav']['nav-item-1'];

// const nav2 = nav1.nextElementSibling;
// nav2.textContent = siteContent['nav']['nav-item-2'];

// const nav3 = nav2.nextElementSibling;
// nav3.textContent = siteContent['nav']['nav-item-3']

// const nav4 = nav3.nextElementSibling;
// nav4.textContent = siteContent['nav']['nav-item-4'];

// const nav5 = nav4.nextElementSibling;
// nav5.textContent = siteContent['nav']['nav-item-5'];

// const nav6 = nav5.nextElementSibling;
// nav6.textContent = siteContent['nav']['nav-item-6'];

// const newa1 = 



// ----------cta Section----------

const h1Text = document.querySelector('h1');
let ctah1 = siteContent['cta']['h1'];

let ctah1split = siteContent['cta']['h1'].split(' ');
// console.log(ctah1split)

let ctah1join = ctah1split.join('\n')
// console.log(ctah1join)

h1Text.innerText = ctah1join;

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

const headerImg = document.querySelector("#cta-img");
headerImg.src = siteContent['cta']['img-src'];

// ----------main-content Section----------

const contentFeatures = document.querySelector('.top-content > .text-content');
contentFeatures.children[0].textContent = siteContent['main-content']['features-h4'];
contentFeatures.children[1].textContent = siteContent['main-content']['features-content'];

const contentAbout = contentFeatures.nextElementSibling;
contentAbout.children[0].textContent = siteContent['main-content']['about-h4'];
contentAbout.children[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const contentServices = document.querySelector('.bottom-content > .text-content');
contentServices.children[0].textContent = siteContent['main-content']['services-h4'];
contentServices.children[1].textContent = siteContent['main-content']['services-content'];

const contentProduct = contentServices.nextElementSibling;
contentProduct.children[0].textContent = siteContent['main-content']['product-h4'];
contentProduct.children[1].textContent = siteContent['main-content']['product-content'];

const contentVision = contentProduct.nextElementSibling;
contentVision.children[0].textContent = siteContent['main-content']['vision-h4'];
contentVision.children[1].textContent = siteContent['main-content']['vision-content'];

// ----------contact Section----------

const contacth4 = document.querySelector('.contact > h4');
// console.log(contacth4);

contacth4.textContent = siteContent['contact']['contact-h4'];

const contactp1 = contacth4.nextElementSibling;

const address = siteContent['contact']['address'].replace('123 Way 456 Street ','123 Way 456 Street\n');
// console.log(address);

contactp1.innerText = address;

const contactp2 = contactp1.nextElementSibling;
contactp2.textContent = siteContent['contact']['phone'];

const contactp3 = contactp2.nextElementSibling;
contactp3.textContent = siteContent['contact']['email'];

// ----------footer----------

const copyright = document.querySelector('footer > p');
copyright.textContent = siteContent['footer']['copyright'];


