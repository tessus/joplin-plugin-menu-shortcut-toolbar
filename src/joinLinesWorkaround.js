// For now we need this workaround to call a CodeMirror command

function plugin(CodeMirror) {
	CodeMirror.defineExtension('joinLines', function() {
		this.execCommand('joinLines');
	});
}

module.exports = {
	default: function(_context) {
		return {
			plugin: plugin,
			codeMirrorResources: [],
			codeMirrorOptions: {},
			assets: function() {
				return [
				];
			},
		}
	},
}
