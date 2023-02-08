var consent = __md_get("__consent")
if (consent && consent.custom) {
    // 参考来源
    // https://squidfunk.github.io/mkdocs-material/setup/ensuring-data-privacy/#custom-cookies
    // https://stackoverflow.com/questions/59729701/how-to-make-adsense-load-when-cookie-consent-given
    var src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4466761780007995";
    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.setAttribute("async", "true");
    newScript.setAttribute("src", src);
    document.body.appendChild(newScript);
}
