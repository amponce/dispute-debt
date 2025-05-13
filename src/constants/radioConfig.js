/**
 * Default configuration for radio button options.
 * Each object in the array represents a radio button with its properties.
 * @type {Array<{
 *   value: string,
 *   label: string,
 *   path: string,
 *   description: string
 * }>}
 */
export const RADIO_CONFIG = [
  {
    value: "firstOption",
    label: "First Option",
    path: "/contact-info",
    description: "This will take you to the first path",
  },
  {
    value: "secondOption",
    label: "Second Option",
    path: "/second-path",
    description: "This will take you to the second path",
  },
];

/**
 * Example of how to create additional configurations:
 *
 * Create a new configuration constant and pass it to the RadioOptions component:
 * <RadioOptions config={CUSTOM_RADIO_CONFIG} />
 *
 * Example:
 * export const CUSTOM_RADIO_CONFIG = [
 *   {
 *     value: "customOption1",
 *     label: "Custom Option 1",
 *     path: "/custom-path-1",
 *     description: "Description for custom option 1",
 *   },
 *   {
 *     value: "customOption2",
 *     label: "Custom Option 2",
 *     path: "/custom-path-2",
 *     description: "Description for custom option 2",
 *   },
 * ];
 */
