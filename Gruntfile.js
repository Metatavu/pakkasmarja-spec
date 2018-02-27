/*global module:false*/

const _ = require('lodash');
const fs = require('fs');
const path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  const SWAGGER_SRC = "https://oss.sonatype.org/content/repositories/snapshots/io/swagger/swagger-codegen-cli/3.0.0-SNAPSHOT/swagger-codegen-cli-3.0.0-20180112.231857-20.jar";
  const JAVASCRIPT_VERSION = require('./javascript-generated/package.json').version;
  const PHP_CLIENT_VERSION = "0.0.4";

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
      },
      'javascript-generate': {
        command : 'java -jar swagger-codegen-cli.jar generate ' +
          '-i ./swagger.yaml ' +
          '-l javascript ' +
          '-o javascript-generated/ ' +
          `--additional-properties useES6=false,usePromises=true,projectName=pakkasmarja-rest-client,projectVersion=${JAVASCRIPT_VERSION}`
      },
      'javascript-bump-version': {
        command: 'npm version patch',
        options: {
          execOptions: {
            cwd: 'javascript-generated'
          }
        }
      },
      'javascript-push': {
        command : 'git add . && git commit -m "Generated javascript source" ; git push',
        options: {
          execOptions: {
            cwd: 'javascript-generated'
          }
        }
      },
      'javascript-publish': {
        command : 'npm publish',
        options: {
          execOptions: {
            cwd: 'javascript-generated'
          }
        }
      },
      'php-client-generate': {
        command : 'java -jar swagger-codegen-cli.jar generate ' +
          '-i ./swagger.yaml ' +
          '-l php ' +
          '--template-dir php-templates ' +
          '-o php-generated ' +
          '--additional-properties packagePath=pakkasmarja-client-php,composerVendorName=metatavu,composerProjectName=pakkasmarja-client-php,variableNamingConvention=camelCase,invokerPackage=Metatavu\\\\Pakkasmarja,apiPackage=Api,modelPackage=Api\\\\Model,artifactVersion=' + PHP_CLIENT_VERSION
      },
      'php-client-publish': {
        command : 'sh git_push.sh',
        options: {
          execOptions: {
            cwd: 'php-generated/pakkasmarja-client-php'
          }
        }
      }
    },
    "kebabify": {
      "nodejs-services": {
        "folder": "nodejs-generated/service/"
      },
      "nodejs-models": {
        "folder": "nodejs-generated/model/"
      }
    },
    'javascript-package-update': {
      'javascript-package': {
        'folder': 'javascript-generated',
        'fields': {
          "author": "Metatavu Oy",
          "repository": {
            "type": "git",
            "url": "git://github.com/Metatavu/pakkasmarja-rest-client.git"
          },
          "license": "gpl-3.0"
        }
      }
    }
  });
  
  grunt.registerTask('download-dependencies', 'if-missing:curl:swagger-codegen');
  grunt.registerTask('javascript-gen', [ 'download-dependencies', 'shell:javascript-generate', 'javascript-package-update:javascript-package' ]);
  grunt.registerTask('javascript', [ 'javascript-gen', 'shell:javascript-bump-version', 'shell:javascript-push', 'shell:javascript-publish']);
  grunt.registerTask('nodejs-gen', [ 'download-dependencies', 'clean:nodejs-generated', 'shell:nodejs-generate', 'shell:nodejs-model-generate', 'clean:nodejs-remove-cruft', 'shell:nodejs-model-move', 'kebabify:nodejs-services', 'kebabify:nodejs-models', 'clean:nodejs-model-generated']);
  grunt.registerTask('php-gen', [ "shell:php-client-generate" ]);
  grunt.registerTask('php', [ "php-gen", "shell:php-client-publish" ]);
  
  grunt.registerTask('default', ['nodejs-gen']);
  
};