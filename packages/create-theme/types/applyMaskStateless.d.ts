import { CreateMask, GenericTheme, MaskOptions, ThemeMask } from './createThemeTypes';
import { ThemeInfo } from './themeInfo';
export declare function applyMask<Theme extends GenericTheme | ThemeMask>(theme: Theme, mask: CreateMask, options?: MaskOptions, parentName?: string, nextName?: string): Theme;
export declare function applyMaskStateless<Theme extends GenericTheme | ThemeMask>(info: ThemeInfo, mask: CreateMask, options?: MaskOptions, parentName?: string): ThemeInfo & {
    theme: Theme;
};
//# sourceMappingURL=applyMaskStateless.d.ts.map