function createEmailLink(user, domain) {
    var email = user + "@" + domain;
    var mailto_link = 'mailto:' + email;
    var emailLink = document.createElement('a');
    emailLink.href = mailto_link;
    emailLink.textContent = email;
    document.body.appendChild(emailLink);
}