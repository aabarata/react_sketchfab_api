export function stringIsFilled(str) {
    return str !== undefined && str.replace(/\s/g, '').length > 0; 
};

export function getBiggerThumbnailUrl(thumbnails) {
    if (thumbnails.images !== undefined && thumbnails.images.length > 0) {
        const sizes = thumbnails.images.map((image) => image.size);
        const index = sizes.indexOf(Math.max.apply(null, sizes));
        if (index >= 0) {
            return thumbnails.images[index].url;
        }
    }
}

export function getFormattedDate(date) {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
        return '';
    }
    const day = d.getUTCDay().length > 1 ? d.getUTCDay() : '0' + d.getUTCDay();
    const month = (d.getUTCMonth() + 1).length > 1 ? (d.getUTCMonth() + 1) : '0' + (d.getUTCMonth() + 1);
    return d.getUTCFullYear() + '-' + month + '-' + day + ' at ' + d.getUTCHours() + ':' + d.getUTCMinutes();
}

export function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        const context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
} 