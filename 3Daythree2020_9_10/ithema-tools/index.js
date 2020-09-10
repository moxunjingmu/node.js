function dateFormat(data) {
    const dt = new Date(data);

    const y = dt.getFullYear();
    const m = two(dt.getMonth() + 1);
    const day = two(dt.getDate());
    const hh = two(dt.getHours());
    const mm = two(dt.getMinutes());
    const ss = two(dt.getSeconds());
    return `${y}-${m}-${day} ${hh}:${mm}:${ss}`
}

function two(n) {
    return n > 9 ? n : '0' + n
}

function htmlEscape(html) {

}
module.exports = {
    dateFormat
}