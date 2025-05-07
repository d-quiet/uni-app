// 格式化html
export const setHtml = (value) => {
    let str = value;
    if (str) {
        str = str.replace(/emsp;/g, '&emsp;');
        str = str.replace(/nbsp;/g, '&nbsp;');
        str = str.replace(/\n/g, '<br/>');
        str = str.replace(/\t/g, '&nbsp');
        str = str.replace(/ /g, '&nbsp');
    }
    return str;
};

// 格式化手机
export const setPhone = (value) => {
    let str = '';
    if (value) {
        str = String(value).replace(/^(\d{3})\d{4}(\d+)/, "$1****$2");
    }
    return str;
};

// 设置保留小数位数
export const setFixed = (value, num = 2) => {
    let number = 0;
    if (value) {
        number = value * 1;
    }
    return number.toFixed(num);
};

// 文本超出几个字就截取后末尾加上...
export const setText = (text, num) => {
    let newText = text.slice(0, num);
    return newText + '...';
};

// 跳转
export const navTo = (url) => {
    uni.navigateTo({
        url: url
    });
};

// 回退
export const navBack = (url) => {
    uni.navigateBack({
        delta: 1
    });
};

// 顶部高度
export const getTopHeight = () => {
    const systemInfo = uni.getWindowInfo();
    const statusBarHeight = systemInfo.statusBarHeight || 0;
    return statusBarHeight;
};
    