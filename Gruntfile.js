module.exports = function(grunt) {
	"use strict";
	
	var banner = function() {
		var date = new Date,
			h = date.getHours(),
			m = date.getMinutes(),
			s = date.getSeconds();
			
		h = h<10 ? '0'+h : h;
		m = m<10 ? '0'+m : m;
		s = s<10 ? '0'+s : s;
		
		var time = h + ':' + m + ':' + s;
		
		var str = '/*!\n';
		str += ' * <%= pkg.name %>.js v<%= pkg.version %>\n';
		str += ' * <%= pkg.repository.url %>\n';
		str += ' * <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> ' + time + '\n';
		str += ' *\n'
		str += ' */';
		
		return str;
	}();
	
	// 配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				banner: banner
			},
			html5Shim: {
				src: ['src/html5.js', 'src/*.js', 'src/shim.js'],
				dest: 'dest/html5shim.js'
			}
		},
		uglify: {
			options: {
				banner: banner
			},
			build: {
			}
		}
	});
	
	// 载入concat和uglify插件，分别对于合并和压缩
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// 注册任务
	grunt.registerTask('default', ['concat', 'uglify']);
}; 