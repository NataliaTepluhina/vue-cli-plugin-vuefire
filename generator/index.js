import chalk from 'chalk'

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'vuefire': '@next',
      'firebase': '^5.5.5',
    },
  });

  if (options.addExample) {
    api.render('./template', {
      ...options,
    });
    api.exitLog(`You can find an example component in ${chalk.cyan(chalk.bold(src/components/FirestoreExample.vue))}. Don't forget to check your Firebase credentials!`)
  }

  let fireLines = `\nimport VueFire from 'vuefire';\n\nVue.use(VueFire);`;

  api.onCreateComplete(() => {
    const fs = require('fs');
    let contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' });
    const lines = contentMain.split(/\r?\n/g).reverse();

    // inject import
    const lastImportIndex = lines.findIndex(line => line.match(/^import/));
    lines[lastImportIndex] += fireLines;

    // modify app
    contentMain = lines.reverse().join('\n');
    fs.writeFileSync(api.entryFile, contentMain, { encoding: 'utf-8' });
  });
};