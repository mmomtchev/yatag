module.exports = {
  include: [ 'src/**/*.@(cpp|hpp|h|c)', 'lib/*.js' ],
  output: 'index.d.ts',
  root: 'gdal',
  mangle: (name) => name.replace(/gdal\./g, ''),
  filter: (name) => !name.match(/options\.|Constants/g)
}
