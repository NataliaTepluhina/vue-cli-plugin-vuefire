module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'vuefire': '^2.0.0-alpha.19',
      'firebase': '^5.5.5',
    },
    devDependencies: {
      'json-loader': '^0.5.7',
    }
  });

  if (options.addExample) {
    api.render('./template', {
      ...options,
    });
    api.exitLog(`You can find an example component in 'src/components/FirestoreExample.vue'. Don't forget to check your Firebase credentials!`)
  }

  api.injectImports(api.entryFile, `import './firebaseConfig'`)
};