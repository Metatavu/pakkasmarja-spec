/*global module:false*/

const _ = require('lodash');
const fs = require('fs');
const rimraf = require("rimraf");

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  
  const SWAGGER_VERSION = "3.0.4";
  const SWAGGER_JAR = `swagger-codegen-cli-${SWAGGER_VERSION}.jar`;
  const SWAGGER_URL = `https://search.maven.org/remotecontent?filepath=io/swagger/codegen/v3/swagger-codegen-cli/${SWAGGER_VERSION}/${SWAGGER_JAR}`;

  grunt.registerMultiTask('typescript-spec-post-process', 'Post process', function () {
    if (process.env.PAKKASMARJA_FOLDER) {
      const rootFolder = process.env.PAKKASMARJA_FOLDER;
      const apiFolder = `${rootFolder}/api`;
      const modelFolder = `${rootFolder}/model`;
      
      if (fs.existsSync(apiFolder)) {
        rimraf.sync(apiFolder);
      }

      if (fs.existsSync(modelFolder)) {
        rimraf.sync(modelFolder);
      }

      if (fs.existsSync(`${rootFolder}/index.ts`)) {
        fs.unlinkSync(`${rootFolder}/index.ts`);
      }

      fs.renameSync(`${this.data.folder}/api/api.ts`, `${rootFolder}/index.ts`);
      fs.renameSync(`${this.data.folder}/api`, apiFolder);
      fs.renameSync(`${this.data.folder}/model`, modelFolder);
    }

  });

  grunt.initConfig({
    "curl": {
      "swagger-codegen":  {
        src: SWAGGER_URL,
        dest: SWAGGER_JAR
      }
    },
    "shell": {
      "typescript-spec-generate": {
        command : `java -jar ${SWAGGER_JAR} generate ` +
          "-i ./swagger.yaml " +
          "-l typescript-angular " +
          "-t typescript-spec-template/ " +
          "-o typescript-spec-generated/ " +
          "--template-engine mustache " +
          "--type-mappings Date=string "
      }
    },
    "typescript-spec-post-process": {
      "api": {
        "folder": "typescript-spec-generated"
      }
    }
  });

  grunt.registerTask('download-dependencies', 'if-missing:curl:swagger-codegen');
  grunt.registerTask('typescript-spec', [ "download-dependencies", "shell:typescript-spec-generate", "typescript-spec-post-process:api" ]);
  
};