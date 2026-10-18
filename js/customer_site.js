const CUSTOMER_SITES = {
    jszy: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: 'Community JSZY (rights and playback unverified)',
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: 'Community 360ZY (rights and playback unverified)',
    },
    rycj: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: 'Community RYCJ (rights and playback unverified)',
    },
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
