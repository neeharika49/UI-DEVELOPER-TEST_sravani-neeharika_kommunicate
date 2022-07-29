var url_string = “https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby”; //window.location.href
var url = new URL(url_string);
getUrlParameterValue(url,"utm_medium");
function getUrlParameterValue(url, parameter) {
//Todo: complete this code
var d = parameter;
var c = url.searchParams.get(parameter);
console.log(c);
}
