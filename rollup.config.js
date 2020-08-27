import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { name } from './package.json';

module.exports = (argv, env) => {
    return {
        input: './lib/index.js',
        output: [
            {
                file: `dist/${name}.common.js`,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: `dist/${name}.es.js`,
                format: 'es',
                sourcemap: true
            },
            {
                file: `dist/${name}.umd.js`,
                name: 'ReactSimpleLocalization',
                format: 'umd',
                sourcemap: true,
                globals: {
                    'react': 'React'
                }
            }
        ],
        plugins: [
            nodeResolve(),
            babel(),
            terser()
        ],
        external: ['react']
    };
};