const translations = {  
    en: {  
        mainHeading: "Welcome to our website!",  
        companyIntro: "Our company was established in 2005 and operates in the field of finance and economics.",  
        aboutHeading: "Company Introduction",  
        aboutText: "Our company was established in 2005 and operates in the field of finance and economics.",  
        servicesHeading: "Service Introduction",  
        mapDescription: "Here you can find our company's location on the map.",
        servicesList: [  
            "Financial Consulting",  
            "Business Development",  
            "Corporate Training"  
        ],  
        contactHeading: "Contact Information",  
        phone: "Phone: 976 1234 5678",  
        email: "Email: info@minicompany.mn",  
        address: "Address: Ulaanbaatar, Mongolia",  
        home: "Home",  
        about: "About",  
        services: "Services", 
        servicesHeading: "Service Introduction", 
        contact: "Contact",
        mapHead: "Map",  
        mapHeading: "Map"  
    },  
    jp: {  
        mainHeading: "私たちのウェブサイトへようこそ！",  
        companyIntro: "私たちの会社は2005年に設立され、金融および経済の分野で活動しています。",  
        aboutHeading: "会社紹介",  
        aboutText: "私たちの会社は2005年に設立され、金融および経済の分野で活動しています。",  
        servicesHeading: "サービス紹介", 
        mapDescription: "ここで地図上の私たちの会社の場所を見つけることができます。", 
        servicesList: [  
            "財務コンサルティング",  
            "ビジネス開発",  
            "企業研修"  
        ],  
        contactHeading: "連絡先情報",  
        phone: "電話: 976 1234 5678",  
        email: "メール: info@minicompany.mn",  
        address: "住所: ウランバートル、モンゴル",  
        home: "ホーム",  
        about: "アバウト",  
        services: "サービス",
        servicesHeading: "サービスの紹介",  
        contact: "連絡先",
        mapHead: "地図",  
        mapHeading: "地図"  
    },  
    mn: {  
        mainHeading: "Таны вебсайтад тавтай морилно уу!",  
        companyIntro: "Манай компани 2005 онд байгуулагдсан бөгөөд санхүү, эдийн засгийн чиглэлээр үйл ажиллагаа явуулдаг.",  
        aboutHeading: "Компанийн Танилцуулга",  
        aboutText: "Манай компани 2005 онд байгуулагдсан бөгөөд санхүү, эдийн засгийн чиглэлээр үйл ажиллагаа явуулдаг.",  
        servicesHeading: "Үйл Ажиллагааны Танилцуулга",
        mapDescription: "Энд та манай компанийн байршлыг газрын зургаас харж болно.",  
        servicesList: [  
            "Санхүүгийн зөвлөх",  
            "Бизнесийн хөгжил",  
            "Байгууллагын сургалт"  
        ],  
        contactHeading: "Холбогдох Мэдээлэл",  
        phone: "Утас: 976 1234 5678",  
        email: "И-Мэйл: info@minicompany.mn",  
        address: "Хаяг: Улаанбаатар, Монгол",  
        home: "Эхлэл",  
        about: "Танилцуулга",  
        services: "Үйл Ажиллагаа",
        servicesHeading: "Үйл Ажиллагааны Танилцуулга",  
        contact: "Холбогдох",
        mapHead: "Газрын Зураг",  
        mapHeading: "Газрын зураг"  
    }  
};   

function changeLanguage() {  
    const selectedLanguage = document.getElementById("language-selector").value;  
    
    // Update main content  
    document.getElementById("main-heading").textContent = translations[selectedLanguage].mainHeading; 
    document.getElementById("services-heading").textContent = translations[selectedLanguage].servicesHeading; 
    document.getElementById("welcome-text").textContent = translations[selectedLanguage].companyIntro;  
    document.getElementById("about-heading").textContent = translations[selectedLanguage].aboutHeading;  
    document.getElementById("about-text").textContent = translations[selectedLanguage].aboutText;   
    document.getElementById("contact-heading").textContent = translations[selectedLanguage].contactHeading;  
    document.getElementById("contact-phone").textContent = translations[selectedLanguage].phone;   
    document.getElementById("contact-email").textContent = translations[selectedLanguage].email;  
    document.getElementById("contact-address").textContent = translations[selectedLanguage].address;  
    document.getElementById("home-heading").textContent = translations[selectedLanguage].home;  
    document.getElementById("com-heading").textContent = translations[selectedLanguage].about;  
    document.getElementById("uil-heading").textContent = translations[selectedLanguage].services;  
    document.getElementById("holb-heading").textContent = translations[selectedLanguage].contact;   
    document.getElementById("map-heading").textContent = translations[selectedLanguage].mapHeading;    
    document.getElementById("map-description").textContent = translations[selectedLanguage].mapDescription;  // Update map description  
    document.getElementById("gazar-heading").textContent = translations[selectedLanguage].mapHead;
    // Update services list  
    const servicesList = document.getElementById("services-list");  
    servicesList.innerHTML = "";  
    translations[selectedLanguage].servicesList.forEach(service => {  
        const li = document.createElement("li");  
        li.textContent = service;  
        servicesList.appendChild(li);  
    });  
} 

// Theme switcher functionality  
const button = document.getElementById('theme-switcher');  
button.addEventListener('change', () => {  
    document.body.className = button.checked ? 'dark' : 'light';   
});  

document.getElementById("language-selector").addEventListener('change', changeLanguage);  

window.onload = () => {  
    changeLanguage();  
};