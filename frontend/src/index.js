import Swiper from 'swiper';

const parseJSON = async (url) => {
    const response = await fetch(url);
    return response.json();
};

const swiperComponent = (data, comp) => {
    return `
    <div class="swiper">
        <div class="swiper-wrapper">
            ${data.map(img => comp(img)).join('')}
        </div>
    </div>
    `
}

const swiperSlideComponent = ({fileName, title}) => {
    return `
        <div class="swiper-slide">
            <h2>${title}</h2>
            <img src="/public/img/${fileName}">
        </div>
    `
};

const loadEvent = async () => {
    const rootElement = document.getElementById('root')
    const result = await parseJSON('/image/list')

    rootElement.insertAdjacentHTML('beforeend', swiperComponent(result, swiperSlideComponent));

    const swiper = new Swiper('.swiper', {
        loop: true,
    });

    console.log(swiper);
}

window.addEventListener('load', loadEvent);