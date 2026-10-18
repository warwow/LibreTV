// Public proxy access is controlled by the server-side destination allowlist.
async function addAuthToProxyUrl(url) {
    return url;
}

function validateProxyAuth() {
    return false;
}

function clearAuthCache() {}

async function getPasswordHash() {
    return null;
}

window.ProxyAuth = {
    addAuthToProxyUrl,
    validateProxyAuth,
    clearAuthCache,
    getPasswordHash
};
