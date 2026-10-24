/**
 * MiMo Desktop provider presets configuration
 *
 * MiMo Desktop stores providers in ~/.config/mimocode/mimocode.jsonc (POSIX)
 * or %LOCALAPPDATA%\mimocode\mimocode.jsonc (Windows). The format uses
 * `options.baseURL` and `options.apiKey`, with AI SDK package names in `npm`.
 */
import type { OpenCodeProviderOptions, ProviderCategory } from "../types";
import type { PresetTheme } from "./claudeProviderPresets";
import type { PresetFamilyFields } from "./presetFamilies";

export interface MimoDesktopProviderPreset extends PresetFamilyFields {
  name: string;
  nameKey?: string;
  websiteUrl: string;
  apiKeyUrl?: string;
  settingsConfig: MimoDesktopSettingsConfig;
  category?: ProviderCategory;
  icon?: string;
  iconColor?: string;
  isPartner?: boolean;
  partnerPromotionKey?: string;
  theme?: PresetTheme;
  /** Whether this preset is a placeholder for "use your own config" */
  isCustom?: boolean;
}

export interface MimoDesktopSettingsConfig {
  npm?: string;
  options?: OpenCodeProviderOptions;
  models?: Record<string, { name?: string; limit?: { context?: number; output?: number } }>;
  // 允许额外的任意字段，与表单 Zod schema 兼容
  [key: string]: unknown;
}

/** Default preset entry: lets users start with an empty config and fill it in. */
const customPreset: MimoDesktopProviderPreset = {
  name: "Custom MiMo",
  websiteUrl: "",
  settingsConfig: {
    npm: "@ai-sdk/openai-compatible",
    options: {
      baseURL: "",
      apiKey: "",
    },
    models: {},
  },
  category: "custom",
  icon: "xiaomimimo",
  iconColor: "#10b981",
  isCustom: true,
};

/** Xiaomi MiMo official presets — same structure as other apps' official presets. */
const xiaomiMimoPresets: MimoDesktopProviderPreset[] = [
  {
    name: "Xiaomi MiMo",
    nameKey: "preset.miMo",
    websiteUrl: "https://platform.xiaomimimo.com",
    apiKeyUrl: "https://platform.xiaomimimo.com/#/console/api-keys",
    settingsConfig: {
      npm: "@ai-sdk/openai-compatible",
      options: {
        baseURL: "https://api.xiaomimimo.com/v1",
        apiKey: "",
      },
      models: {
        "mimo-v2.6-pro": {
          name: "MiMo V2.6 Pro",
          limit: { context: 1048576, output: 131072 },
        },
        "mimo-v2.6-flash": {
          name: "MiMo V2.6 Flash",
          limit: { context: 1048576, output: 131072 },
        },
        "mimo-v2.5-pro": {
          name: "MiMo V2.5 Pro",
          limit: { context: 1048576, output: 131072 },
        },
      },
    },
    category: "cn_official",
    icon: "xiaomimimo",
    iconColor: "#10b981",
  },
  {
    name: "Xiaomi MiMo Token Plan (China)",
    nameKey: "preset.miMoTokenPlan",
    websiteUrl: "https://platform.xiaomimimo.com/#/token-plan",
    apiKeyUrl: "https://platform.xiaomimimo.com/#/console/plan-manage",
    settingsConfig: {
      npm: "@ai-sdk/openai-compatible",
      options: {
        baseURL: "https://token-plan-cn.xiaomimimo.com/v1",
        apiKey: "",
      },
      models: {
        "mimo-v2.6-pro": {
          name: "MiMo V2.6 Pro",
          limit: { context: 1048576, output: 131072 },
        },
        "mimo-v2.6-flash": {
          name: "MiMo V2.6 Flash",
          limit: { context: 1048576, output: 131072 },
        },
        "mimo-v2.5-pro": {
          name: "MiMo V2.5 Pro",
          limit: { context: 1048576, output: 131072 },
        },
        "mimo-v2.5": {
          name: "MiMo V2.5",
          limit: { context: 1048576, output: 131072 },
        },
      },
    },
    category: "cn_official",
    icon: "xiaomimimo",
    iconColor: "#10b981",
  },
];

/** All available presets for MiMo Desktop. */
export const mimoDesktopProviderPresets: MimoDesktopProviderPreset[] = [
  ...xiaomiMimoPresets,
  customPreset,
];
