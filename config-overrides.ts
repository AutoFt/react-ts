import {
  override,
  addWebpackAlias,
  addLessLoader,
  fixBabelImports,
} from "customize-cra";
import { resolve } from "path";

module.exports = override(
  addWebpackAlias({
    "@config": resolve(__dirname, "src/config"),
    "@routes": resolve(__dirname, "src/routes"),
    "@view": resolve(__dirname, "src/view"),
    "@utils": resolve(__dirname, "src/utils"),
  }),
  fixBabelImports("antd", { libraryName: "antd", style: true }),
  addLessLoader(
    {
      lessOptions: {
        javascriptEnabled: true,
        // modifyVars: { "@primary-color": "#1DA57A" },
      },
    },
    { exportLocalsConvention: "camelCase" }
  )
);
