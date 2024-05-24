const navbar1 = [
    {
        "icon": '<i class="bi bi-telephone-inbound"></i>',
        "i_title": "Call Us",
        "description": "604-428-1363"
    },
    {
        "icon": '<i class="bi bi-envelope-paper"></i>',
        "i_title": "SEND US EMAIL",
        "description": "info@springmedicalcentre.com"
    },
    {
        "icon": '<i class="bi bi-geo-alt"></i>',
        "i_title": "LOCATE IN",
        "description": "4453 Lougheed Burnaby, BC V5C"
    }
]

const navbar2 = [
    {
        img: '../IMG/logo-2.svg',
        title1: 'Home',
        title2: 'Why Spring',
        title3: {
            main: 'Our Services',
            title3_1: 'Family Physicians',
            title3_2: 'Foot Orthotics',
            title3_3: 'Our Services',
            title3_4: 'Shockwave',
            title3_5: 'Electrocardiogram',
            title3_6: 'Holter Monitering',
            title3_7: 'Traditional Chinese Herbal Therapy'
        },
        title4: 'Our Team',
        title5: 'Blog',
        title6: 'Contact Us',
        button: 'Book an Appointment'
    }
]
const sec1 = [
    {
        image: './Electrocardiogram IMG/electrocardiographic-ecg-monitoring-device.jpg',
        title: 'Holter Monitoring',
        details: 'A Holter monitor is a small, wearable device that keeps track of your heart rhythm. Your doctor may want you to wear a Holter monitor for 24 hours. During that time, the device records all of your heartbeats.',
        description: 'A Holter monitor test is usually performed after a traditional test to check your heart rhythm (electrocardiogram) if the electrocardiogram (ECG) doesnt give your doctor enough information about your hearts condition.'
    }
]

function displayData() {
    let str = ""
    navbar1?.forEach((a) => {
        str += `
            <div class="col-1 text-end my-3 head-2" data-aos="fade-right" data-aos-duration="1000">
                <p class="pt-1">${a?.icon}</p>
            </div>
            <div class="col-3 my-3 ps-5" data-aos="fade-right" data-aos-duration="1000">
                <div class="row border-end head-3">
                    <div class="col-12 pt-2 head3-1">
                        <h6>${a?.i_title}</h6>
                    </div>
                    <div class="col-12">
                        <p>${a?.description}</p>
                    </div>
                </div>
            </div>
        `
    })
    document.getElementById('nav-services').innerHTML = str

    let str2 = ""
    navbar2?.forEach((a) => {
        str2 += `
        <div class="container">
            <a class="navbar-brand ps-5" data-aos="fade-right" data-aos-duration="1000" href="#"><img
                    src="${a?.img}" alt="Logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ps-xxl-5 ms-xl-4">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="../HTML/Home-Page.html">${a?.title1}</a>
                    </li>
                    <li class="nav-item ps-xxl-4">
                        <a class="nav-link" href="../Why Spring/Why Spring.html">${a?.title2}</a>
                    </li>
                    <li class="nav-item-1 dropdown ps-xxl-4">
                        <a class="nav-link dropdown-toggle text-warning" href="./Electrocardiogram.html" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            ${a?.title3?.title3_5}
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="../our services/Family Physicians.html">${a?.title3?.title3_1}</a></li>
                            <li><a class="dropdown-item" href="../our services/Our Services -Foot Orthotics and Braces.html">${a?.title3?.title3_2}</a></li>
                            <li><a class="dropdown-item" href="../our services/Our Service.html">${a?.title3?.title3_3}</a></li>
                            <li><a class="dropdown-item" href="../our services/Our Services-Shockwave Therapy.html">${a?.title3?.title3_4}</a></li>
                            <li><a class="dropdown-item" href="../our services/Our Services-Holter Monitering.html">${a?.title3?.title3_6}</a></li>
                            <li><a class="dropdown-item" href="../our services/Traditional Chinese Herbal Therapy.html">${a?.title3?.title3_7}</a></li>
                        </ul>
                    </li>
                    <li class="nav-item ps-xxl-4">
                        <a class="nav-link" href="../Our Team/Our Team.html">${a?.title4}</a>
                    </li>
                    <li class="nav-item ps-xxl-4">
                        <a class="nav-link" href="../Blog Post/Blog Post.html">${a?.title5}</a>
                    </li>
                    <li class="nav-item ps-xxl-4">
                        <a class="nav-link" href="../Contact Us/Contact Us.html">${a?.title6}</a>
                    </li>
                    <li class="nav-item1 ms-xl-5" data-aos="fade-left" data-aos-duration="1000">
                        <a href="../Book Appoinment/appointment.html"><button class="head-btn px-4 rounded-pill py-2">${a?.button} <i
                            class="bi bi-arrow-right-short"></i></button></a>
                    </li>
                </ul>
            </div>
        </div>
        `
    })
    document.getElementById('navbar2').innerHTML = str2

    str3 = ''
    sec1?.map((a) => {
        str3 += `
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-mg-12 text-center pt-4" data-aos="fade-up" data-aos-duration="1000">
                    <img src="${a?.image}" alt="">
                </div>
                <div class="col-lg-6 col-mg-12 mt-lg-5 p-5 " data-aos="fade-down" data-aos-duration="1000">
                    <h1 class="s2p1 fw-bold mt-4">${a?.title}</h1>
                    <p class="${a?.details}</p>
                    <p class="s2p3">${a?.description}</p>
                </div>
            </div>
        </div>
        `
    })
    document.getElementById('sec1-js').innerHTML = str3
}
displayData()