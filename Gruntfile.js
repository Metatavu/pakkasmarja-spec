/*global module:false*/

const _ = require('lodash');
const fs = require('fs');
const path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  const SWAGGER_SRC = "https://oss.sonatype.org/content/repositories/snapshots/io/swagger/swagger-codegen-cli/3.0.0-SNAPSHOT/swagger-codegen-cli-3.0.0-20180112.231857-20.jar";

  grunt.registerMultiTask('javascript-package-update', 'Updates package.json -file', function () {
    const packageJson = JSON.parse(fs.readFileSync(`${this.data.folder}/package.json`));
    fs.writeFileSync(`${this.data.folder}/package.json`, JSON.stringify(Object.assign(packageJson, this.data.fields), null, 2));
  });

  grunt.registerMultiTask('kebabify', 'Kebabify files', function () {
    const files = fs.readdirSync(this.data.folder);
    files.forEach((file) => {
      const folder = this.data.folder;
      const fileParsed = path.parse(file);
      const kebab = `${_.kebabCase(fileParsed.name)}${fileParsed.ext}`;
      fs.renameSync(`${folder}/${file}`, `${folder}/${kebab}`);
    });
  });

  grunt.initConfig({
    'curl': {
      'swagger-codegen':  {
        src: SWAGGER_SRC,
        dest: 'swagger-codegen-cli.jar'
      }
    },
    'clean': {
      'nodejs-generated': [
        'nodejs-generated'
      ],
      'nodejs-model-generated': [
        'nodejs-model-generated'
      ],
      'nodejs-remove-cruft': [
        'nodejs-generated/.swagger-codegen',
        'nodejs-generated/.swagger-codegen-ignore',
        'nodejs-generated/api',
        'nodejs-generated/controllers',
        'nodejs-generated/utils',
        'nodejs-generated/README.md',
        'nodejs-generated/index.js',
        'nodejs-generated/package.json'
      ]
    },
    'shell': {
      'nodejs-generate': {
        command : 'java -jar swagger-codegen-cli.jar generate ' +
          '-i ./swagger.yaml ' +
          '-l nodejs-server ' +
          '-o nodejs-generated/ ' +
          '-t nodejs-templates ' +
          `--additional-properties useES6=false,usePromises=true,projectName=pakkasmarja-spec`
      },
      'nodejs-model-generate': {
        command : 'java -jar swagger-codegen-cli.jar generate ' +
          '-i ./swagger.yaml ' +
          '-l javascript ' +
          '-t nodejs-model-templates ' +
          '-o nodejs-model-generated/ ' +
          `--additional-properties useES6=false,usePromises=true,projectName=pakkasmarja-rest-client`
      },
      'nodejs-model-move': {
        command: 'mv nodejs-model-generated/src/model nodejs-generated/'
      }
    },
    "kebabify": {
      "nodejs-services": {
        "folder": "nodejs-generated/service/"
      },
      "nodejs-models": {
        "folder": "nodejs-generated/model/"
      }
    }
  });
  
  grunt.registerTask('download-dependencies', 'if-missing:curl:swagger-codegen');
  grunt.registerTask('nodejs-gen', [ 'download-dependencies', 'clean:nodejs-generated', 'shell:nodejs-generate', 'shell:nodejs-model-generate', 'clean:nodejs-remove-cruft', 'shell:nodejs-model-move', 'kebabify:nodejs-services', 'kebabify:nodejs-models', 'clean:nodejs-model-generated']);
  
  grunt.registerTask('default', ['nodejs-gen']);
  
};
