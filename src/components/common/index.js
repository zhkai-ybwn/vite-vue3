/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// 自动加载svg中所有的图标
let svgIcons = [];
const svgFiles = import.meta.globEager('../../assets/icons/*.svg'); // webpack方法
for (const path in svgFiles) {
    const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
    svgIcons = [...svgIcons, moduleName];
}
