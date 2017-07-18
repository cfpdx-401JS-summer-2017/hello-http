function greeting(parsedUrl) {
    const msg = parsedUrl.query.salutation || 'Hello';
    const name = parsedUrl.pathname.split('/')[2] || 'stranger';
    return `${msg} ${name}`;
}

module.exports = greeting;