;(function (root, factory, undef) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./src/core"), require("./src/x64-core"), require("./src/lib-typedarrays"), require("./src/enc-utf16"), require("./src/enc-base64"), require("./src/md5"), require("./src/sha1"), require("./src/sha256"), require("./src/sha224"), require("./src/sha512"), require("./src/sha384"), require("./src/sha3"), require("./src/ripemd160"), require("./src/hmac"), require("./src/pbkdf2"), require("./src/evpkdf"), require("./src/cipher-core"), require("./src/mode-cfb"), require("./src/mode-ctr"), require("./src/mode-ctr-gladman"), require("./src/mode-ofb"), require("./src/mode-ecb"), require("./src/pad-ansix923"), require("./src/pad-iso10126"), require("./src/pad-iso97971"), require("./src/pad-zeropadding"), require("./src/pad-nopadding"), require("./src/format-hex"), require("./src/aes"), require("./src/tripledes"), require("./src/rc4"), require("./src/rabbit"), require("./src/rabbit-legacy"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./src/core", "./src/x64-core", "./src/lib-typedarrays", "./src/enc-utf16", "./src/enc-base64", "./src/md5", "./src/sha1", "./src/sha256", "./src/sha224", "./src/sha512", "./src/sha384", "./src/sha3", "./src/ripemd160", "./src/hmac", "./src/pbkdf2", "./src/evpkdf", "./src/cipher-core", "./src/mode-cfb", "./src/mode-ctr", "./src/mode-ctr-gladman", "./src/mode-ofb", "./src/mode-ecb", "./src/pad-ansix923", "./src/pad-iso10126", "./src/pad-iso97971", "./src/pad-zeropadding", "./src/pad-nopadding", "./src/format-hex", "./src/aes", "./src/tripledes", "./src/rc4", "./src/rabbit", "./src/rabbit-legacy"], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {
	
	return CryptoJS;
	
})); 
module.exports